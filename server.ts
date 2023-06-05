import express from 'express';
import routes from './src/shared/http/routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {console.log('app running at port 3000!')});
