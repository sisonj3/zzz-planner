import { Link, useLocation } from 'react-router-dom';

export default function CustomLink({ goTo, name }) {
    
    const location = useLocation();

    if (location.pathname == goTo) {
        return ( <span>{name}</span> );
    }

    return (
        <Link to={goTo}>{ name }</Link>
    );
}