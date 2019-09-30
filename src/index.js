import './styles/main.css';

import { Log } from './modules/log';
import { Test } from './modules/test';

const tester = new Test('something');

export default {
  log: Log,
  test: tester
};
