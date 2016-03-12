declare module "js-sha3" {
  export function sha3_512(message: string): string;
  export function sha3_384(message: string): string;
  export function sha3_256(message: string): string;
  export function sha3_224(message: string): string;
  export function keccak_512(message: string): string;
  export function keccak_384(message: string): string;
  export function keccak_256(message: string): string;
  export function keccak_224(message: string): string;
  export function shake_128(message: string, outputBits: number): string;
  export function shake_256(message: string, outputBits: number): string;
}