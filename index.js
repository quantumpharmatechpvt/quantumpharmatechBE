import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import dynamoose from "dynamoose";
import user from './routes.js'

dotenv.config()

const app = express()

app.use(bodyParser.json())


const ddb = new dynamoose.aws.ddb.DynamoDB({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: "eu-north-1",
});
dynamoose.aws.ddb.set(ddb);


app.get("/", (req, res)=>{
    res.json({"Hi":"Hello World"})
})

app.use('/api', user)


const PORT = 8000

app.listen(PORT, () => {
    console.log(`Port listening on ${PORT}`)
})
