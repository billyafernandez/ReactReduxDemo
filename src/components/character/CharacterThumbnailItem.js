import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CharacterThumbnailItem = ({character}) => {
    return (
        <li>
            <Link to={'/character/' + character.id}>
                <img src={character.imageUrl} width="160" height="160" alt={character.name}/>
            </Link>
            <div className="title">
                <Link to={'/character/' + character.id}>{character.name}</Link>
            </div>
        </li>
    );
};

CharacterThumbnailItem.propTypes = {
    character: PropTypes.object.isRequired
};

export default CharacterThumbnailItem;
