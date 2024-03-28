import { describe, expect, it, mock } from "bun:test";
import { generateWord } from "./useTyping";

describe("generateWord", () => {
  it("should return correct values", () => {
    mock.module("random-words", () => ({ generate: () => "mocked" }));
    const word = generateWord(3, 5);

    expect(word).toMatchObject(["m", "o", "c", "k", "e", "d"]);
  });
});
