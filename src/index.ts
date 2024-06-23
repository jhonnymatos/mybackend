import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes/routes';
import { AppDataSource } from './data-source';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

AppDataSource.initialize().then(async () => {
    console.log('Database OK');
    app.listen(3333, () => {
        console.log('Server started on port 3333');
    })
})