import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Home';
import Top from './Top';
import Bottom from './Bottom';
//import News from './News';
//import Research from './Research';
import Papers from './Papers';
import Conference from './Conference';
import Teaching from './Teaching';
import ResearchInterests from './ResearchInterests';
import WorkExperience from './WorkExperience';
import Education from './Education';
//import Members from './Members';
//import Sponsors from './Sponsors';
import { ColorCode } from './Constants';

const sectionStyle = { paddingTop: '1em', paddingBottom: '1em' };
const sectionStyle2 = { ...sectionStyle, backgroundColor: ColorCode.background };
const sectionStyle3 = { paddingTop: '1em', paddingBottom: '5em' };

/**
 * The top level layout for the site.
 */
ReactDOM.render(
  <React.StrictMode>
    <Home sectionStyle={sectionStyle}/>
    <Top/>
    <ResearchInterests sectionStyle={sectionStyle2} themeColour="blue" titleColour="darkBlue"/>
    <Papers sectionStyle={sectionStyle2} themeColour="blue" titleColour="darkBlue"/>
    <WorkExperience sectionStyle={sectionStyle2} themeColour="blue" titleColour="darkBlue"/>
    <Education sectionStyle={sectionStyle2} themeColour="yellow" titleColour="darkYellow"/>
    <Conference sectionStyle={sectionStyle2} themeColour="blue" titleColour="darkBlue"/>
    <Teaching sectionStyle={sectionStyle2} themeColour="yellow" titleColour="darkYellow"/>
    <Bottom/>

  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
// <WorkExperience sectionStyle={sectionStyle2} themeColour="yellow" titleColour="darkYellow"/>
// <News sectionStyle={sectionStyle2}/>
// <Research sectionStyle={sectionStyle}/>
// <Members sectionStyle={sectionStyle}/>
// <Sponsors sectionStyle={sectionStyle2}/>