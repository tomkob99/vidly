
const request = require('supertest');
const {Genre} = require('../../models/genre');
const {User} = require('../../models/user');


describe('auth middleware', () => {
  let server;
  beforeEach(() => { server = require('../../index'); });
  afterEach(async () => {
    await server.close(); 
    await Genre.remove({}); 
 });

  it('should return 401 if no taken is provided', async() => {
    const res = await request(server)
      .post('/api/genres')
      .send({ name: 'genre1' });
    expect(res.status).toBe(401);
  });

  it('should return 400 if invalid taken is provide', async () => {
    // const token = new User().generateAuthToken();
    const token = 'a';
    const res = await request(server)
      .post('/api/genres')
      .set('x-auth-token', token)
      .send({ name: 'genre1' });
    
      expect(res.status).toBe(400);
  });

  it('should return 200 if token is valid', async () => {
    const token = (await User.findOne({ name: 'Tomio 2' }))
    .generateAuthToken();
  const res = await request(server)
    .post('/api/genres')
    .set('x-auth-token', token)
    .send({ name: 'genre1' });
    expect(res.status).toBe(200);
  });
});