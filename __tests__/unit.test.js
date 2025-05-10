// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

/* isPhoneNumber tests */
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

/* isEmail tests */

/* isStrongPassword tests */
test('wzOS_4FYsg is a strong password', () => {
  expect(isStrongPassword('wzOS_4FYsg')).toBe(true);
});
test('Iyhskp83SveC1c is a strong password', () => {
  expect(isStrongPassword('Iyhskp83SveC1c')).toBe(true);
});
test('0x1d_boomPOW is not a strong password', () => {
  expect(isStrongPassword('0x1d_boomPOW')).toBe(false);
});
test('Jx7cn9EEoZJn_OB3X68Y is not a strong password', () => {
  expect(isStrongPassword('Jx7cn9EEoZJn_OB3X68Y')).toBe(false);
});

/* isDate tests */

/* isHexColor tests */