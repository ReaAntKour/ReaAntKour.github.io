import React, { useState } from 'react';
//import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Title from './Title';
import { ColorCode } from './Constants';
//import { isPropertySignature } from 'typescript';

  
/* Make it easy to get the colour from caller function. */
const lightColour = {
    blue: ColorCode.vlightBlue,
    yellow: ColorCode.vlightYellow,
  };
  
  /* Make it easy to get the colour from caller function. */
  const darkColour = {
    blue: ColorCode.darkBlue,
    yellow: ColorCode.darkYellow,
  };
  

/**
 * Display the Research Interests section.
 */
function Teaching(props) {
    const deckStyle = { marginBottom: '0em' };
    const cardStyle = { backgroundColor: `${lightColour[props.themeColour]}`, border: `1px solid ${darkColour[props.themeColour]}`, marginBottom: '10px' };
  return (
    <div style={props.sectionStyle} id="teaching">
      <Container>
        <Title title={'Teaching and Supervision'} selectColor={props.titleColour}/>
        <CardDeck key={0} style={deckStyle}>
            <Card style={cardStyle}>
                <Card.Body>
                    <h2>Teaching</h2>
                    <p>•	Computer lab to 3rd Year Biochemistry<br/>
                    •	Lecture to 2nd Year Biology<br/>
                    •	Applying mathematical modelling to biological problems in plant science (2023) Webinar in the EMBL-EBI Training series Plants: a data sciences perspective. 15 March 2023. doi: 10.6019/TOL.Mathematical_Modelling_Plants-w.2023.00001.1<br/>
                    •	RNAseq course, January and March 2022<br/>
                    •	Python course, February 2022<br/>
                    •	Modelling temperature-dependent epigenetic regulation (2020) Invited talk at “Mathematics of life: Modelling molecular mechanisms” course by EMBL-EBI, UK, 28 September - 2 October 2020<br/>
                    •	Math problem classes to first year Biology students including developing exercises, University of East Anglia, UK, 2018.<br/>
                    •	Introductory python workshops, JIC Summer School, Jul 2018 and 2019.<br/>
                    •	“ODEs and experiments, bringing the two together” lecture in the postgraduate “Systems biology Level 2” course at JIC (22/2/2017) and follow-up at the “Epigenetics meets Mathematics” Summer School (2-8/7/2017).</p>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Body>
                    <h2>Supervised</h2>
                    <p>•	4 Master’s students<br/>
                    •	1 Undergraduate Honours project<br/>
                    •	4 Summer students</p>
                    <h2>Co-supervised</h2>
                    <p>•	2 PhD students<br/>
                    •	2 Master’s students<br/>
                    •	1 Summer student</p>
                </Card.Body>
            </Card>
        </CardDeck>
      </Container>
    </div>
  );
}

Teaching.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Teaching;
