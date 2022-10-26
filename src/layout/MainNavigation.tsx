import { NavLink } from "react-router-dom";
import styled from "styled-components";
import UrlPathEnum from "../enum/UrlPathEnum";

const HeaderStyled = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  padding: 0 10%;
  justify-content: space-between;
  align-items: center;
  background-color: #008080;

  & .logo {
    font-size: 2rem;
    color: white;
  }

  & .nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  & .nav li {
    margin-left: 1.5rem;
    font-size: 1.25rem;
  }

  & .nav a {
    text-decoration: none;
    color: #88dfdf;
  }

  & .nav a:hover,
  & .nav a:active,
  & .nav a.active {
    color: #e6fcfc;
  }
`;

export default function MainNavigation() {
  return (
    <HeaderStyled>
      <div className="logo">Great Quotes</div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to={UrlPathEnum.quotes}>All Quotes</NavLink>
          </li>
          <li>
            <NavLink to={UrlPathEnum.newQuote}>Add a Quote</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}
