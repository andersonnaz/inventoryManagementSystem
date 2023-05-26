import express from 'express';

const app = express();
app.use(express.json());


app.use('/', (request, response) => {
    response.status(200).json('olá mundo')!
})

app.listen(3000, () => {console.log('app running at port 3000!')});
