import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://vinicioscararine95:Navaronee897157@cluster0.3pfo9yd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;