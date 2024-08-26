// Converted from app/scripts/common/directives/checkbox.js

import React, { useState } from 'react';
import { Glyphicon } from 'react-bootstrap';

interface CheckboxProps {
  check: boolean;
  onToggle: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ check, onToggle }) => {
  const handleClick = () => {
    onToggle(!check);
  };

  return (
    <span className="col-md-1" onClick={handleClick}>
      <Glyphicon glyph={check ? 'ok' : 'unchecked'} />
    </span>
  );
};

export default Checkbox;
