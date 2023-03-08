import mongoose, { ConnectionStates } from 'mongoose';

interface mongooseConnection {
  isConnected?: ConnectionStates;
}

const connection: mongooseConnection = {};

export const connect = async () => {
  if (connection.isConnected) {
    console.log('Already Connected');
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('Use Previous Connection');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URI);
  db.set('strictQuery', false);
  console.log(process.env.MONGODB_URI);
  connection.isConnected = db.connections[0].readyState;
};

const disconnect = async () => {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = 0;
    } else {
      console.log('disconnected');
    }
  }
};

const db = { connect, disconnect };
export default db;
