const mongoose = require('mongoose')

const connectMongoDB = async (app,port,url)=> {
    mongoose.set("strictQuery", false);
    mongoose.
        connect(url)
        .then(() => {
            console.log('connected to MongoDB')
            app.listen(port, ()=> {
                console.log(`CRUD API app is running on port ${port}`)
            });
        }).catch((error) => {
            console.log(error)
        })
}

module.exports = connectMongoDB