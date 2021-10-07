import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import { ColorCode } from './Constants';

/*
 * The following functions take an entry object and format it for a particular type of publication.
 * If your bibtex file has other types (booklet, manual, etc) then you'll have to add it here.
 */

const formatTitle = entry => `${entry.title}  
------`;

const formatPhDProjectAbove = entry => `**${entry.year}**  
    ${entry.area}  
    ${entry.location}`;

const formatProjectAbove = entry => `**${entry.year}**  
    ${entry.area}  
    ${entry.location}`;



/*
    
${entry.abstract}  
  
Supervisors: ${entry.supervisors.join(', ')}  
  
${entry.vivaDate}  
  
${entry.result}`;*/


/* Make it easy to get the format function from the document type. */
const formatAboveMap = {
  postdoc: formatProjectAbove,
  phd: formatPhDProjectAbove,
};

const formatProject = entry => {
  return (
    <div>
    {entry.collaboratorLogo1 ? <a href={entry.collaboratorLink1}> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-right'} width='200px' src={entry.collaboratorLogo1}/> </a> : ""}
    {entry.collaboratorLogo2 ? <a href={entry.collaboratorLink2}> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-right'} width='200px' src={entry.collaboratorLogo2}/> </a> : ""}
    <Markdown>
      {`${entry.supervisors}  `}
    </Markdown>
    {entry.contributors ? <Markdown>{`**Collaborators:** ${entry.contributors.join(', ')}  `}</Markdown>: ""}
    <Markdown>
      {`${entry.abstract}`}
    </Markdown>
    {entry.funderLogo ? <a href={entry.funderLink}> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-right'} width='200px' src={entry.funderLogo}/> </a> : ""}
    {entry.videoImage ? <a href={entry.videoLink}> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='250px' src={entry.videoImage}/> </a> : ""}
    </div>
  );
};

const formatPhDProject = entry =>  {
  return (
    <div>
      <a href={entry.collaboratorLink1}> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-right'} width='200px' src={entry.collaboratorLogo1}/> </a>
      {entry.collaboratorLogo2 ? <a href={entry.collaboratorLink2}> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-right'} width='200px' src={entry.collaboratorLogo2}/> </a> : ""}
      <Markdown>
        {`  **Title: ${entry.thesisTitle}**  
        **Supervisors:** ${entry.supervisors.join(', ')}`}
      </Markdown>
      <Markdown>
        {`**Collaborators:** ${entry.collaborators.join(', ')}`}
      </Markdown>
      <Markdown>
        {`${entry.abstract}`}
      </Markdown>
    </div>
  );
};

/* Make it easy to get the format function from the document type. */
const formatMap = {
  postdoc: formatProject,
  phd: formatPhDProject,
};

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
 * Display a WorkExperience, formatting appropriately for its type.
 * Clicking or tapping it will display its abstract.
 */
function WorkExperienceCard(props) {
  const cardStyle = { backgroundColor: `${lightColour[props.selectColor]}`, border: `1px solid ${darkColour[props.selectColor]}`, marginBottom: '10px' };
  return (
    <Accordion>
      <Card style={cardStyle}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <a href={props.entry.link}> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-right'} width='200px' src={props.entry.logo}/> </a>
          <a href={props.entry.imageLink}> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='200px' src={props.entry.image}/> </a>
          <Card style={{border: 'transparent', background: 'transparent', minWidth: '250px'}}>
            <Markdown>
              {formatTitle(props.entry)}
            </Markdown>
          </Card>
          <Markdown>
            {formatAboveMap[props.entry.type](props.entry)}
          </Markdown>
          More ˅
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
            <Card.Body>
              {formatMap[props.entry.type](props.entry)}
            </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
//{`${props.entry.contributors.join(', ')} \n ${props.entry.abstract}`}
//<p style={{ textAlign: 'center' }}> More <span class="glyphicon glyphicon-chevron-down"></span></p>

WorkExperienceCard.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default WorkExperienceCard;
