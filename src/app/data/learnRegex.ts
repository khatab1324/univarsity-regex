export const learnReqex = [
  {
    title: "Ok",
    description: "lets first try regex \n print this word ",
    content: "OK",
    initialFlags: "g",
    flags: "g",
    regex: ["OK"],
    answer: ["OK"],
  },
  {
    title: "steps.whatIsRegex.title",
    description: "write the regex that will match document.pdf manual.pdf",
    originalTitle: "Regular Expressions",
    content: "readme.md\ndocument.pdf\nimage.png\nmusic.mp4\nmanual.pdf",
    initialFlags: "gm",
    flags: "gm",
    regex: ["^\\w+\\.pdf$"],
    initialValue: "^\\w+\\.pdf$",
    readOnly: true,
    answer: ["document.pdf", "manual.pdf"],
  },
  {
    title: "steps.basicMatchers.title",
    description: "steps.basicMatchers.description",
    originalTitle: "Basic Matchers",
    content:
      "“I have no special talents. I am only passionately curious.”\n\n― Albert Einstein",
    initialFlags: "gm",
    flags: "gm",
    regex: ["curious"],
    initialValue: "",
    answer: ["curious"],
  },
  {
    title: "steps.dotCharacter.title",
    description: "steps.dotCharacter.description",
    originalTitle: "The Full Stop",
    content: "abcABC123 .:!?",
    initialFlags: "g",
    flags: "g",
    regex: ["."],
    answer: "abcABC123 .:!?".split(""),
  },
  {
    title: "steps.characterSet.title",
    description: "steps.characterSet.description",
    originalTitle: "Character Sets",
    content: "bar ber bir bor bur",
    initialValue: "b[]r",
    initialFlags: "g",
    flags: "g",
    regex: ["b[aeiou]r"],
    // customValidate: (regex) => {
    //   const $regex = new RegExp(`^b\\[([aeiou]{5})\\]r$`);
    //   const result = regex.match($regex) || [];
    //   return xor(result?.[1]?.split(""), "aeiou".split("")).length === 0;
    // },
    cursorPosition: 2,
    answer: ["bar", "ber", "bir", "bor", "bur"],
  },
  {
    title: "steps.negatedCharacterSet.title",
    description: "steps.negatedCharacterSet.description",
    originalTitle: "Negated Character Sets",
    content: "bar ber bir bor bur",
    initialValue: "b[^]r",
    initialFlags: "g",
    flags: "g",
    regex: ["b[^eo]r", "b[^oe]r"],
    cursorPosition: 3,
    answer: ["bar", "bir", "bur"],
  },
  {
    title: "steps.range.title",
    originalTitle: "Character Sets: Alphanumeric Range",
    description: "steps.range.description",
    content: "abcdefghijklmnopqrstuvwxyz",
    initialValue: "[-]",
    initialFlags: "g",
    flags: "g",
    regex: ["[e-o]"],
    cursorPosition: 1,
    answer: ["e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"],
  },
];
