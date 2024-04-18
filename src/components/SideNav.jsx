import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboard, faKey, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck, } from '@fortawesome/free-regular-svg-icons';
import { Footer } from './Footer';
import { Logo } from './Logo';
import { fonts } from '../var';

const Nav_Container = styled.nav`
    width: 21.563em;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
`;

const LinkBox = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 2em;
    svg {
        margin-left: 3em;
        path {
            fill: #799283;
        }
    }
`;

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #799283;
    font-family: ${fonts.poppins.family};
    margin-left: 3em;
    font-size: 1.125rem;
`;

const UserBox = styled.div`
    text-align: center;
    p {
        font-family: ${fonts.poppins.family};
        font-weight: 500;
        color: #393939;
        font-size: 1rem;  
    }
    p:last-of-type {
        color: #B2B2B2;
        font-size: 0.75rem;
    }
`;


export const SideNav = () => {

    return(
        <>
            <Nav_Container>
                <Logo />
                <LinkBox>
                    <FontAwesomeIcon icon={faChalkboard} />
                    <LinkStyled to={'/'}>Dashboard</LinkStyled>
                </LinkBox>
                <LinkBox>
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    <LinkStyled to={'/bookings'}>Bookings</LinkStyled>
                </LinkBox>
                <LinkBox>
                    <FontAwesomeIcon icon={faKey} />
                    <LinkStyled to={'/rooms'}>Rooms</LinkStyled>
                </LinkBox>
                <LinkBox>
                    <FontAwesomeIcon icon={faPhone} />
                    <LinkStyled to={'/contact'}>Contact</LinkStyled>
                </LinkBox>
                <LinkBox>
                    <FontAwesomeIcon icon={faUsers} />
                    <LinkStyled to={'/users'}>Users</LinkStyled>
                </LinkBox>
                <UserBox>
                    <img src="src\assets\react.svg" alt="" />
                    <p>User Name</p>
                    <p>info@mail.com</p>
                    <button>Edit</button>
                </UserBox>
                <Footer/>
            </Nav_Container>
        </>
    );
}