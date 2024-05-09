import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';
import { fonts } from '../var';

const FooterWrapper = styled.footer`
    width: 60%;
    margin: 2.5em auto;
    p {
        font-family: ${fonts.poppins.family};
        font-weight: ${fonts.poppins.weight};
        font-size: 0.85rem;
        color: #212121;
    }
    small {
        color: #799283;
    }
`;

export const Footer = () => {

    return(
        <>
            <FooterWrapper>
                <p>Travl Hotel Admin Dashboard</p>
                <small><FontAwesomeIcon icon={faCopyright}/> 2024 All Rights Reserved</small>
            </FooterWrapper>
        </>
    );
}