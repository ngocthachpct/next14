import React from 'react';
import './squareBox.css';

interface SquareBoxProps {
  isClicked: boolean;
  onClick: () => void;
}

const SquareBox1: React.FC<SquareBoxProps> = ({ isClicked, onClick }) => {
  return (
    <div className={`box ${isClicked ? 'clicked' : ''}`} onClick={onClick}>
      <div className="box1">
        <div className="row">
          <div className="square5"></div>
          <div className="square5"></div>
          <div className="square3"></div>
        </div>
        <div className="row">
          <div className="square4"></div>
          <div className="square6"></div>
        </div>
      </div>
      <div className="text">4찬 한식</div>
    </div>
  );
};

export default SquareBox1;
