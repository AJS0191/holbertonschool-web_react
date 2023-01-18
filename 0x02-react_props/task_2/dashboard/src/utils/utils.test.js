import utils from "./utils";
import {getFullYear} from utils;
import {getFooterCopy} from utils;
import {getLatestNotifcation} from './Notifications'
import 'jest'

const sum = require('./sum');

test('Do we get the correct year?', () => {
  expect(sum(0, getFullYear())).toBe(2023);
});

test('Do we get the correct string from footerC?', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('Do we get the correct string from getLatest?', () => {
  expect(getLatestNotifcation()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
