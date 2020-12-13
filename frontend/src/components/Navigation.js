import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { HomeIcon, GalleryIcon, SearchIcon, InfoIcon } from './Icons'

export default function Navigation() {
    return (
        <NavigationStyled>
            <NavLinkStyled exact to="/" activeClassName="active">
                <HomeIcon />
            </NavLinkStyled>
            <NavLinkStyled to="/gallery" activeClassName="active">
                <GalleryIcon />
            </NavLinkStyled>
            <NavLinkStyled to="/search" activeClassName="active">
                <SearchIcon />
            </NavLinkStyled>
            <NavLinkStyled exact to="/info" activeClassName="active">
                <InfoIcon />
            </NavLinkStyled>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.footer`
    background-color: var(--primary-light-transparent);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    height: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 0 20px;
    box-shadow:  0 0 20px var(--shadow-dark);

    .nav-icon {
        width: 28px;
        height: 28px; 
        stroke-width: 1.8;
    }

`

const NavLinkStyled = styled(NavLink)`
  color: var(--primary-dark);
  &.active {
    color: var(--primary-blue);
  }
  &:focus {
    outline: none;
  }
`