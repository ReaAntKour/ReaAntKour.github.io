import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Title from './Title';
import ConferenceData from './data/ConferenceData';
import SectionToggle from './SectionToggleConference';
import ConferenceCard from './ConferenceCard';
import ConferenceForm from './ConferenceForm';

/**
 * Display the Conferences section.
 * When toggling to 'All', display a form rather than immediately displaying all of the Conferences.
 */
function Conferences(props) {
  const [display, setDisplay] = useState('selected');
  const conferenceData = new ConferenceData();

  const onClickSectionButton = (pushedButton) => {
    if (pushedButton === 'selected') {
      setDisplay('selected');
    } else
      if (pushedButton === 'recent') {
        setDisplay('recent');
      } else
        if (pushedButton === 'invited') {
          setDisplay('invited');
        } else
          if (pushedButton === 'oral') {
            setDisplay('oral');
          } else
            if (pushedButton === 'poster') {
              setDisplay('poster');
            } else
              if (pushedButton === 'all') {
                setDisplay('all');
              }
  };

  const render = (selection) => {
    let keys;
    if (selection === 'selected') {
      keys = conferenceData.getSelectedKeys();
    } else
      if (selection === 'recent') {
        keys = conferenceData.getRecentKeys();
      } else
        if (selection === 'invited') {
          keys = conferenceData.getInvitedKeys();
        } else
          if (selection === 'oral') {
            keys = conferenceData.getOralKeys();
          } else
            if (selection === 'poster') {
              keys = conferenceData.getPosterKeys();
            } else
              if (selection === 'all') {
                keys = conferenceData.getKeys();
              }
    return (
      <div>
        {_.map(keys, (key, idx) => <ConferenceCard key={idx} selectColor={props.themeColour} entry={conferenceData.getEntry(key)}/>)}
      </div>
    );
  };

  const renderRecent = () => {
    const keys = conferenceData.getRecentKeys();
    return (
      <div>
        {_.map(keys, (key, idx) => <ConferenceCard key={idx} selectColor={props.themeColour} entry={conferenceData.getEntry(key)}/>)}
      </div>
    );
  };

  const renderSelected = () => {
    const keys = conferenceData.getSelectedKeys();
    return (
      <div>
        {_.map(keys, (key, idx) => <ConferenceCard key={idx} selectColor={props.themeColour} entry={conferenceData.getEntry(key)}/>)}
      </div>
    );
  };

  const renderAll = () => {
    const keys = conferenceData.getKeys();
    return (
      <div>
        {_.map(keys, (key, idx) => <ConferenceCard key={idx} selectColor={props.themeColour} entry={conferenceData.getEntry(key)}/>)}
      </div>
    );
  };

  return (
    <div style={props.sectionStyle} id="conferences">
      <Container>
        <Title title={'Conferences and Seminars'} selectColor={props.titleColour}/>
        <SectionToggle onClick={onClickSectionButton} total={conferenceData.total()} recentCount={conferenceData.getRecentCount()} invitedCount={conferenceData.getInvitedCount()} oralCount={conferenceData.getOralCount()} posterCount={conferenceData.getPosterCount()} selectColor={props.titleColour}/>
        {render(display)}
      </Container>
    </div>
  );
}
// {display === 'selected' ? renderSelected() : <ConferenceForm/>}
// {display === 'selected' ? renderSelected() : (display === 'recent' ? renderRecent() : renderAll())}

Conferences.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Conferences;
