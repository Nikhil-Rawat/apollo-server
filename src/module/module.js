/* eslint-disable import/extensions */
import pkg from 'merge-graphql-schemas';
import path from 'path';
import resolvers from './index.js';

const { fileLoader, mergeTypes } = pkg;

const __dirname = path.resolve();
const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));

const typeDefs = mergeTypes(typesArray, { all: true });

export {
  resolvers,
  typeDefs,
};

