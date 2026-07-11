import modInverse from "./modInverse.js";
import modPow from "./modPow.js";

export interface RSAToyKeys {
  publicKey: {
    e: number;
    n: number;
  };
  privateKey: {
    d: number;
    n: number;
  };
}

export interface RSAToyResult {
  keys: RSAToyKeys;
  encrypt: (message: number) => number;
  decrypt: (cipher: number) => number;
}

/**
 * Creates a simple RSA implementation for educational purposes.
 *
 * ⚠️ This implementation is NOT cryptographically secure.
 * It is intended only for demonstrating how RSA works.
 *
 * @param p First prime number.
 * @param q Second prime number.
 * @param e Public exponent.
 * @returns RSA key pair and encrypt/decrypt functions.
 */
export default function rsaToy(
  p: number,
  q: number,
  e: number = 65537,
): RSAToyResult {
  if (!Number.isInteger(p) || !Number.isInteger(q) || !Number.isInteger(e)) {
    throw new TypeError("Arguments must be integers.");
  }

  if (p <= 1 || q <= 1) {
    throw new RangeError("p and q must be greater than 1.");
  }

  const n = p * q;
  const phi = (p - 1) * (q - 1);

  const d = modInverse(e, phi);

  return {
    keys: {
      publicKey: {
        e,
        n,
      },
      privateKey: {
        d,
        n,
      },
    },

    encrypt(message: number): number {
      if (!Number.isInteger(message)) {
        throw new TypeError("Message must be an integer.");
      }

      if (message < 0 || message >= n) {
        throw new RangeError(`Message must be between 0 and ${n - 1}.`);
      }

      return modPow(message, e, n);
    },

    decrypt(cipher: number): number {
      if (!Number.isInteger(cipher)) {
        throw new TypeError("Cipher must be an integer.");
      }

      if (cipher < 0 || cipher >= n) {
        throw new RangeError(`Cipher must be between 0 and ${n - 1}.`);
      }

      return modPow(cipher, d, n);
    },
  };
}
