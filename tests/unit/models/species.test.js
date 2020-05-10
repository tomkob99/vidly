
const config = require('config');
var mysql = require("mysql");

describe('Species', () => {
  it('should select data', () => {

    const connection = mysql.createConnection({
      host : '192.168.0.36',
      user : 'tomio',
      password : '98819881',
      database: 'animalhaven'
    });
    // 接続
    connection.connect();

    // userdataの取得
    //var param = ["Dog", "Cat"];
    var param = [];
    connection.query('SELECT species_name FROM Species;', function (err, rows, fields) {
        if (err) { console.log('err: ' + err); }

        // console.log('species_name: ' + rows[0].species_name);
        // console.log('species_name: ' + rows[1].species_name);
        expect(rows).toEqual(expect.arrayContaining([{'species_name': 'Cat'}, {'species_name': 'Dog'}]));
    });

  });
});