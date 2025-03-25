/* eslint-disable @typescript-eslint/no-explicit-any */
import test from 'node:test';
import assert from 'node:assert';

import {
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
} from '@src/randomdatatools';

(async function () {
  test('randomIntegerBetween tests.', async function () {
    const min = 1;
    const max = 10;
    const result = randomIntegerBetween(min, max);
    assert(result !== null);
    assert(result >= min && result <= max);
  });

  test('randomNegativeIntegerBetween tests.', async function () {
    const min = -10;
    const max = -1;
    const result = randomNegativeIntegerBetween(min, max);
    assert(result !== null);
    assert(result >= min && result <= max);
  });

  test('randomBinaryBufferBetween tests.', async function () {
    const min = 1;
    const max = 10;
    const result = randomBinaryBufferBetween(min, max);
    assert(result !== null);
    assert(result.length >= min && result.length <= max);
  });

  test('randomBinaryBuffer tests.', async function () {
    const result = randomBinaryBuffer(10);
    assert(result !== null);
    assert(result.length > 0);
    assert(result.length === 10);
  });

  test('randomTimeBetween tests.', async function () {
    const min = new Date('2021-01-01');
    const max = new Date('2021-12-31');
    const result = randomTimeBetween(min, max);
    assert(result !== null);
    assert(result >= min && result <= max);
  });

  test('randomString tests.', async function () {
    const result = randomString(10, ['a']);
    assert(result !== null);
    assert(result.length > 0);
    assert(result === 'aaaaaaaaaa');
  });

  test('randomStringStringBetweenLength tests.', async function () {
    const min = 10;
    const max = 10;
    const result = randomStringStringBetweenLength(min, max, ['a']);
    assert(result !== null);
    assert(result.length >= min && result.length <= max);
    assert(result === 'aaaaaaaaaa');
  });

  test('randomHexString tests.', async function () {
    const result = randomHexString(10);
    assert(result !== null);
    assert(result.length === 10);
  });

  test('randomAlphabetString tests.', async function () {
    const result = randomAlphabetString(10);
    assert(result !== null);
    assert(result.length === 10);
  });

  test('randomArrayOfAlphaStrings tests.', async function () {
    const random_alphastrs = randomArrayOfAlphaStrings(10, 10);
    assert(random_alphastrs.length === 10);
    assert(random_alphastrs[0].length === 10);
  });

  test('randomAlphabetStringBetweenLength tests.', async function () {
    const random_alpha = randomAlphabetStringBetweenLength(1, 10);
    assert(random_alpha.length >= 1);
    assert(random_alpha.length <= 10);
  });

  test('randomAlphanumericString tests.', async function () {
    const random_alphanum = randomAlphanumericString(10);
    assert(random_alphanum.length === 10);
  });

  test('randomAlphanumericStringBetweenLength tests.', async function () {
    const random_alphanum = randomAlphanumericStringBetweenLength(10, 15);
    assert(random_alphanum.length >= 10);
    assert(random_alphanum.length <= 15);
  });

  test('randomIPV4Address tests.', async function () {
    const random_ipv4 = randomIPV4Address();
    assert(random_ipv4.length >= 7);
    assert(random_ipv4.length <= 15);
  });

  test('randomArrayOfIPV4Addresses tests.', async function () {
    const array_of_random_ipv4 = randomArrayOfIPV4Addresses(10);
    assert(array_of_random_ipv4 !== null);
    assert(array_of_random_ipv4.length === 10);
    assert(array_of_random_ipv4[9].length >= 7);
    assert(array_of_random_ipv4[9].length <= 15);
  });

  test('randomizeValuesOfSummableArray tests.', async function () {
    const array_of_random_ipv4 = randomizeValuesOfSummableArray({
      input_array: [10, 10, 10]
    });
    assert(array_of_random_ipv4.length === 3);
  });

  test('randomGuid tests.', async function () {
    const guid = randomGuid();
    assert(guid.length === 36);
  });

  test('randomDoubleLengthGuid tests.', async function () {
    const guid = randomDoubleLengthGuid();
    assert(guid.length === 36 * 2);
  });
})();
