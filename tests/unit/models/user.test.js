const {User} = require('../../../models/user');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');

describe('user.generateAuthToken', () => {
  it('should return valid JWT', () => {
    const payload = { 
      _id: new mongoose.Types.ObjectId().toHexString(), 
      isAdmin: true
    };
    // const user = new User({ _id: '5eadf79e597bc56bfce4712f', isAdmin: true });
    const user = new User(payload);
    // console.log('user._id=', user._id);
    const token = user.generateAuthToken();
    // console.log('token=', token);
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    // console.log('decoded=', decoded);
    // expect(decoded).toMatchObject({ _id: '5eadf79e597bc56bfce4712f', isAdmin: true });
    expect(decoded).toMatchObject(payload);
  });
});