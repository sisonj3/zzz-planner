import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Navigation from '../components/navigation';

export default function Wengines({ token, account }) {

    const navigate = useNavigate();

    // Navigate to login if no token
    useEffect(() => {
        if (token == undefined) {
            console.log('Redirecting to login!');
            navigate('/login');
        }
    }, [token]);

    return (
        <div className="layout">
            <Navigation pageName={'W-Engines'} />
        </div>
    );
};