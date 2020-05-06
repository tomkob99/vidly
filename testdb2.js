const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const assert = require('assert')

// const dbstr = 'mongodb://192.168.0.36:27017/playground';
// const dbstr = 'mongodb+srv://tomio2:98819881@cluster0-lcupc.mongodb.net/playground?retryWrites=false&w=majority';
const dbstr = 'mongodb+srv://tomio2:98819881@cluster0-lcupc.mongodb.net/test?retryWrites=false&w=majority';
// const dbstr = 'mongodb+srv://cluster0-lcupc.mongodb.net/vidly?retryWrites=false&w=majority';

// MongoClient.connect(dbstr, (err, client) => {
MongoClient.connect(dbstr, (err, client) => {
    assert.equal(null, err)
    console.log("Connected successfully to server")
    // insertDocuments(db, () => {
    //     db.close()
    // })
//    var collection = client.db('vidly').collection('users');
    var collection = client.db('test').collection('log');

    collection.insertOne({
      name: 'hello'
  });
})

const insertDocuments = (db, callback) => {
    const documents = [
        { a: 1 },
        { a: 2 },
        { a: 3 }
    ]
    // myDBデータベースのdocumentsコレクションに対して
    // ドキュメントを3つ追加します
    db.collection('documents').insertMany(documents, (err, result) => {
        // insert結果の確認
        assert.equal(err, null)
        assert.equal(3, result.result.n)
        assert.equal(3, result.ops.length)

        console.log("Inserted 3 documents into the collection")
        callback(result)
    })
}