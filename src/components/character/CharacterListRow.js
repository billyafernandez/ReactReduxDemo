import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CharacterListRow = ({character}) => {
    return (
        <tr>
            <td><Link to={'/character/' + character.id}>
            <img src={character.imageUrl} width="160" height="160" alt={character.name}/>
            </Link></td>
            <td>{character.companyId}</td>
            <td><Link to={'/character/' + character.id}>{character.name}</Link></td>
            <td>{character.powers}</td>
            <td>{character.realName}</td>
            <td>{character.alias}</td>
        </tr>
    );
};

CharacterListRow.propTypes = {
    character: PropTypes.object.isRequired
};

export default CharacterListRow;
