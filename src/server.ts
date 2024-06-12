import colors from 'colors';
import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { ruruHTML } from 'ruru/server';

import { schema } from './graphql';

const app = express();

// api
app.all('/graphql', createHandler({ schema }));

// interface
app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});

app.listen(4000, '0.0.0.0', () => {
  console.log(colors.green('GraphQL server running 🚀'));
  console.log(colors.yellow(' - http://localhost:4000'));
  console.log(colors.yellow(' - http://localhost:4000/graphql'));
});
