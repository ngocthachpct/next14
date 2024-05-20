import React from 'react';
import './squareBox.css';

interface SquareBoxProps {
  isClicked: boolean;
  onClick: () => void;
}

const SquareBox: React.FC<SquareBoxProps> = ({ isClicked, onClick }) => {
  return (
    <div className={`box ${isClicked ? 'clicked' : ''}`} onClick={onClick}>
      <div className="box1">
        <div className="row">
          <div className="square1"></div>
          <div className="square1"></div>
          <div className="square1"></div>
          <div className="square1"></div>
        </div>
        <div className="row">
          <div className="square2"></div>
          <div className="square2"></div>
        </div>
      </div>
      <div className="text">4찬 한식</div>
    </div>
  );
};

export default SquareBox;
