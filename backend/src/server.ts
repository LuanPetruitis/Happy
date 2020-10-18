import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection.ts';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

// Rota = conjunto
// Recurso = usuário
// Método HTTP = GET, POST, PUT, DELETE

// ---- GET = Buscar uma informação (Lista, item)
// ---- Post = Criando Uma informação
// ---- PUT = Editando uma informação
// ---- DELETE = Deletando uma informação

// Parâmetros 
// Query Params: http://localhost:3333/users?search=luan
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users(identificar um recurso)

app.listen(3006);


// Driver nativo, Query builder, ORM