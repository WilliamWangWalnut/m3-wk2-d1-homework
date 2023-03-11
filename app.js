// Create a database
const {Mongoclient, MongoClient} = require('mongodb')

// Create instance of MongoClient for mongodb
// Database name: statsdb
const client = new MongoClient('mongodb://127.0.0.1:27017/statsdb')

// Connect to database
client.connect ()
    .then(() => {
        /*console.log('Connected Successfully & Database Created!')
        Close the database connnection
        client.close();*/

        // 1.Create a database called 'statsdb'
        // 2.a collection called uscensus
        var dbo = client.db('statsdb');
        /*dbo.createCollection('uscensus').then(function() {
            console.log("Collection created");
            //Close the database connection
            client.close();
        })*/

        // 3.Insert batch data to the collection
        /*var data = [
            {city: 'San Juan', zip: '00926', state: 'PR', income: '34781',age: '44'},
            {city: 'Corona', zip: '11368', state: 'NY', income: '50797',age: '32'},
            {city: 'Chicago', zip: '60629', state: 'IL', income: '42019',age: '31'},
            {city: 'El Paso', zip: '79936', state: 'TX', income: '54692',age: '31'},
            {city: 'Los Angeles', zip: '90011', state: 'CA', income: '36954',age: '28'},
            {city: 'Norwalk', zip: '90650', state: 'CA', income: '66453',age: '35'}
        ];
        dbo.collection('uscensus').insertMany(data).then(function(res){
            console.log("Number of documents inserted:" + res.insertedCount);
            client.close();
        });*/

        // 4.Insert two records to the collection
        /*var data = [
            {city: 'Pacoima', zip: '91331', state: 'CA', income: '60360',age: '33'},
            {city: 'Ketchikan', zip: '99950', state: 'AK', income: '00000',age: '00'},
        ];
        dbo.collection('uscensus').insertMany(data).then(function(res){
            console.log("Number of documents inserted:" + res.insertedCount);
            client.close();
        });*/

        // 5.Find zip code for Corona, NY
        /*var query = {city: 'Corona', state: 'NY'}
        dbo.collection('uscensus').find(query)
            .toArray()
            .then(items => {
                console.log(`Successfully found ${items.length} documents.`)
                console.log(items);
                client.close();
            })*/

        // 6.Find income for all cities in California
        /*var query = {state: 'CA'}
        dbo.collection('uscensus').find(query)
            .toArray()
            .then(items => {
                console.log(`Successfully found ${items.length} documents.`)
                console.log(items);
                client.close();
            })*/

        // 7.Update income & age for Alaska
        /*var myquery = {state: 'AK'};
        var newvalues = {$set: {income: '38910', age:'46'}};
        dbo.collection('uscensus').updateOne(myquery, newvalues).then(function(){
            console.log("1 document updated");
            client.close();
        })*/

        // 8.Sort by state in ascending order
        var mysort = {state: 1}
        dbo.collection('uscensus').find()
        .sort(mysort)
        .toArray()
        .then(items => {
            console.log(`Successfully sorted ${items.length} documents.`)
            console.log(items);
            client.close();
        })
    })
    .catch(error => console.log('Failed to connect', error))
