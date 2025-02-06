import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navigation from '../components/navigation';
import WengineDisplay from '../components/wengineDisplay';
import Add from '../components/Add';
import getImg from '../scripts/getImg';
import wengine from '../classes/wengine';
import '../styles/layout.css';

const wenginesPath = '../assets/W-Engines';

export default function Wengines({ token, account }) {

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
                        console.log(response);
                    })
                    .catch(error => console.error(error));
                }
    }, [token]);

    // Wengine to Wengines
    function addWengine(wengineName) {
        let temp = wengines.slice();

        temp.push(new wengine(wengineName));
        setWengines(temp);

        console.log(temp);
    }

    return (
        <div className="layout">
            <Navigation pageName={'W-Engines'} />
            <main>
                <Add list={list} itemType={"W-Engine"} callback={addWengine} />
    
                {wengines.map((wengine, index) => (
                    <WengineDisplay
                        key={index}
                        imgUrl={getImg(wenginesPath, wengine.name)}
                        wengine={wengine}
                    />
                ))}

            </main>
        </div>
    );
};