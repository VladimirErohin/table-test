import React from 'react';

const SearchInput = (props) => {
    return (
        <div className='search-panel'>
            <input type="text" value={props.value} onChange={e => props.setValue(e.target.value)}/>
            <button onClick={props.onEnter}>Enter</button>
        </div>
    );
};

export default SearchInput;