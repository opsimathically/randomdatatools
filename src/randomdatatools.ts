/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-control-regex */

import assert from 'node:assert';
import { randomBytes } from 'node:crypto';

import {
  chars_a_to_z_small,
  chars_a_to_z_caps,
  chars_zero_to_nine,
  chars_special,
  chars_all_hex_00_to_ff,
  chars_all_hex_01_to_ff,
  chars_all_hex_7f_to_ff
} from '@src/datasets';

// Generate a random integer between two numbers.
const randomIntegerBetween = function (
  min: number,
  max: number
): number | null {
  if (min > max) return null;
  if (min === max) return min;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Generate a random negative integer between two negative numbers.
const randomNegativeIntegerBetween = function (
  min: number,
  max: number
): number | null {
  if (min > 0 || max > 0) return null;
  if (max < min) return null;
  min = Math.ceil(min);
  max = Math.floor(max);
  let random_int = Math.floor(Math.random() * (max - min + 1)) + min;
  random_int = Math.abs(random_int) * -1;
  return random_int;
};

// Function to generate random binary buffer between two sizes.
const randomBinaryBufferBetween = function (
  min_len: number,
  max_len: number
): Buffer {
  if (min_len < 0 || max_len < 0) {
    assert.fail(
      'randomBinaryBuffer(): min_len and max_len must be non-negative'
    );
  }

  if (min_len > max_len) {
    assert.fail(
      'randomBinaryBuffer(): min_len must be less than or equal to max_len'
    );
  }

  const length = min_len + Math.floor(Math.random() * (max_len - min_len + 1));
  return randomBytes(length);
};

// Generate a random buffer of specific length.
const randomBinaryBuffer = function (len: number): Buffer {
  assert(len >= 0, 'randomBinaryBuffer(): len must be non-negative');
  return randomBytes(len);
};

// generate a random time between two times
const randomTimeBetween = function (start: Date, end: Date) {
  const diff = end.getTime() - start.getTime();
  const new_diff = diff * Math.random();
  const date = new Date(start.getTime() + new_diff);
  return date;
};

// Generate a random string using a provided character set.  Will only select
// characters from the provided character set.
const randomString = function (length: number, chars: string[]) {
  assert(length >= 0, 'randomString(): length must be non-negative');
  assert(
    chars.length > 0,
    'randomString(): chars must have at least one character'
  );
  let result = '';
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

// generate a random string between length
const randomStringStringBetweenLength = function (
  min_length: number,
  max_length: number,
  chars: string[]
) {
  const length = randomIntegerBetween(min_length, max_length);
  assert(length !== null, 'randomStringBetweenLength(): length is null');
  assert(
    length >= 0,
    'randomStringBetweenLength(): length must be non-negative'
  );

  // return the random alphanumeric string
  return randomString(length, chars);
};

// generate a random hexidecimal string
const randomHexString = function (length: number) {
  let result = '';
  const chars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
  ];
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

// generate a random alphabet string
const randomAlphabetString = function (length: number) {
  let chars: string[] = [];
  chars = chars.concat(chars_a_to_z_small, chars_a_to_z_caps);
  let result = '';
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];

  // return result
  return result;
};

// this just generates a random array of strings, useful for generating random
// ids for various components.
const randomArrayOfAlphaStrings = function (count: number, str_len: number) {
  // define string array
  const str_array: string[] = [];

  // create char set
  let chars: string[] = [];
  chars = chars.concat(chars_a_to_z_caps, chars_a_to_z_small);

  // generate strings
  for (let idx = 0; idx < count; idx++)
    str_array.push(randomString(str_len, chars));

  // return the string array
  return str_array;
};

// generate a random string between a minimum and maximum
const randomAlphabetStringBetweenLength = function (
  min_length: number,
  max_length: number
) {
  // create a length
  const length = randomIntegerBetween(min_length, max_length);
  assert(
    length !== null,
    'randomAlphabetStringBetweenLength(): length is null'
  );
  assert(
    length >= 0,
    'randomAlphabetStringBetweenLength(): length must be non-negative'
  );

  // return the random alphanumeric string
  return randomAlphabetString(length);
};

// generate a random string
const randomAlphanumericString = function (length: number) {
  // set characters to use
  let chars: string[] = [];
  chars = chars.concat(
    chars_a_to_z_small,
    chars_a_to_z_caps,
    chars_zero_to_nine
  );

  // create random string
  let result = '';
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];

  // return result
  return result;
};

const randomAlphanumericStringBetweenLength = function (
  min_length: number,
  max_length: number
) {
  // create a length
  const length = randomIntegerBetween(min_length, max_length);
  assert(
    length !== null,
    'randomAlphanumericStringBetweenLength(): length is null'
  );
  assert(
    length >= 0,
    'randomAlphanumericStringBetweenLength(): length must be non-negative'
  );

  // return the random alphanumeric string
  return randomAlphanumericString(length);
};

