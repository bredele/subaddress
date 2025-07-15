# subaddress

Detect email subaddressing and return plain email address.

## Installation

```sh
npm install @bredele/subaddress
```

## Usage

```ts
import subaddress from '@bredele/subaddress';

subaddress('hello+super@example.com');
// => hello@example.com
```
