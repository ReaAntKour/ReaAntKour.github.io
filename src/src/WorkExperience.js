import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Title from './Title';
import WorkExperienceData from './data/WorkExperienceData';
import WorkExperienceCard from './WorkExperienceCard';
import { ColorCode } from './Constants';

/**
 * Display the Work Experience section.
 */
function WorkExperience(props) {
const workExperienceData = new WorkExperienceData();
  const renderAll = () => {
    const keys = workExperienceData.getKeys();
    return (
      <div>
        {_.map(keys, (key, idx) => <WorkExperienceCard key={idx} entry={workExperienceData.getEntry(key)}/>)}
      </div>
    );
  };

  return (
    <div style={props.sectionStyle} id="workExperience">
      <Container>
        <Title title={'Post-doc Experience'} selectColor="lightBlue"/>
        <p style={{ fontWeight: 500, textAlign: 'center' }}>Current position: Postdoctoral Scientist, August 2014-present</p>
        <p style={{ fontSize: 25, fontWeight: 700, textAlign: 'center', color: ColorCode.darkBlue }}>John Innes Centre</p>
        <p style={{ textAlign: 'center' }}>In the groups of <a href='https://www.jic.ac.uk/people/martin-howard/'> Prof Martin Howard</a> and <a href='https://www.jic.ac.uk/people/caroline-dean/'> Prof Dame Caroline Dean</a> </p>
        <p style={{ textAlign: 'center' }}></p>
        {renderAll()}
      </Container>
    </div>
  );
}
//<p style={{ textAlign: 'center' }}>Department of Computational and Systems Biology,</p>
//<Image src={'/images/people/martin_howard.jpg'}/>
//<Image src={'/images/people/caroline_dean.jpg'}/>
        
WorkExperience.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default WorkExperience;