import '../styles/inventoryItem.css';

export default function InventoryItem({ imgURL, itemName }) {

    return (
        <div className="inventoryItem">
            <img src={imgURL} alt={itemName} title={itemName} />
            <div>
                <label htmlFor="Amount Owned">Owned:</label>
                <input type="number" name="Amount Owned" id="Amount Owned" min={0}/>
            </div>
            <div>
                <span>Required: 9999</span>
            </div>
        </div>
    );
}