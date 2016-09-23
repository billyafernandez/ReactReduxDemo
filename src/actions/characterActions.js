import * as types from './actionTypes';
import characterApi from '../api/mockCharacterApi';

export function loadCharactersSuccess(characters) {
    return { type: types.LOAD_CHARACTERS_SUCCESS, characters };
}

export function createCharacterSuccess(character) {
    return { type: types.CREATE_CHARACTER_SUCCESS, character };
}

export function updateCharacterSuccess(character) {
    return { type: types.UPDATE_CHARACTER_SUCCESS, character };
}

export function loadCharacters() {
    return function(dispatch) {        
        return characterApi.getAllCharacters().then(characters => {
            dispatch(loadCharactersSuccess(characters));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCharacter(character) {
    return function(dispatch, getState) {
        return characterApi.saveCharacter(character).then(savedCharacter => {
            character.id ? dispatch(updateCharacterSuccess(savedCharacter)) :
                dispatch(createCharacterSuccess(savedCharacter));
        }).catch(error => {
            throw(error);
        });
    };
}
