import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { colors, fonts } from '../var';

const Logo_Box = styled.div`
    display: flex;
    padding: 1em;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    
    svg {
        width: 5em;
        height: 5em;
        padding: 1em;
        path {
            fill: #135846;
        }
    }
    div {
        display: inline-block;

        p {
            font-family: ${fonts.poppins.family};
            font-weight: 900;
            font-size: 1.5rem;
            margin: 0;
        }
        small {
            font-family: ${fonts.poppins.family};
            color: ${colors.logo_admin_dashboard};
            font-weight: 200;
            font-size: 0.75rem;
        }
    }
`;

export const Logo = () => {

    return(
        <>
            <Logo_Box>
                <FontAwesomeIcon icon={faHotel}/>
                <div>
                    <p>Miranda</p>
                    <small>Hotel Admin Dashboard</small>
                </div>
            </Logo_Box>
        </>
    );
}