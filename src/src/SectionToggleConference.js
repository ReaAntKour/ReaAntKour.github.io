import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import { ColorCode } from './Constants';

/**
 * Display the "toggle switch" that appears at the top of most sections.
 * Note that the parent component can optionally pass in the toggle state as a property.
 * This is needed by the Research and Papers components, not needed for Members or News.
 */
function SectionToggle(props) {
  const selectedLabel = props.selectedLabel || 'Selected';
  const recentLabel = props.selectedLabel || 'Since 2021';
  const invitedLabel = props.selectedLabel || 'Invited';
  const buttonStyle = { borderColor: ColorCode[props.selectColor] };
  const selectedStyle = { ...buttonStyle, fontWeight: 'bold', backgroundColor: ColorCode[props.selectColor] };
  const deselectedStyle = {
    ...buttonStyle,
    fontWeight: 'normal',
    color: ColorCode[props.selectColor],
    backgroundColor: ColorCode.background,
  };
  const [selectStyle, setSelectStyle] =
    useState((props.toggleSetting === 'all') ? deselectedStyle : selectedStyle);
  const [recentStyle, setRecentStyle] =
    useState((props.toggleSetting === 'recent') ? selectedStyle : deselectedStyle);
    const [invitedStyle, setInvitedStyle] =
      useState((props.toggleSetting === 'invited') ? selectedStyle : deselectedStyle);
  const [allStyle, setAllStyle] =
    useState((props.toggleSetting === 'all') ? selectedStyle : deselectedStyle);

  const onClick = (buttonName) => {
    if (buttonName === 'selected') {
      setSelectStyle(selectedStyle);
      setRecentStyle(deselectedStyle);
      setInvitedStyle(deselectedStyle);
      setAllStyle(deselectedStyle);
      props.onClick('selected');
    } else
      if (buttonName === 'recent') {
        setSelectStyle(deselectedStyle);
        setRecentStyle(selectedStyle);
        setInvitedStyle(deselectedStyle);
        setAllStyle(deselectedStyle);
        props.onClick('recent');
      } else
        if (buttonName === 'invited') {
            setSelectStyle(deselectedStyle);
            setRecentStyle(deselectedStyle);
            setInvitedStyle(selectedStyle);
            setAllStyle(deselectedStyle);
            props.onClick('invited');
        } else
          if (buttonName === 'all') {
              setSelectStyle(deselectedStyle);
              setRecentStyle(deselectedStyle);
              setInvitedStyle(deselectedStyle);
              setAllStyle(selectedStyle);
              props.onClick('all');
              }
  };

  return (
    <Row style={{ marginBottom: '1em' }} className="justify-content-center">
      <ButtonGroup aria-label="Basic example">
        <Button onClick={() => onClick('selected')} style={selectStyle}>{selectedLabel}</Button>
        <Button onClick={() => onClick('recent')} style={recentStyle}>{recentLabel} ({props.recentCount})</Button>
        <Button onClick={() => onClick('invited')} style={invitedStyle}>{invitedLabel} ({props.invitedCount})</Button>
        <Button onClick={() => onClick('all')} style={allStyle}>All ({props.total})</Button>
      </ButtonGroup>
    </Row>
  );
}

SectionToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  recentCount: PropTypes.number.isRequired,
  invitedCount: PropTypes.number.isRequired,
  oralCount: PropTypes.number.isRequired,
  posterCount: PropTypes.number.isRequired,
  selectedLabel: PropTypes.string,
  toggleSetting: PropTypes.string,
};

export default SectionToggle;
