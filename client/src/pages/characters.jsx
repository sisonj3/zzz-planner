import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import character from '../classes/character';
import getImg from '../scripts/getImg';
import Navigation from '../components/navigation';
import Add from '../components/Add';
import CharacterDisplay from '../components/characterDisplay';

const agentsPath = '../assets/Agents';

export default function Characters({ token, account, callback }) {

    const navigate = useNavigate();
    const [characters, setCharacters] = useState((account == undefined) ? [] : JSON.parse(account.units));
    const [list, setList] = useState([]);

    // Navigate to login if no token
    useEffect(() => {
        if (token == undefined) {
            console.log('Redirecting to login!');
            navigate('/login');
        } else {
            console.log("Characters page init...");

            // Fetch list of all characters
            fetch('http://localhost:3000/character', {
                    mode: 'cors',
                    method: 'GET',
                    headers: {
                        'authorization': `Bearer ${token}`,
                    },
                })
                    .then(response => response.json())
                    .then(response => {
                        setList(response);
                    })
                    .catch(error => console.error(error));
        }
    }, [token]);

    // Update characters when updated
    useEffect(() => {
        if (token != undefined) {
            updateAccountCharacters();
        }
    }, [characters]);

    // Add character to characters
    function addCharacter(characterName) {
        let temp = characters.slice();

        temp.push(new character(characterName));
        setCharacters(temp);

    }

    function deleteCharacterCallback(index) {
        let temp = characters.slice();

        if (index > -1) {
            temp.splice(index, 1);
        }

        setCharacters(temp);
    }

    function updateAccountCharacters() {
        console.log("updateAccountCharacters");
        console.log(characters);

        fetch(`http://localhost:3000/account/units/${account.userId}`, {
            mode: 'cors',
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ units: characters }),
        })
            .then(response => {
                callback();
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="layout">
            <Navigation pageName={'Agents'} />

            <main>
                {characters.map((character, index) => (
                    <CharacterDisplay
                        key={index}
                        imgUrl={getImg(agentsPath, character.name)}
                        agent={character}
                        index={index}
                        updateCallback={updateAccountCharacters}
                        deleteCallback={deleteCharacterCallback}
                    />
                ))}
            </main>

            <Add list={list} itemType={"Agent"} callback={addCharacter} />
        </div>
    );
};