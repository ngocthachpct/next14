import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search: React.FC = () => {

  const inputStyle = {
    border: 'none',
    backgroundColor: '#EEEEEE',
    borderRadius: '0px',
    width: '15vw',
    borderBottom: '1px solid black',
    outline: 'none',
    ':focus': {
      borderBottom: '1px solid black', // keep the border-bottom consistent on focus
      backgroundColor: '#EEEEEE' // ensure the background remains the same
    }
  };
  

  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: '0vw'}}>
      <input placeholder="식단 검색" style={inputStyle}></input><FaMagnifyingGlass style={{marginLeft: '1vw', marginBottom: '-1vw'}}/>
    </div>
  );
};

export default Search;
