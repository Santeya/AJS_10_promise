import GameSaving from '../gameSaving';
import read from '../reader';
import json from '../parser';
import GameSavingLoader from '../app';

test('setting up new game status', () => {
  const hitman = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000
    }
  };
  expect(new GameSaving(hitman)).toEqual({ id: 9, created: 1546300800, userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 }});
}) 


test('parse game data object to string', async (done) => {
  const data = await json(read());
  expect(data).toEqual('')
  done();
})

test('game saving', (done) => {
  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual({ id: 9, created: 1546300800, userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 } });
  }).catch((error) => error);
  done();
});
