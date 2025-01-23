import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Navigation from './navigation';

export default function Inventory({ token }) {

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
            <h1>Inventory</h1>

            <Navigation/>
        </>
    );
};