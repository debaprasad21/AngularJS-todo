// Converted from app/scripts/common/directives/editablelabel.js

import React, { useState, useRef } from 'react';

interface EditableLabelProps {
  value: string;
  onChange: (newValue: string) => void;
}

const EditableLabel: React.FC<EditableLabelProps> = ({ value, onChange }) => {
  const [editMode, setEditMode] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const textBoxRef = useRef<HTMLInputElement>(null);

  const enterEditMode = () => {
    setCurrentValue(value);
    setEditMode(true);
    setTimeout(() => {
      textBoxRef.current?.focus();
    });
  };

  const commit = () => {
    setEditMode(false);
    onChange(currentValue);
  };

  const cancel = () => {
    setEditMode(false);
    setCurrentValue(value);
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      commit();
    }
    if (event.key === 'Escape') {
      cancel();
    }
  };

  return (
    <div>
      {editMode ? (
        <input
          ref={textBoxRef}
          type="text"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          onKeyUp={handleKeyUp}
          onBlur={commit}
        />
      ) : (
        <span onClick={enterEditMode}>{value}</span>
      )}
    </div>
  );
};

export default EditableLabel;
