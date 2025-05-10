// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('(863) 123-4567 is a phone number', () => {
  expect(isPhoneNumber('(863) 123-4567')).toBe(true);
});
test('063-456-0987 is a phone number', () => {
  expect(isPhoneNumber('063-456-0987')).toBe(true);
});
test('abcdefg is not a phone number', () => {
  expect(isPhoneNumber('abcdefg')).toBe(false);
});
test('555 678 0925 is not a phone number', () => {
  expect(isPhoneNumber('555 678 0925')).toBe(false);
});
