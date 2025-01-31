import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Navigation from '../components/navigation';
import InventoryItem from '../components/inventoryItem';
import getImg from '../scripts/getImg';
import '../styles/layout.css';

const inventoryPath = '../assets/Inventory';

export default function Inventory({ token, account }) {

    const navigate = useNavigate();
    const inventory = (account == undefined) ? [] : JSON.parse(account.inventory);

    // Navigate to login if no token
    useEffect(() => {
        if (token == undefined) {
            console.log('Redirecting to login!');
            navigate('/login');
        } else {
            console.log(inventory);
        }
    }, [token]);

    if (token != undefined) {
        return (
            <div className="layout">
                <Navigation pageName={'Inventory'} />
                <main>
                    {inventory.map((item) => (
                        <InventoryItem
                            imgURL={getImg(inventoryPath, item.name)}
                            itemName={item.name}
                        />
                    ))}
                </main>
            </div>
        );
    }
    
};