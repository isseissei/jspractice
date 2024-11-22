import path from 'path';

export default {
  entry: './ex05/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  mode: 'development',//ex06で追記
  devtool: 'source-map',
};
