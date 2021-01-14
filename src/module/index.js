import pkg from 'merge-graphql-schemas';
import path from 'path';
import { query } from './user';

const { fileLoader, mergeTypes } = pkg;
const dirname = path.resolve();

const typesArray = fileLoader(path.join(dirname, './**/*.graphql'));
const typesDefs = mergeTypes(typesArray, { all: true });

export default {
  resolvers: {
    Query: () => query,
  },
  typesDefs,
};
