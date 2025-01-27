import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Navigation from '../components/navigation';
import InventoryItem from '../components/inventoryItem';

export default function Inventory({ token, account }) {

    const navigate = useNavigate();
    const inventory = (account == undefined) ? undefined : JSON.parse(account.inventory);

    // Navigate to login if no token
    useEffect(() => {
        if (token == undefined) {
            console.log('Redirecting to login!');
            navigate('/login');
        } else {
            console.log(inventory);
        }
    }, [token]);

    return (
        <div className="layout">
            <Navigation pageName={'Inventory'} />
            <main>
                <InventoryItem/>
            </main>
        </div>
    );
};