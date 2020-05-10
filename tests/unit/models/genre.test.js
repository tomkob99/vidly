const {Genre} = require('../../../models/genre');
const config = require('config');
const mongoose = require('mongoose');

describe('Genre', () => {
  it('should select data', async () => {
    const db = config.get('db');
    // console.log('Before connect');
    mongoose.connect(db)
    .then(() => console.info(`Connected to ${db}...`));
    // console.log('After connect');
    const genres = await Genre.find().sort('name');
    // console.log(genres);
    expect(genres[0].name).toBe('Action');
    expect(genres[1].name).toBe('Comedy');
    mongoose.disconnect();
  });
});