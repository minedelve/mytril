import { capitalize } from '../src/utils/capitalize';

describe('capitalize', () => {
  test('should capitalize only the first letter of a single word, keeping the rest unchanged', () => {
    expect(capitalize('moRia')).toBe('MoRia');
    expect(capitalize('MORDOR')).toBe('MORDOR');
    expect(capitalize('rIVENDEL')).toBe('RIVENDEL');
  });

  test('should capitalize the first letter of the sentence', () => {
    expect(capitalize('gimli')).toBe('Gimli');
  });

  test('should capitalize the first letter after a period', () => {
    expect(capitalize("hello. i'm gimli.")).toBe("Hello. I'm gimli.");
  });

  test('should capitalize the first letter after an exclamation mark', () => {
    expect(capitalize('hi! how are you ?')).toBe('Hi! How are you ?');
  });

  test('should capitalize the first letter after a question mark', () => {
    expect(capitalize("who are you? i'm Legolas.")).toBe("Who are you? I'm Legolas.");
  });

  test('should capitalize the first letter after an ellipsis', () => {
    expect(capitalize("i don't know... we'll see.")).toBe("I don't know... We'll see.");
  });

  test('should handle multiple sentences correctly', () => {
    const input = "hello. i'm Gimli, who are you ? i'm Legolas.";
    const expected = "Hello. I'm Gimli, who are you ? I'm Legolas.";
    expect(capitalize(input)).toBe(expected);
  });

  test('should return an empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle already correctly formatted sentences', () => {
    const input = "Hello. I'm Gimli, who are you ? I'm Legolas.";
    expect(capitalize(input)).toBe(input);
  });
});
