# randomdatatools

Tools for generating random data of various types. These tools were taken from
various fuzzer projects of mine, and consoldiated here for ease of use.

## Install

```bash
npm install @opsimathically/randomdatatools
```

## Building from source

This package is intended to be run via npm, but if you'd like to build from source,
clone this repo, enter directory, and run `npm install` for dev dependencies, then run
`npm run build`.

## Usage

[See API Reference for documentation](https://github.com/opsimathically/randomdatatools/blob/main/docs/)

[See unit tests for usage examples](https://github.com/opsimathically/randomdatatools/blob/main/test/randomdatatools.test.ts)

### APIs

- randomIntegerBetween
- randomNegativeIntegerBetween
- randomBinaryBufferBetween
- randomBinaryBuffer
- randomTimeBetween
- randomString
- randomStringStringBetweenLength
- randomHexString
- randomAlphabetString
- randomArrayOfAlphaStrings
- randomAlphabetStringBetweenLength
- randomAlphanumericString
- randomAlphanumericStringBetweenLength
- randomIPV4Address
- randomArrayOfIPV4Addresses
- randomizeValuesOfSummableArray
- randomGuid
- randomDoubleLengthGuid
