import styled from "styled-components";
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

const NavItem = styled.li`
  color: #eee;
  background: #550202;
  list-style-type: none;
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
        <NavItem>Home</NavItem>
        <NavItem>History</NavItem>
        <NavItem>Help</NavItem>
      </NavBar>
    </>
  );
}

export default Header;
