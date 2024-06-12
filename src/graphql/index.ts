import { mergeSchemas } from '@graphql-tools/schema';

import Runs from './runs';

export const schema = mergeSchemas({
  schemas: [Runs],
});
