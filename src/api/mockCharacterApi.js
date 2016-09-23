import delay from './delay';
import characters from './mockCharactersList';

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (character) => {
  return replaceAll(character.name, ' ', '-');
};

class CharacterApi {
  static getAllCharacters() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], characters));
      }, delay);
    });
  }

  static saveCharacter(character) {
    character = Object.assign({}, character);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCharacterNameLength = 1;
        if (character.name.length < minCharacterNameLength) {
          reject(`Name must be at least ${minCharacterNameLength} characters.`);
        }

        if (character.id) {
          const existingCharacterIndex = characters.findIndex(a => a.id == character.id);
          characters.splice(existingCharacterIndex, 1, character);
        } else {
          character.id = generateId(character);
          characters.push(character);
        }

        resolve(character);
      }, delay);
    });
  }

  static deleteCharacter(characterId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCharacterToDelete = characters.findIndex(character => {
          character.id == characterId;
        });
        characters.splice(indexOfCharacterToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CharacterApi;
