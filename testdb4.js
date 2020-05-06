
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// async function listDatabases(client){
//   const databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };


async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = 'mongodb+srv://tomio2:98819881@cluster0-lcupc.mongodb.net/vidly?retryWrites=false&w=majority';
  // const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";


  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      // await  listDatabases(client);
      console.log("client:", client);
      const databasesList = await client.db().admin().listDatabases();
      // const databasesList = await client.db().admin().listDatabases();

      // console.log("Databases:");
      // databasesList.databases.forEach(db => console.log(` - ${db.name}`));

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);