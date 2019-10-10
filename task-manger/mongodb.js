
const mongodb = require('mongodb')
const MongoClinet = mongodb.MongoClient

const connectionurl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClinet.connect(connectionurl, { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('canot connect to database');
    }
    
    console.log("CONNECTED TO MONGODB");
    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name: 'ahmed',
        age: 23
    }, (err, result) => {
        if(err) {
            return console.log('Error')
        }
        console.log(result.ops)
    })
})