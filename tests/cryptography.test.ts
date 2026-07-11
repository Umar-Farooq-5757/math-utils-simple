import test from "node:test";
import assert from "node:assert/strict";

import {
  extendedGCD,
  modInverse,
  modPow,
  rsaToy,
  caesarCipher,
  vigenereCipher,
  xorCipher,
} from "../src/index.js";

test("extendedGCD", () => {
  const result = extendedGCD(30, 20);

  assert.equal(result.gcd, 10);
  assert.equal(30 * result.x + 20 * result.y, 10);
});

test("extendedGCD coprime numbers", () => {
  const result = extendedGCD(17, 31);

  assert.equal(result.gcd, 1);
  assert.equal(17 * result.x + 31 * result.y, 1);
});

test("modInverse", () => {
  assert.equal(modInverse(3, 11), 4);
});

test("modInverse another example", () => {
  assert.equal(modInverse(10, 17), 12);
});

test("modInverse does not exist", () => {
  assert.throws(() => modInverse(6, 12));
});

test("modInverse invalid modulus", () => {
  assert.throws(() => modInverse(3, 1));
});

test("modPow", () => {
  assert.equal(modPow(2, 10, 1000), 24);
});

test("modPow exponent zero", () => {
  assert.equal(modPow(5, 0, 7), 1);
});

test("modPow modulus one", () => {
  assert.equal(modPow(999, 999, 1), 0);
});

test("modPow negative exponent", () => {
  assert.throws(() => modPow(2, -1, 5));
});

test("rsaToy encrypt/decrypt", () => {
  const rsa = rsaToy(61, 53, 17);

  const encrypted = rsa.encrypt(65);
  const decrypted = rsa.decrypt(encrypted);

  assert.equal(decrypted, 65);
});

test("rsaToy keys", () => {
  const rsa = rsaToy(61, 53, 17);

  assert.equal(rsa.keys.publicKey.e, 17);
  assert.equal(rsa.keys.publicKey.n, 3233);
  assert.equal(rsa.keys.privateKey.n, 3233);
});

test("rsaToy invalid message", () => {
  const rsa = rsaToy(61, 53, 17);

  assert.throws(() => rsa.encrypt(5000));
});

test("caesarCipher encrypt", () => {
  assert.equal(caesarCipher("Hello World", 3), "Khoor Zruog");
});

test("caesarCipher decrypt", () => {
  assert.equal(caesarCipher("Khoor Zruog", -3), "Hello World");
});

test("caesarCipher preserves punctuation", () => {
  assert.equal(caesarCipher("Hello, World!", 5), "Mjqqt, Btwqi!");
});

test("caesarCipher wrap around", () => {
  assert.equal(caesarCipher("XYZ", 3), "ABC");
});

test("vigenereCipher encrypt", () => {
  assert.equal(vigenereCipher("ATTACKATDAWN", "LEMON"), "LXFOPVEFRNHR");
});

test("vigenereCipher decrypt", () => {
  const encrypted = vigenereCipher("ATTACKATDAWN", "LEMON");

  assert.equal(vigenereCipher(encrypted, "LEMON", true), "ATTACKATDAWN");
});

test("vigenereCipher preserves spaces", () => {
  const encrypted = vigenereCipher("HELLO WORLD", "KEY");

  const decrypted = vigenereCipher(encrypted, "KEY", true);

  assert.equal(decrypted, "HELLO WORLD");
});

test("vigenereCipher invalid key", () => {
  assert.throws(() => vigenereCipher("Hello", "123"));
});

test("xorCipher encrypt/decrypt", () => {
  const encrypted = xorCipher("Hello World", "secret");

  const decrypted = xorCipher(encrypted, "secret");

  assert.equal(decrypted, "Hello World");
});

test("xorCipher empty string", () => {
  assert.equal(xorCipher("", "abc"), "");
});

test("xorCipher empty key", () => {
  assert.throws(() => xorCipher("Hello", ""));
});