// just generates a random IPv4 address
const randomIPV4Address = function (params?: {
  first_octet?: number;
  second_octet?: number;
  third_octet?: number;
  fourth_octet?: number;
}) {
  // generate octets
  let first_octet = randomIntegerBetween(0, 255);
  let second_octet = randomIntegerBetween(0, 255);
  let third_octet = randomIntegerBetween(0, 255);
  let fourth_octet = randomIntegerBetween(0, 255);

  assert(first_octet !== null, 'randomIPV4Address(): first_octet is null');
  assert(second_octet !== null, 'randomIPV4Address(): second_octet is null');
  assert(third_octet !== null, 'randomIPV4Address(): third_octet is null');
  assert(fourth_octet !== null, 'randomIPV4Address(): fourth_octet is null');

  // apply overrides
  if (params?.first_octet)
    if (Number.isInteger(params?.first_octet) === true)
      first_octet = params?.first_octet;
  if (params?.second_octet)
    if (Number.isInteger(params?.second_octet) === true)
      second_octet = params?.second_octet;
  if (params?.third_octet)
    if (Number.isInteger(params?.third_octet) === true)
      third_octet = params?.third_octet;
  if (params?.fourth_octet)
    if (Number.isInteger(params?.fourth_octet) === true)
      fourth_octet = params?.fourth_octet;

  // create ip address and return as string
  return `${first_octet}.${second_octet}.${third_octet}.${fourth_octet}`;
};

// generates an array of random IPv4 addresses
const randomArrayOfIPV4Addresses = function (
  count: number,
  octet_overrides?: {
    first_octet?: number;
    second_octet?: number;
    third_octet?: number;
    fourth_octet?: number;
  }
) {
  assert(
    count > 0,
    'randomArrayOfIPV4Addresses(): count must be greater than 0'
  );
  // this will hold the ips which were generated
  const generated_ips: string[] = [];

  // run generator
  for (let i = 0; i < count; i++) {
    generated_ips.push(randomIPV4Address(octet_overrides));
  }

  // return null if there's nothing to return
  if (generated_ips.length <= 0) return null;

  // return generated ips
  return generated_ips;
};

/*
This function is used to take an array of summable values:
eg: [10,10,10,10] = 40

and randomzie the elements so they contain different values 
that add up to the same sum.
aka: [3,20,10,7] = 40

This function takes care to make sure no generated numbers are too
far apart or disperate. It won't generate 3 zeros, and one 40 for example.

This is useful for various things, such as determining the spacing
of events to mock tests, or a other similar use cases.

This function will often produce elements with decimal places,
so utilize rounding up or down to produce results without
any decimals.

*/

const randomizeValuesOfSummableArray = function (params: {
  input_array: number[];
  rounding?: 'up' | 'down';
}) {
  const input_array = params.input_array;
  const rounding = params.rounding;

  // Calculate the sum of the input array
  const sum = input_array.reduce((acc, curr) => acc + curr, 0);
  const length = input_array.length;

  // Calculate the equal part
  const equalPart = sum / length;

  // Generate random numbers
  let randomArray = [];
  let remainingSum = sum;

  // Generate random numbers for each element except the last one
  for (let i = 0; i < length - 1; i++) {
    // Generate a random number between -equalPart/2 and equalPart/2
    const randomNumber = Math.random() * equalPart - equalPart / 2;
    let newValue = input_array[i] + randomNumber;

    // Ensure the new value is non-negative and not too large or too small
    newValue = Math.max(1, newValue); // Ensure it's at least 1
    newValue = Math.min(newValue, input_array[i] * 1.5); // Adjust this factor as needed

    // only add the new value if it's greater than 0, this is because
    // we can sometimes generate negative numbers.  This loop will
    // automatically determine the remaining amounts to add so skipping
    // the negative entries won't affect the array length.
    if (newValue >= 0) {
      // perform rounding if specified
      if (rounding === 'up') newValue = Math.ceil(newValue);
      else if (rounding === 'down') newValue = Math.floor(newValue);

      // add the value
      randomArray.push(newValue);
    }

    // calculate the remaining sum
    remainingSum -= randomArray[i];
  }

  // The last element of the random array is the remaining sum
  randomArray.push(remainingSum);

  // Shuffle the array randomly
  randomArray = randomArray.sort(() => Math.random() - 0.5);

  // return the array
  return randomArray;
};

const randomGuid = function () {
  const characters = 'abcdef0123456789';
  let uuid = '';
  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid += '-';
    } else {
      uuid += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }

  return uuid;
};

const randomDoubleLengthGuid = function () {
  return randomGuid() + randomGuid();
};

export {
  randomIntegerBetween,
  randomNegativeIntegerBetween,
  randomBinaryBufferBetween,
  randomBinaryBuffer,
  randomTimeBetween,
  randomString,
  randomStringStringBetweenLength,
  randomHexString,
  randomAlphabetString,
  randomArrayOfAlphaStrings,
  randomAlphabetStringBetweenLength,
  randomAlphanumericString,
  randomAlphanumericStringBetweenLength,
  randomIPV4Address,
  randomArrayOfIPV4Addresses,
  randomizeValuesOfSummableArray,
  randomGuid,
  randomDoubleLengthGuid
};
