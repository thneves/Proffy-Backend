import express from 'express';
import routes from './routes'
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);











// https://localhost:3333
// https://localhost:3333/contacts  --> resources are the names after the main localhost like /users or /contacts
// -- procura pela porta 3333, porta default dos navegadores = 80; todos tem.


/* 
    some HTTPS methods,
    
    GET:  search or list some information
    POST: create some new information
    PUT: update an existing information
    DELETE: delete information lol
*/

// REQUEST BODY -> data to create or update an register
// Router params -> Identify which resource I want update or delete
// Query param -> Pagination, filtering, orderning...