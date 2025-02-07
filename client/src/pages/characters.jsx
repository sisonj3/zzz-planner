import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Navigation from '../components/navigation';

export default function Characters({ token, account, callback }) {

    const navigate = useNavigate();

    // Navigate to login if no token
    useEffect(() => {
        if (token == undefined) {
            console.log('Redirecting to login!');
            navigate('/login');
        } else {
            callback();
        }
    }, [token]);

    return (
        <div className="layout">
            <Navigation pageName={'Agents'} />
        </div>
    );
};