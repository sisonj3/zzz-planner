import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';

export default function NavBar() {

    return (
        <nav>
            <CustomLink goTo={'/'} name={'Home'} />
            <CustomLink goTo={'/agents'} name={'Agents'} />
            <CustomLink goTo={'/wengines'} name={'W-Engines'} />
            <CustomLink goTo={'/inventory'} name={'Inventory'}/>
        </nav>
    );

}