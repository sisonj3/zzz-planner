import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Navigation from './navigation';

export default function Wengines({ token }) {

    const navigate = useNavigate();

    // Navigate to login if no token
    useEffect(() => {
        if (token == undefined) {
            console.log('Redirecting to login!');
            navigate('/login');
        }
    }, [token]);

    return (
        <>
            <h1>W-engines</h1>

            <Navigation/>
        </>
    );
};