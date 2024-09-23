import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('20,810');
  const [smallDisplay, setSmallDisplay] = useState('4,900 + 15,910');

  return (
    <div className="calculator">
      <div className="microphone">
        <FontAwesomeIcon icon={faMicrophone} />
      </div>
      <div className="display">
        <small>{smallDisplay}</small>
        {displayValue}
      </div>
      <div className="buttons">
        <div className="button gray">C</div>
        <div className="button gray">+/-</div>
        <div className="button gray">%</div>
        <div className="button orange">÷</div>
        <div className="button gray">7</div>
        <div className="button gray">8</div>
        <div className="button gray">9</div>
        <div className="button orange">×</div>
        <div className="button gray">4</div>
        <div className="button gray">5</div>
        <div className="button gray">6</div>
        <div className="button orange">-</div>
        <div className="button gray">1</div>
        <div className="button gray">2</div>
        <div className="button gray">3</div>
        <div className="button orange">+</div>
        <div className="button gray" style={{ gridColumn: 'span 2' }}>0</div>
        <div className="button gray">.</div>
        <div className="button orange">=</div>
      </div>
    </div>
  );
};

export default Calculator;
