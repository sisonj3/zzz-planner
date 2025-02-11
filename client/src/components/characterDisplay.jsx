import { useState } from "react";
import plus from '../assets/plus.svg';

export default function CharacterDisplay({ imgUrl, agent, index, updateCallback, deleteCallback }){
    
    // States
    const [ascC, setAscC] = useState(agent.ascCorec);
    const [ascG, setAscG] = useState(agent.ascCoreg);
    const [lvlC, setLvlC] = useState(agent.lvlCorec);
    const [lvlG, setLvlG] = useState(agent.lvlCoreg);
    const [coreC, setCoreC] = useState(coreLetter(agent.coreCorec));
    const [coreG, setCoreG] = useState(coreLetter(agent.coreCoreg));

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

        updateCallback();
    }

    function changeAscG(event) {
        agent.asc_g = Number(event.target.value);
        setAscG(agent.asc_g);

        updateCallback();
    }

    function changeLvlC(event) {
        agent.lvl_c = Number(event.target.value);
        setLvlC(agent.lvl_c);

        updateCallback();
    }

    function changeLvlG(event) {
        agent.lvl_g = Number(event.target.value);
        setLvlG(agent.lvl_g);

        updateCallback();
    }

    function changeCoreC(event) {
        agent.core_c = Number(event.target.value);
        setCoreC(coreLetter(agent.core_c));

        updateCallback();
    }

    function changeCoreG(event) {
        agent.core_g = Number(event.target.value);
        setCoreG(coreLetter(agent.core_g));

        updateCallback();
    }

    function changes1C(event) {
        agent.s1_c = Number(event.target.value);
        setS1C(agent.s1_c);

        updateCallback();
    }

    function changes1G(event) {
        agent.s1_g = Number(event.target.value);
        setS1G(agent.s1_g);

        updateCallback();
    }

    function changes2C(event) {
        agent.s2_c = Number(event.target.value);
        setS2C(agent.s2_c);

        updateCallback();
    }

    function changes2G(event) {
        agent.s2_g = Number(event.target.value);
        setS2G(agent.s2_g);

        updateCallback();
    }

    function changes3C(event) {
        agent.s3_c = Number(event.target.value);
        setS3C(agent.s3_c);

        updateCallback();
    }

    function changes3G(event) {
        agent.s3_g = Number(event.target.value);
        setS3G(agent.s3_g);

        updateCallback();
    }

    function changes4C(event) {
        agent.s4_c = Number(event.target.value);
        setS4C(agent.s4_c);

        updateCallback();
    }

    function changes4G(event) {
        agent.s4_g = Number(event.target.value);
        setS4G(agent.s4_g);

        updateCallback();
    }

    function changes5C(event) {
        agent.s5_c = Number(event.target.value);
        setS5C(agent.s5_c);

        updateCallback();
    }

    function changes5G(event) {
        agent.s5_g = Number(event.target.value);
        setS5G(agent.s5_g);

        updateCallback();
    }

    function changeTracking(event) {
        agent.isTracked = event.target.checked;

        updateCallback();
    }


    return (
        <div className="agent">
            <button onClick={deleteAgentCallback} className='close addBtn'><img className='plus rotate' src={plus} /></button>

            <input type="checkbox" name="isTracked" id="isTracked" defaultChecked={agent.isTracked} onClick={changeTracking} />

            <img src={imgUrl} alt={agent.name} title={agent.name} />
        </div>
    );
};