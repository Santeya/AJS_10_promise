import GameSaving from '../gameSaving';
import read, {savingData} from '../reader';
import json from '../parser';
import GameSavingLoader from '../app';

const hitman = new GameSaving(JSON.parse(savingData));

test('game saving', (done) => {
  GameSavingLoader.load().then(data => {   
    expect(data).toEqual(hitman);
    done();
  });
});
