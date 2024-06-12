import { join } from 'node:path';

import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';

import { Query } from './resolvers';

export default addResolversToSchema({
  schema: loadSchemaSync(join(__dirname, './type-defs/**.graphql'), {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers: {
    Query,
  },
});
