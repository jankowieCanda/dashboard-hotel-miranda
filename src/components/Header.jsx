import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons';
import { fonts } from '../var';

const Header_Container = styled.header`
    width: 100%;
    height: 7.5em;
    display: flex;
    align-items: center;
    margin-left: 21.568em;
    position: fixed;
    top: 0;
`;

const Title = styled.h1`
    font-family: ${fonts.poppins.family};
    font-weight: ${fonts.poppins.weight};
    font-size: 1.75rem;
    margin: 0;
`;

const Superior_Menu = styled.nav`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
`;

const Nav_Wrapper = styled.div`
    width: 45%;
    display: inline-flex;
    align-items: center;
`;

export const Header = (props) => {

    return(
        <>
            <Header_Container>
                <Superior_Menu>
                    <Nav_Wrapper>
                        <FontAwesomeIcon icon={faChevronRight}/>
                        <Title>
                            {props.title}
                        </Title>
                    </Nav_Wrapper>
                    <Nav_Wrapper>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <FontAwesomeIcon icon={faBell}/>
                        <FontAwesomeIcon icon={faSignOut}/>
                    </Nav_Wrapper>
                </Superior_Menu>
            </Header_Container>
        </>
        
    )
}