import React, { PropTypes } from 'react';

const CharacterFilterByAbecedary = ({onClick}) => {

    const abecedary = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    return (
        <div className="item-list">
            <ul className="glossary">
                <li className="first"><a href="#" onClick={() => onClick('All')}>All</a></li>

                {abecedary.map(abc =>
                    <li key={abc}><a href="#" className="avail" 
                    onClick={() => onClick(abc)}>{abc}</a></li>
                )}

                <li className="last">#</li>
            </ul>
        </div>
    );
};

CharacterFilterByAbecedary.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default CharacterFilterByAbecedary;
