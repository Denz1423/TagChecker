function TagChecker(sentence) {
  //Stack to store HTML tags in proper order
  let stack = [];

  //Iterate through the sentence
  for (let i = 0; i < sentence.length; i++) {
    //Check for an opening tag
    if (sentence[i] === "<") {
      if (
        i + 2 < sentence.length &&
        /[A-Z]/.test(sentence[i + 1]) && // Check if the character after an '<' is an uppercase letter
        sentence[i + 2] === ">" // Ensure it ends with '>' for a valid tag
      ) {
        stack.push(sentence[i + 1]);

        // Skip over the tag name and '>'
        i += 2;
        // Check if it is a closing tag, indicated by "</"
      } else if (
        i + 3 < sentence.length &&
        /\/[A-Z]/.test(sentence[i + 1] + sentence[i + 2]) && // Check for '/' followed by an uppercase letter
        sentence[i + 3] === ">"
      ) {
        //Extract the tag name from the closing tag
        let tag = sentence[i + 2];
        let top = stack.pop();

        // If the last opened tag does not match the closing tag, return an error message
        if (top !== tag) {
          return `Expected ${top ? `</${top}>` : "#"} found </${tag}>`;
        }
        // Skip the closing tag part
        i += 3;
      }
    }
  }

  //Check if the stack contains any remaining unclosed tags
  return stack.length === 0
    ? "Correctly tagged paragraph"
    : `Expected </${stack.pop()}> found #`;
}

module.exports = TagChecker;
