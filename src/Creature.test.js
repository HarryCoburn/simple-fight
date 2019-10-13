import { Creature } from './Creature';

let badCreature;

test('Can make creature', () => {
  let newCreature = new Creature({
    name: 'foo',
    hp: 1,
    attack: () => {
      return 4;
    }
  });

  expect(newCreature.constructor.name).toBe('Creature');
  expect(newCreature.name).toBe('foo');
  expect(newCreature.hp).toBe(1);
  expect(typeof newCreature.attack).toBe('function');
});

test('Missing value throws error', () => {
  expect(() => {
    badCreature = new Creature();
  }).toThrow;
  expect(() => {
    badCreature = new Creature({
      hp: 1,
      attack: () => {
        return 4;
      }
    });
  }).toThrow;
  expect(() => {
    () => {
      badCreature = new Creature({
        name: 'foo',
        attack: () => {
          return 4;
        }
      });
    };
  }).toThrow;
  expect(() => {
    () => {
      badCreature = new Creature({
        name: 'foo',
        hp: 1
      });
    };
  }).toThrow;
});

test('Invalid type throws error', () => {
  expect(() => {
    badCreature = new Creature({
      name: 1,
      hp: 1,
      attack: () => {
        return 4;
      }
    });
  }).toThrow;
  expect(() => {
    () => {
      badCreature = new Creature({
        name: 'foo',
        hp: 'bar',
        attack: () => {
          return 4;
        }
      });
    };
  }).toThrow;
  expect(() => {
    () => {
      badCreature = new Creature({
        name: 'foo',
        hp: 1,
        attack: 'baz'
      });
    };
  }).toThrow;
});
