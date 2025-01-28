import temp from '../assets/temp.png';
import denny from '../assets/Inventory/Denny.png';

// Receives item prop from inventory 
// {
//      name
//      owned
//      needed
// }

const CertificationPath = '../assets/Inventory/Certification'
const ComponentPath = '../assets/Inventory/Component'
const CorePath = '../assets/Inventory/Core'
const SkillsPath = '../assets/Inventory/Skills'
const XPPath = '../assets/Inventory/XP'

function getImg(folder, fileName) {
    return new URL(`${folder}/${fileName}.png`, import.meta.url).href;
}

export default function InventoryItem({token}) {

    return (
        <>
            <img src={denny} alt='Denny' />
            <img src={getImg(SkillsPath, 'BasicFreezeChip')} alt='temp image' />
        </>
    );
}