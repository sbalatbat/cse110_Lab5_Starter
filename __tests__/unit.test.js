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
test('merp@ucsd.edu is a valid email', () => {
  expect(isEmail('merp@ucsd.edu')).toBe(true);
});
test('john_Clock@zeroMaidens.co is a valid email', () => {
  expect(isEmail('john_Clock@zeroMaidens.co')).toBe(true);
});
test('+werklyhordin@gmail.com is not a valid email', () => {
  expect(isEmail('+werklyhordin@gmail.com')).toBe(false);
});
test('glOrp@ucsd is not a valid email', () => {
  expect(isEmail('glOrp@ucsd')).toBe(false);
});

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
test('5/10/2025 is a valid date', () => {
  expect(isDate('5/10/2025')).toBe(true);
});
test('93/1/2077 is a valid date', () => {
  expect(isDate('93/1/2077')).toBe(true);
});
test('5/10/25 is not a valid date', () => {
  expect(isDate('5/10/25')).toBe(false);
});
test('January 5, 2016 is not a valid date', () => {
  expect(isDate('January 5, 2016')).toBe(false);
});

/* isHexColor tests */