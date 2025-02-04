import plus from '../assets/plus.svg'

// List of items, Name of item type (Character or Wengine), callback to return selected item
export default function Add({ list, itemType, callback }) {

    function closeForm(event) {
        event.preventDefault();
    }

    function addItem(event) {
        event.preventDefault();
        //console.log(event);

        let selectedItem = event.target.parentNode[1].value

        callback(selectedItem);
    }

    return (
        <>
            <button><img src={plus} /></button>

            <form>

                <button onClick={closeForm}>X</button>

                <div>
                    <label htmlFor={ itemType }>{itemType}</label>
                    <select name={itemType} id={itemType}>
                        {list.map((item, index) => (
                            <option key={index} value={item.name}>{ item.name }</option>
                        ))}
                    </select>
                </div>

                <button onClick={addItem}>Add</button>
            </form>
                    
        </>
    );
}