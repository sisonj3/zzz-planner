export default function InventoryItem({ imgURL, itemName }) {

    return (
        <div>
            <img src={imgURL} alt={itemName} />
        </div>
    );
}