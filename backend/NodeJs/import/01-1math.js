export const sum = (a, b) => a + b;
export const mul = (a, b) => a * b;
export const PI = 3.14;
export const g = 9.8;

export function generateOtp() {
  let length = 6;
  let otp = ""; // ✅ Remove the space
  for (let i = 0; i < length; i++) {
    // ✅ Loop should start from 0
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}
