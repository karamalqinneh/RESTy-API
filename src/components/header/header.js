import styled from "styled-components";
import { Link } from "react-router-dom";

const Heading = styled.div`
  width: 100vw;
  height: 12.5vh;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  color: #eee;
  font-weight: 700;
  background-color: #111;
`;

const NavBar = styled.nav`
  width: 100vw;
  height: 7.5vh;
  background: #550202;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #eee;
  background: #550202;
  text-decoration: none;
  padding: 0.925rem 4vw;
  &:hover {
    background: #111;
    cursor: pointer;
  }
`;

function Header(props) {
  return (
    <>
      <Heading>
        <H1>RESTy</H1>
      </Heading>
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/history">History</StyledLink>
        <StyledLink to="/support">Support</StyledLink>
      </NavBar>
    </>
  );
}

export default Header;
