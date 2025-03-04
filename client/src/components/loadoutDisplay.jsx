import { useState, useEffect, useRef } from "react";
import plus from '../assets/plus.svg';
import gear from '../assets/gear.svg';

export default function LoadoutDisplay({ imgUrl, loadout, index, updateCallback, deleteCallback }) {
    
    const overlay = useRef(null);
    const sliders = useRef(null);

    // States
    const [d1, setD1] = useState(loadout.d1);
    const [d2, setD2] = useState(loadout.d2);
    const [d3, setD3] = useState(loadout.d3);
    const [d4, setD4] = useState(loadout.d4);
    const [d5, setD5] = useState(loadout.d5);
    const [d6, setD6] = useState(loadout.d6);

    // Update values when loadout changes during sorting
    useEffect(() => {
        setD1(loadout.d1);
        setD2(loadout.d2);
        setD3(loadout.d3);
        setD4(loadout.d4);
        setD5(loadout.d5);
        setD6(loadout.d6);
    }, [loadout]);

    function deleteLoadoutCallback() {
        deleteCallback(index);
    }

    function changeD1(event) {
        loadout.d1 = Number(event.target.value);
        setD1(loadout.d1);

        updateCallback();
    }

    function changeD2(event) {
        loadout.d2 = Number(event.target.value);
        setD2(loadout.d2);

        updateCallback();
    }

    function changeD3(event) {
        loadout.d3 = Number(event.target.value);
        setD3(loadout.d3);

        updateCallback();
    }

    function changeD4(event) {
        loadout.d4 = Number(event.target.value);
        setD4(loadout.d4);

        updateCallback();
    }

    function changeD5(event) {
        loadout.d5 = Number(event.target.value);
        setD5(loadout.d5);

        updateCallback();
    }

    function changeD6(event) {
        loadout.d6 = Number(event.target.value);
        setD6(loadout.d6);

        updateCallback();
    }

    function preventDrag(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <>
            <div className='overlay hidden' ref={overlay} draggable onDragStart={preventDrag}></div>  

            <div className="unit">
                <div className="buttons">
                    <button onClick={deleteLoadoutCallback} className='close'><img className='plus rotate' src={plus} /></button>
                </div>

                <div className="icon">
                    <img src={imgUrl} alt={loadout.name} title={loadout.name} />
                </div>

                <div className="substats" draggable onDragStart={preventDrag}>
                    <div>
                        <label htmlFor="Slot_1">D1</label>
                        <input type="number" name="Slot_1" id="Slot_1" min={0} max={9} value={d1} onInput={changeD1} />
                    </div>

                    <div>
                        <label htmlFor="Slot_2">D2</label>
                        <input type="number" name="Slot_2" id="Slot_2" min={0} max={9} value={d2} onInput={changeD2} />
                    </div>

                    <div>
                        <label htmlFor="Slot_3">D3</label>
                        <input type="number" name="Slot_3" id="Slot_3" min={0} max={9} value={d3} onInput={changeD3} />
                    </div>

                    <div>
                        <label htmlFor="Slot_4">D4</label>
                        <input type="number" name="Slot_4" id="Slot_4" min={0} max={9} value={d4} onInput={changeD4} />
                    </div>

                    <div>
                        <label htmlFor="Slot_5">D5</label>
                        <input type="number" name="Slot_5" id="Slot_5" min={0} max={9} value={d5} onInput={changeD5} />
                    </div>

                    <div>
                        <label htmlFor="Slot_6">D6</label>
                        <input type="number" name="Slot_6" id="Slot_6" min={0} max={9} value={d6} onInput={changeD6} />
                    </div>

                    <span>{((d1+d2+d3+d4+d5+d6) / 45).toFixed(2)}</span>
                </div>

            </div>
        </>
        
    );
}