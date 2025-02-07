import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navigation from '../components/navigation';
import WengineDisplay from '../components/wengineDisplay';
import Add from '../components/Add';
import getImg from '../scripts/getImg';
import wengine from '../classes/wengine';
import '../styles/layout.css';

const wenginesPath = '../assets/W-Engines';

export default function Wengines({ token, account, callback }) {

    const navigate = useNavigate();
    const [wengines, setWengines] = useState((account == undefined) ? [] : JSON.parse(account.wengines));
    const [list, setList] = useState([]);


    // Navigate to login if no token
    useEffect(() => {
        if (token == undefined) {
            console.log('Redirecting to login!');
            navigate('/login');
        } else {
            console.log(wengines);

            // Fetch list of all W-engines
            fetch('http://localhost:3000/wengine', {
                    mode: 'cors',
                    method: 'GET',
                    headers: {
                        'authorization': `Bearer ${token}`,
                    },
                })
                    .then(response => response.json())
                    .then(response => {
                        setList(response);
                        //console.log(response);
                    })
                    .catch(error => console.error(error));
                }
    }, [token]);

    // Update wengines when state changes
    useEffect(() => {
        if (token != undefined) {
            updateAccountWengines();
        }
    }, [wengines])

    // Wengine to Wengines
    function addWengine(wengineName) {
        let temp = wengines.slice();

        temp.push(new wengine(wengineName));
        setWengines(temp);

        // console.log("addWengine");
        // console.log(wengines);

    }

    function deleteWengineCallback(index) {
        let temp = wengines.slice();

        if (index > -1) {
            temp.splice(index, 1);
        }

        setWengines(temp);

        // console.log("deleteWengineCallback");
        // console.log(wengines);
    }

    // Update account wengines array with fetch
    function updateAccountWengines() {
        console.log("updateAccountWengines()");
        console.log(wengines);

        fetch(`http://localhost:3000/account/wengines/${account.userId}`, {
            mode: 'cors',
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ wengines: wengines }),
        })
            .then(response => {
                callback();
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="layout">
            <Navigation pageName={'W-Engines'} />
            
            <main>    
                {wengines.map((wengine, index) => (
                    <WengineDisplay
                        key={index}
                        imgUrl={getImg(wenginesPath, wengine.name)}
                        wengine={wengine}
                        index={index}
                        callback={updateAccountWengines}
                        deleteCallback={deleteWengineCallback}
                    />
                ))}

            </main>

            <Add list={list} itemType={"W-Engine"} callback={addWengine} />
        </div>
    );
};