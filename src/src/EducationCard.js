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
const formatPHD = entry => `**${entry.year}**  
    ${entry.title}  
    ${entry.location}  
Topic: ${entry.topic}`;

const formatDegree = entry => `**${entry.year}**  
    ${entry.title}  
    ${entry.location}`;

const formatPHDmore = entry => `**Title: ${entry.thesisTitle}**  
  
${entry.area}  
  
${entry.abstract}  
  
Supervisors: ${entry.supervisors.join(', ')}  
  
${entry.vivaDate}  
  
${entry.result}`;

const formatDegreeMore = entry => `${entry.result}  
  
${(entry.abstract) ? `${entry.abstract}` : ''}  
${(entry.supervisor) ? `Supervisor: ${entry.supervisor}` : ''}  
${(entry.awards) ? `${entry.awards.join(', ')}` : ''}`;

/* Make it easy to get the format function from the document type. */
const formatAboveMap = {
  phd: formatPHD,
  degree: formatDegree
};

/* Make it easy to get the format function from the document type. */
const formatBelowMap = {
    phd: formatPHDmore,
    degree: formatDegreeMore
  };
  
/**
 * Display a WorkExperience, formatting appropriately for its type.
 * Clicking or tapping it will display its abstract.
 */
function WorkExperienceCard(props) {
  const cardStyle = { backgroundColor: `${ColorCode.vlightYellow}`, border: `1px solid ${ColorCode.darkYellow}`, marginBottom: '10px' };
  return (
    <Accordion>
      <Card style={cardStyle}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Markdown>
            {formatAboveMap[props.entry.type](props.entry)}
          </Markdown>
          More ˅
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
            <Card.Body>
                <Markdown>
                    {formatBelowMap[props.entry.type](props.entry)}
                </Markdown>
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