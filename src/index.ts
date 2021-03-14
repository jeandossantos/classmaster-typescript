import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.get('/', (req, resp) => {
    resp.send('Hello World 2!');
});

app.listen(3000, () => console.log('executando backend na porta 3000'));