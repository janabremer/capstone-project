import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { GalleryIcon, HomeIcon, InfoIcon, SearchIcon } from './Icons'

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
    box-shadow:  0 0 20px var(--shadow-dark);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 50px;
    justify-content: space-evenly;
    left: 0;
    max-width: var(--max-width);
    padding: 0 20px;
    place-items: center;
    position: fixed;
    right: 0;
    width: 100%;

    .nav-icon {
        height: 28px; 
        stroke-width: 1.8;
        width: 28px;
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