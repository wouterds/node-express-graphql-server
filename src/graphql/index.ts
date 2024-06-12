import { mergeSchemas } from '@graphql-tools/schema';

import HelloWorld from './hello-world';

export const schema = mergeSchemas({ schemas: [HelloWorld] });
