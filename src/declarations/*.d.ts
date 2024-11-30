/** 
 * TypeScript Declaration File
 * 
 * This file contains type declarations for non-code assets used in this project: 
 * 
 * Declares: 
 * - SVG files as string modules.
 * 
 **/

declare module '*.svg' {
  const value: string;
  export default value;
}