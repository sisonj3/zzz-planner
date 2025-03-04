import CustomLink from './CustomLink';

export default function NavBar({pageName}) {

    return (
        <nav>
            <h1>{ pageName }</h1>
            <CustomLink goTo={'/'} name={'Home'} />
            <CustomLink goTo={'/agents'} name={'Agents'} />
            <CustomLink goTo={'/wengines'} name={'W-Engines'} />
            <CustomLink goTo={'/loadouts'} name={'Drive Disks'} />
            <CustomLink goTo={'/inventory'} name={'Inventory'} />
        </nav>
    );

}