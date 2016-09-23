import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function characterReducer(state = initialState.characters, action) {
    switch(action.type) {
        case types.LOAD_CHARACTERS_SUCCESS:
            return action.characters;

        case types.CREATE_CHARACTER_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.character)
            ];

        case types.UPDATE_CHARACTER_SUCCESS:
            return [
                ...state.filter(character => character.id !== action.character.id),
                Object.assign({}, action.character)
            ];            
        default:
            return state;
    }
}
