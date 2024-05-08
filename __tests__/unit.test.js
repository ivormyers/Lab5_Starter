// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('test isPhoneNumber: 831-250-3633', () => {
  expect(isPhoneNumber("831-250-3633")).toBe(true);
});

test('test isPhoneNumber (831) 250-3633', () => {
  expect(isPhoneNumber("(831) 250-3633")).toBe(true);
});

test('test isPhoneNumber: 831-250-363', () => {
  expect(isPhoneNumber("831250-363")).toBe(false);
});

test('test isPhoneNumber (831250-3633', () => {
  expect(isPhoneNumber("8312503633")).toBe(false);
});

