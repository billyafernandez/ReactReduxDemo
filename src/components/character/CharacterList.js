import React, { PropTypes } from 'react';
import CharacterListRow from './CharacterListRow';

const CharacterList = ({characters, filter}) => {

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
    <CharacterListRow key={character.id} character={character} />)

    return (
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Company</th>
                    <th>Name</th>
                    <th>Powers</th>
                    <th>Real Name</th>
                    <th>Aliases</th>
                </tr>
            </thead>
            <tbody>
            { filteredCharacters }
            </tbody>
        </table>
    );
};

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
    filter: PropTypes.object.isRequired
};

export default CharacterList;
