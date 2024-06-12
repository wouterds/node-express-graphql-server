import colors from 'colors';
import express from 'express';
import { buildSchema } from 'graphql';
import { createHandler } from 'graphql-http';
import { ruruHTML } from 'ruru/server';

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const app = express();

// interface
app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});

// api
app.all('/graphql', createHandler({ schema }));

app.listen(4000, () => {
  console.log(colors.green('GraphQL server running 🚀'));
  console.log(colors.yellow(' - http://localhost:4000'));
  console.log(colors.yellow(' - http://localhost:4000/graphql'));
});
