import express from 'express';
import { createCourse } from './routes';

const app = express();

// app.get('/', (request, response) => {
//     return response.json({ message: "TypeScript"});
// })

app.get('/', createCourse);

app.listen(3333);