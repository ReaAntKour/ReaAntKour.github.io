import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Title from './Title';
import { ColorCode } from './Constants';
import { isPropertySignature } from 'typescript';

/**
 * Display the Research Interests section.
 */
function ResearchInterests(props) {
  return (
    <div style={props.sectionStyle} id="researchInterests">
      <Container>
        <Title title={'Research Interests'} selectColor={props.titleColour}/>
        <p>My research focuses on plants’ response to temperature. I am particularly interested in how plants react to cold temperatures, how they recognise the seasons and how this will be affected by climate change.<br/>
        <br/>
        I combine mathematical modelling and biological experiments to understand the molecular changes that happen in plants in response to temperature, and predict these in future climates.<br/>
        <br/>
        My research has shown that plants sense temperature through daily extremes, rather than just the average (<a href="https://doi.org/10.1038%2Fs41467-018-03065-7">Hepworth et al 2018</a>). We also found that temperature sensing is “distributed”, meaning that multiple molecules and processes are affected by temperature, and these are combined by the plant into the temperature input signal (<a href="http://doi.org/10.1016/j.cels.2018.10.011">Antoniou-Kourounioti et al 2018</a>). We then looked more closely at long-term temperature sensing and found that plants sense temperature over weeks by measuring their growth rate with a dilution-based mechanism (<a href="https://doi.org/10.1038%2Fs41586-020-2485-4">Zhao et al 2020</a>). I also studied the stability of the memory of winter, where we found a new epigenetic state that is differentially stable through cell divisions depending on the underlying DNA sequence (<a href="https://doi.org/10.1101%2Fgad.333245.119">Qüesta et al 2020</a>).</p>
      </Container>
    </div>
  );
}
        
ResearchInterests.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default ResearchInterests;
