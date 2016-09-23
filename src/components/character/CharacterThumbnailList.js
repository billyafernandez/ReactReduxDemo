import React, { PropTypes } from 'react';
import CharacterThumbnailItem from './CharacterThumbnailItem';

const CharacterThumbnailList = ({characters, filter}) => {

    let filteredCharacters = characters;

    switch (filter.type) {
        case 'abecedary':
            if (filter.value !== 'All') {
                filteredCharacters = 
                filteredCharacters
                .filter(f => 
                    f.name.toLowerCase()
                    .startsWith(filter.value.toLowerCase()));   
            }
            break;
        default:
                filteredCharacters = 
                filteredCharacters
                .filter(f => 
                    f.name.toLowerCase()
                    .includes(filter.value.toLowerCase())); 
            break;
    }
    
    filteredCharacters = filteredCharacters
    .map(character => 
    <CharacterThumbnailItem key={character.id} character={character} />);

    return (
        <div className="browse-results-wrapper">
            <ul>
                {filteredCharacters}
            </ul>
        </div>
    );
};

CharacterThumbnailList.propTypes = {
    characters: PropTypes.array.isRequired,
    filter: PropTypes.object.isRequired
};

export default CharacterThumbnailList;
