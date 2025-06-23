import * as CryptoJS from "crypto-js";

export class jwt {
  private encryptedBase64: string;
  private static key = CryptoJS.enc.Utf8.parse("qwsmdyfhtjchflsy");

  constructor(encryptedBase64: string) {
    this.encryptedBase64 = encryptedBase64;
  }

  decrypt(): any {
    const raw = Buffer.from(this.encryptedBase64, "base64");

    const ivBytes = raw.slice(0, 16);
    const cipherBytes = raw.slice(16);

    const iv = CryptoJS.enc.Hex.parse(ivBytes.toString("hex"));
    const ciphertext = CryptoJS.enc.Hex.parse(cipherBytes.toString("hex"));

    const decrypted = CryptoJS.AES.decrypt(
      CryptoJS.lib.CipherParams.create({ ciphertext }),
      jwt.key,
      {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );

    const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
    if (!decryptedText) {
      throw new Error("Decryption failed: empty or bad result");
    }

    return JSON.parse(decryptedText);
  }

  validate(): boolean {
    try {
      const payload = this.decrypt();

      if (!payload.exp) return false;

      const expDate = new Date(payload.exp);
      const now = new Date();
      console.log("expDate: ", expDate, "now: ", now);
      return expDate > now;
    } catch (err) {
      console.error("Token validation error:", err);
      return false;
    }
  }
}

export default jwt;