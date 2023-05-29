/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('playlist', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'Text',
      notNull: true,
    },
    owner: {
      type: 'Text',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('playlist');
};
