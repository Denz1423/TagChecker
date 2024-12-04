const TagChecker = require("./TagChecker");

const sampleInputs = [
  "The following text<C><B>is centred and in boldface</B></C>",
  "<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence",
  "<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>",
  "<B>This should be in boldface, but there is an extra closingtag</B></C>",
  "<B><C>This should be centred and in boldface, but there is a missing closing tag</C>",
  "<B><C<>This should not be centred and should ignore invalid tags</b></B>",
];

//Test sample inputs
for (let input of sampleInputs) {
  console.log(TagChecker(input));
}
