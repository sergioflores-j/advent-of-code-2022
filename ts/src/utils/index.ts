import fs from 'fs';

export const getInput = ({ path = './', filename = 'input.txt' } = {}) =>
  fs.readFileSync(`${path}${filename}`, 'utf8').split('\n');

export const getMockInput = (path = './') =>
  getInput({ path, filename: 'mock.txt' });
