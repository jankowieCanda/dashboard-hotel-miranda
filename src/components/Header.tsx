import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft as hide, faChevronRight as show, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons';
import { fonts } from '../var';
import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { Props } from '../interfaces/PropsInterface';
import { ShowHideContext } from './ShowHideContext';
import { Icon } from './Icon';

let Header_Container = styled.header`
    width: 75%;
    height: 7.5em;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #ffffff;
    z-index: 2;
`;

const Title = styled.h1`
    font-family: ${fonts.poppins.family};
    font-weight: ${fonts.poppins.weight};
    font-size: 1.75rem;
    margin: 0;
    margin-left: 1em;
`;

const Superior_Menu = styled.nav`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    div:last-of-type {
        margin-right: 3em;
        justify-content: right;
        
    }
    svg {
        padding: 0.5em;
        margin-left: 1em;
    }
`;

const Nav_Wrapper = styled.div`
    width: 45%;
    display: inline-flex;
    align-items: center;
`;

export const Header = (props: Props) => {
    const authcontext = useContext(AuthContext)
    const showHideContext = useContext(ShowHideContext); 
    const navigate = useNavigate();
    const [showHideIcon, setShowHideIcon] = useState(hide);

    const handleSignOutClick = (): void => {
        authcontext.dispatchSetAuthData('logout');
        navigate('/login');
    };

    const handleShowHideSideNav = (): void => {
        if(showHideIcon === hide) {
            setShowHideIcon(show);
            showHideContext.dispatchSetIsHide('hide');
            Header_Container = styled(Header_Container)`
                & {
                    width: 100%;
                }
            `
            
        } else {
            setShowHideIcon(hide);
            showHideContext.dispatchSetIsHide('show');
            Header_Container = styled(Header_Container)`
                & {
                    width: 75%;
                }
            `
        }
    }

    return(
        <>
            <Header_Container>
                <Superior_Menu>
                    <Nav_Wrapper>
                        <Icon icon={showHideIcon} onClick={handleShowHideSideNav} />
                        <Title>
                            {props.title}
                        </Title>
                    </Nav_Wrapper>
                    <Nav_Wrapper>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <FontAwesomeIcon icon={faBell}/>
                        <Icon icon={faSignOut} onClick={handleSignOutClick}/>
                    </Nav_Wrapper>
                </Superior_Menu>
            </Header_Container>
        </>
        
    )
}