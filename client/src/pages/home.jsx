import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Navigation from '../components/navigation';
import '../styles/layout.css';

export default function Home({ token, id, username, account }) {

    const navigate = useNavigate();

    // console.log("Home Rendered!");

    // Navigate to login if no token
    useEffect(() => {
        if (token == undefined) {
            console.log('Redirecting to login!');
            navigate('/login');
        }
        else
        {
            // console.log(account);

            // let inventory = JSON.parse(account.inventory);
            // let units = JSON.parse(account.units);
            // let wengines = JSON.parse(account.wengines);

            // console.log(inventory);
            // console.log(units);
            // console.log(wengines);
        }
    }, [token]);

    return (         
        <div className="layout">
            <Navigation pageName={'Home'} />
        </div>
    );
}