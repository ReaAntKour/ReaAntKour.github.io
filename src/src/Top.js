import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { ColorCode } from './Constants';

/**
 * Display the "NavBar" at the top of the page.
 */
function Top() {
  const navbarStyle = { backgroundColor: ColorCode.darkBlue, color: ColorCode.background, fontWeight: 'bold' };
  const navbarItemStyle = { backgroundColor: ColorCode.darkBlue, color: ColorCode.background, fontWeight: 'bold' };
  return (
    <div>
      <Navbar style={navbarStyle}>
        <Container className="justify-content-center">
          <Nav>
            <Nav.Item><Nav.Link href="#papers" style={navbarItemStyle}>Publications</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#workExperience" style={navbarItemStyle}>Research Experience</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#education" style={navbarItemStyle}>Education</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#conferences" style={navbarItemStyle}>Conferences and Seminars</Nav.Link></Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
/*
function Top() {
  const navbarStyle = { backgroundColor: ColorCode.darkBlue, color: ColorCode.background, fontWeight: 'bold' };
  const navbarItemStyle = { backgroundColor: ColorCode.darkBlue, color: ColorCode.background, fontWeight: 'bold' };
  return (
    <div>
      <Navbar style={navbarStyle}>
        <Container className="justify-content-center">
          <Nav>
            <Nav.Item><Nav.Link href="#researchInterests" style={navbarItemStyle}>Research Interests</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#workExperience" style={navbarItemStyle}>Research Experience</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#education" style={navbarItemStyle}>Education</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#papers" style={navbarItemStyle}>Papers</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#conferences" style={navbarItemStyle}>Conferences and Seminars</Nav.Link></Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
 */
//const navbarStyle = { border: `4px solid ${ColorCode.darkBlue}`, backgroundColor: ColorCode.background, color: ColorCode.darkBlue, fontWeight: 'bold' };
//const navbarItemStyle = { backgroundColor: ColorCode.background, color: ColorCode.darkBlue, fontWeight: 'bold' };

export default Top;
