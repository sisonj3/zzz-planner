import { useState, useRef, useEffect } from "react";
import getAgentMats from "../scripts/getAgentMats";
import plus from '../assets/plus.svg';
import gear from '../assets/gear.svg';

export default function CharacterDisplay({ token, imgUrl, agent, index, updateCallback, deleteCallback }){
    
    const overlay = useRef(null);
    const sliders = useRef(null);

    // States
    const [ascC, setAscC] = useState(agent.asc_c);
    const [ascG, setAscG] = useState(agent.asc_g);
    const [lvlC, setLvlC] = useState(agent.lvl_c);
    const [lvlG, setLvlG] = useState(agent.lvl_g);
    const [coreC, setCoreC] = useState(coreLetter(agent.core_c));
    const [coreG, setCoreG] = useState(coreLetter(agent.core_g));
    const [s1C, setS1C] = useState(agent.s1_c);
    const [s1G, setS1G] = useState(agent.s1_g);
    const [s2C, setS2C] = useState(agent.s2_c);
    const [s2G, setS2G] = useState(agent.s2_g);
    const [s3C, setS3C] = useState(agent.s3_c);
    const [s3G, setS3G] = useState(agent.s3_g);
    const [s4C, setS4C] = useState(agent.s4_c);
    const [s4G, setS4G] = useState(agent.s4_g);
    const [s5C, setS5C] = useState(agent.s5_c);
    const [s5G, setS5G] = useState(agent.s5_g);
    const [mats, setMats] = useState([]);

    // Get materials
    useEffect(() => {
        updateMats();
    }, []);
    
    // useEffect(() => {
    //     console.log("Materials")
    //     console.log(mats);
    // }, [mats]);

    function updateMats() {
        let promise = getAgentMats(token, agent);

        promise.then((list) => {
            setMats(list);
        });
    }

    function coreLetter(coreNum) {
        switch (coreNum) {
            case 1:
                return "A";
            case 2:
                return "B";
            case 3:
                return "C";
            case 4:
                return "D";
            case 5:
                return "E";
            case 6:
                return "F";
            default:
                return "None";
        }
    }

    function deleteAgentCallback() {
        deleteCallback(index);
    }

    function changeAscC(event) {
        agent.asc_c = Number(event.target.value);
        setAscC(agent.asc_c);
        updateMats();

        updateCallback();
    }

    function changeAscG(event) {
        agent.asc_g = Number(event.target.value);
        setAscG(agent.asc_g);
        updateMats();

        updateCallback();
    }

    function changeLvlC(event) {
        agent.lvl_c = Number(event.target.value);
        setLvlC(agent.lvl_c);
        updateMats();

        updateCallback();
    }

    function changeLvlG(event) {
        agent.lvl_g = Number(event.target.value);
        setLvlG(agent.lvl_g);
        updateMats();

        updateCallback();
    }

    function changeCoreC(event) {
        agent.core_c = Number(event.target.value);
        setCoreC(coreLetter(agent.core_c));
        updateMats();

        updateCallback();
    }

    function changeCoreG(event) {
        agent.core_g = Number(event.target.value);
        setCoreG(coreLetter(agent.core_g));
        updateMats();

        updateCallback();
    }

    function changeS1C(event) {
        agent.s1_c = Number(event.target.value);
        setS1C(agent.s1_c);
        updateMats();

        updateCallback();
    }

    function changeS1G(event) {
        agent.s1_g = Number(event.target.value);
        setS1G(agent.s1_g);
        updateMats();

        updateCallback();
    }

    function changeS2C(event) {
        agent.s2_c = Number(event.target.value);
        setS2C(agent.s2_c);
        updateMats();

        updateCallback();
    }

    function changeS2G(event) {
        agent.s2_g = Number(event.target.value);
        setS2G(agent.s2_g);
        updateMats();

        updateCallback();
    }

    function changeS3C(event) {
        agent.s3_c = Number(event.target.value);
        setS3C(agent.s3_c);
        updateMats();

        updateCallback();
    }

    function changeS3G(event) {
        agent.s3_g = Number(event.target.value);
        setS3G(agent.s3_g);
        updateMats();

        updateCallback();
    }

    function changeS4C(event) {
        agent.s4_c = Number(event.target.value);
        setS4C(agent.s4_c);
        updateMats();

        updateCallback();
    }

    function changeS4G(event) {
        agent.s4_g = Number(event.target.value);
        setS4G(agent.s4_g);
        updateMats();

        updateCallback();
    }

    function changeS5C(event) {
        agent.s5_c = Number(event.target.value);
        setS5C(agent.s5_c);
        updateMats();

        updateCallback();
    }

    function changeS5G(event) {
        agent.s5_g = Number(event.target.value);
        setS5G(agent.s5_g);
        updateMats();

        updateCallback();
    }

    function changeTracking(event) {
        agent.isTracked = event.target.checked;

        updateCallback();
    }

    function openSliders(event) {
        event.preventDefault();

        overlay.current.classList.remove('hidden');
        sliders.current.classList.remove('hidden');
    }

    function closeSliders(event) {
        event.preventDefault();

        overlay.current.classList.add('hidden');
        sliders.current.classList.add('hidden');
    }

    return (
        <>
            <div className='overlay hidden' ref={overlay}></div> 

            <div className="unit">
                <div className="buttons">

                    <input type="checkbox" name="isTracked" id="isTracked" defaultChecked={agent.isTracked} onClick={changeTracking} />

                    <button onClick={openSliders} className="settings"><img src={gear} /></button>

                    <button onClick={deleteAgentCallback} className='close'><img className='plus rotate' src={plus} /></button>
    
                </div>

                <div className="icon">
                    <img src={imgUrl} alt={agent.name} title={agent.name} />
                </div>
                
                <div className="materials">
                    {mats.map((mat, index) => (
                        <div className="material" key={index}>
                            <img src={mat.imgUrl} alt={mat.name} title={mat.name} />
                            <span >{mat.amount}</span>
                        </div>
                    ))}
                </div>

                <div className="sliders hidden" ref={sliders}>

                    <button onClick={closeSliders} className='close addBtn'><img className='plus rotate' src={plus} /></button>

                    <div>
                        <label htmlFor="asc-c">Current Ascension:</label>
                        <input type="range" name="asc-c" id="asc-c" min={0} max={5} defaultValue={agent.asc_c} onInput={changeAscC} />
                        <span>{ascC}</span>
                    </div>

                    <div>
                        <label htmlFor="asc-g">Final Ascension:</label>
                        <input type="range" name="asc-g" id="asc-g" min={0} max={5} defaultValue={agent.asc_g} onInput={changeAscG} />
                        <span>{ascG}</span>
                    </div>

                    <div>
                        <label htmlFor="lvl-c">Current Level:</label>
                        <input type="range" name="lvl-c" id="lvl-c" min={1} max={60} defaultValue={agent.lvl_c} onInput={changeLvlC}/>
                        <span>{lvlC}</span>
                    </div>
                    
                    <div>
                        <label htmlFor="lvl-g">Goal Level:</label>
                        <input type="range" name="lvl-g" id="lvl-g" min={1} max={60} defaultValue={agent.lvl_g} onInput={changeLvlG}/>
                        <span>{lvlG}</span>
                    </div>

                    <div>
                        <label htmlFor="core-c">Current Core:</label>
                        <input type="range" name="core-c" id="core-c" min={0} max={6} defaultValue={agent.core_c} onInput={changeCoreC} />
                        <span>{coreC}</span>
                    </div>

                    <div>
                        <label htmlFor="asc-g">Final Core:</label>
                        <input type="range" name="core-g" id="core-g" min={0} max={6} defaultValue={agent.core_g} onInput={changeCoreG} />
                        <span>{coreG}</span>
                    </div>

                    <div>
                        <label htmlFor="s1-c">Current S1:</label>
                        <input type="range" name="s1-c" id="s1-c" min={1} max={12} defaultValue={agent.s1_c} onInput={changeS1C} />
                        <span>{s1C}</span>
                    </div>

                    <div>
                        <label htmlFor="s1-g">Final S1:</label>
                        <input type="range" name="s1-g" id="s1-g" min={1} max={12} defaultValue={agent.s1_g} onInput={changeS1G} />
                        <span>{s1G}</span>
                    </div>

                    <div>
                        <label htmlFor="s2-c">Current S2:</label>
                        <input type="range" name="s2-c" id="s2-c" min={1} max={12} defaultValue={agent.s2_c} onInput={changeS2C} />
                        <span>{s2C}</span>
                    </div>

                    <div>
                        <label htmlFor="s2-g">Final S2:</label>
                        <input type="range" name="s2-g" id="s2-g" min={1} max={12} defaultValue={agent.s2_g} onInput={changeS2G} />
                        <span>{s2G}</span>
                    </div>

                    <div>
                        <label htmlFor="s3-c">Current S3:</label>
                        <input type="range" name="s3-c" id="s3-c" min={1} max={12} defaultValue={agent.s3_c} onInput={changeS3C} />
                        <span>{s3C}</span>
                    </div>

                    <div>
                        <label htmlFor="s3-g">Final S3:</label>
                        <input type="range" name="s3-g" id="s3-g" min={1} max={12} defaultValue={agent.s3_g} onInput={changeS3G} />
                        <span>{s3G}</span>
                    </div>

                    <div>
                        <label htmlFor="s4-c">Current S4:</label>
                        <input type="range" name="s4-c" id="s4-c" min={1} max={12} defaultValue={agent.s4_c} onInput={changeS4C} />
                        <span>{s4C}</span>
                    </div>

                    <div>
                        <label htmlFor="s4-g">Final S4:</label>
                        <input type="range" name="s4-g" id="s4-g" min={1} max={12} defaultValue={agent.s4_g} onInput={changeS4G} />
                        <span>{s4G}</span>
                    </div>

                    <div>
                        <label htmlFor="s5-c">Current S5:</label>
                        <input type="range" name="s5-c" id="s5-c" min={1} max={12} defaultValue={agent.s5_c} onInput={changeS5C} />
                        <span>{s5C}</span>
                    </div>

                    <div>
                        <label htmlFor="s5-g">Final S5:</label>
                        <input type="range" name="s5-g" id="s5-g" min={1} max={12} defaultValue={agent.s5_g} onInput={changeS5G} />
                        <span>{s5G}</span>
                    </div>
                </div>

            </div>
        </>
        
    );
};