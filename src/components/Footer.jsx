import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, } from '@fortawesome/free-regular-svg-icons';

export const Footer = () => {

    return(
        <>
            <footer>
                <p>Travl Hotel Admin Dashboard</p>
                <small><FontAwesomeIcon icon={faCopyright}/> 2024 All Rights Reserved</small>
            </footer>
        </>
    );
}