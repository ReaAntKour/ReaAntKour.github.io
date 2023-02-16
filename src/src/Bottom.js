import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import preval from 'preval.macro';
import { ColorCode } from './Constants';

/**
 * Display the footer.
 * Uses the preval macro so that the "deployed" version of the site has a Last update timestamp.
 */
function Bottom() {
  const bottomStyle = { backgroundColor: ColorCode.darkBlue, color: ColorCode.background, fontWeight: 'bold', paddingTop: '20px', paddingBottom: '20px' };
  return (
    <div style={bottomStyle}>
        <Container>
          <Row className="justify-content-center">
          <p>Dr Rea Antoniou-Kourounioti<br/>
            School of Molecular Biosciences<br/>
            College of Medical, Veterinary and Life Sciences<br/>
            University of Glasgow<br/>
            Glasgow G12 8QQ, United Kingdom<br/>
            Contact: realaila.antonioukourounioti@glasgow.ac.uk<br/>
            <small>Page Last Updated: {preval`module.exports = new Date().toLocaleString();`}</small><br/>
            <small>Website designed based on the Academic Research Website Template by Phillip M Johnson: <a href='https://github.com/csdl/csdl.github.io'> https://github.com/csdl/csdl.github.io</a></small>
          </p>
          </Row>
        </Container>
    </div>
  );
}

export default Bottom;
