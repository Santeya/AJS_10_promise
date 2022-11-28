import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      resolve(read());
    })
      .then((response) => json(response))
      .then((response) => new GameSaving(JSON.parse(response)))
      .catch((error) => console.log(error));
  }
}
