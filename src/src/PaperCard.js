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
const formatTechReport = entry => `${entry.authors.join(', ')},  **${entry.title}**, Technical Report ${entry.number}, ${entry.month} ${entry.year}, ${entry.institution} ${(entry.note) ? `([pdf](${entry.note}))` : ''}`;

const formatPhdThesis = entry => `${entry.authors.join(', ')},  **${entry.title}**, Ph.D. Thesis, ${entry.school}, ${entry.month} ${entry.year}, ${entry.school} ${(entry.note) ? `([pdf](${entry.note}))` : ''}`;

const formatMsThesis = entry => `${entry.authors.join(', ')},  **${entry.title}**, M.S. Thesis, ${entry.school}, ${entry.month} ${entry.year}, ${entry.school} ${(entry.note) ? `([pdf](${entry.note}))` : ''}`;

const formatInProceedings = entry => `${entry.authors.join(', ')},  **${entry.title}**, In *${entry.booktitle}*, ${entry.address ? `${entry.address},` : ''} ${entry.month} ${entry.year}, ${(entry.note) ? `([pdf](${entry.note}))` : ''}`;

const formatArticle = entry => `${entry.authors.join(', ')},  **${entry.title}**. *${entry.journal}*, ${entry.volume ? `**${entry.volume}**:` : ''} ${entry.pages ? `${entry.pages},` : ''} ${entry.month ? entry.month : ''} ${entry.year}, ([link](${entry.url})) ${(entry.note) ? `, (${entry.note})` : ''}`;

const formatMisc = entry => `${entry.authors.join(', ')},  **${entry.title}**, ${entry.howpublished}, ${entry.month} ${entry.year}, ${(entry.note) ? `([pdf](${entry.note}))` : ''}`;

const formatInBook = entry => `${entry.authors.join(', ')},  **${entry.chapter}**, In *${entry.title}*, ${entry.year}, ${entry.publisher}, ([link](${entry.url})) ${(entry.note) ? `([pdf](${entry.note}))` : ''}`;

/* Make it easy to get the format function from the document type. */
const formatMap = {
  techreport: formatTechReport,
  phdthesis: formatPhdThesis,
  mastersthesis: formatMsThesis,
  inproceedings: formatInProceedings,
  article: formatArticle,
  preprint: formatArticle,
  misc: formatMisc,
  inbook: formatInBook,
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
 * Display a Paper, formatting appropriately for its type.
 * Clicking or tapping it will display its abstract.
 */
function PaperCard(props) {
  const cardStyle = { backgroundColor: `${lightColour[props.selectColor]}`, border: `1px solid ${darkColour[props.selectColor]}`, marginBottom: '10px' };
  return (
    <Accordion>
      <Card style={cardStyle}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Markdown>
            {formatMap[props.entry.type](props.entry)}
          </Markdown>
          Abstract ˅
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body><Markdown>{`${props.entry.abstract}`}</Markdown></Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
// <p style={{ textAlign: 'center' }}> Abstract <span class="glyphicon glyphicon-chevron-down"></span></p>

PaperCard.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default PaperCard;
