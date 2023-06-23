const express = require('express')

//...................................................

const DB = "mongodb://127.0.0.1:27017/inotebook"

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(DB);
  console.log('mongodb connected')

}

//.................................................

const app = express()
const port = 5000 

app.use(express.json())
//avilable routes

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})