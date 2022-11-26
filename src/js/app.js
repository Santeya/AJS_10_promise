import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      resolve(read());
    })
      .then((response) => json(response))
      .then((response) => new GameSaving(response));
  }
}
