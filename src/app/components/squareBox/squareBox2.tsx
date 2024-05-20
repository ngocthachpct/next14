import React from 'react';
import './squareBox.css';

interface SquareBoxProps {
  isClicked: boolean;
  onClick: () => void;
}

const SquareBox2: React.FC<SquareBoxProps> = ({ isClicked, onClick }) => {
  return (
    <div className={`box ${isClicked ? 'clicked' : ''}`} onClick={onClick}>
      <div className="box2">
        <div className="row">
          <div className="square7"></div>
          <div className="square8"></div>
        </div>
      </div>
      <div className="text">4찬 한식</div>
    </div>
  );
};

export default SquareBox2;
