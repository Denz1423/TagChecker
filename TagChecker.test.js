const TagChecker = require("./TagChecker"); 

describe("TagChecker", () => {
  test('should return "Correctly tagged paragraph" for correctly nested tags', () => {
    const result = TagChecker(
      "The following text<C><B>is centred and in boldface</B></C>"
    );
    expect(result).toBe("Correctly tagged paragraph");
  });

  test('it should return "Correctly tagged paragraph" for correctly nested tags with false tags present', () => {
    const result = TagChecker(
      "<B>This <g>is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence"
    );
    expect(result).toBe("Correctly tagged paragraph");
  });

  test("should return an error for wrongly nested tags", () => {
    const result = TagChecker(
      "<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>"
    );
    expect(result).toBe("Expected </C> found </B>");
  });

  test("should return an error for extra closing tag", () => {
    const result = TagChecker(
      "<B>This should be in boldface, but there is an extra closing tag</B></C>"
    );
    expect(result).toBe("Expected # found </C>");
  });

  test("should return an error for missing closing tag", () => {
    const result = TagChecker(
      "<B><C>This should be centred and in boldface, but there is a missing closing tag</C>"
    );
    expect(result).toBe("Expected </B> found #");
  });

  test("should return an error for incorrect element", () => {
    const result = TagChecker("<A><<qC>");
    expect(result).toBe("Expected </A> found #");
  });

  //Empty string
  test('should return "Correctly tagged paragraph" for empty string', () => {
    const result = TagChecker("");
    expect(result).toBe("Correctly tagged paragraph");
  });

  test("should ignore invalid elements (double slashes)", () => {
    const result = TagChecker("<A><//B>Hello</A>");
    expect(result).toBe("Correctly tagged paragraph");
  });
});
