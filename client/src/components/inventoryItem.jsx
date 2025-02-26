import { useEffect } from 'react';
import '../styles/inventoryItem.css';

export default function InventoryItem({ imgURL, item }) {

    // useEffect(() => {
    //     console.log(item);
    // }, []);

    return (
        <div className="inventoryItem">
            <img src={imgURL} alt={item.name} title={item.name} />
            <div>
                <label htmlFor="Amount Owned">Owned:</label>
                <input type="number" name="Amount Owned" id="Amount Owned" min={0} defaultValue={item.owned}/>
            </div>
            <div>
                <span>Required: {item.needed}</span>
            </div>
        </div>
    );
}