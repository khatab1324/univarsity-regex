// export function isTrueRegex(
//   pattern1: string,
//   pattern2: string,
//   testArray: string[]
// ) {
//   //   const regex1 = new RegExp(`^${pattern1}$`);
//   //   const regex2 = new RegExp(`^${pattern2}$`);
//   const escapeRegex = (pattern: string) =>
//     pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

//   let regex1, regex2;

//   try {
//     regex1 = new RegExp(`^${pattern1}$`);
//     regex2 = new RegExp(`^${pattern2}$`);
//     console.log("====================================");
//     console.log(regex2);
//     console.log("====================================");
//   } catch (e) {
//     console.error("Invalid regex pattern:", e);
//     return false;
//   }
//   for (let i = 0; i < testArray.length; i++) {
//     const testString = testArray[i];
//     const result1 = regex1.test(testString);
//     const result2 = regex2.test(testString);

//     console.log("====================================");
//     console.log(testString, {
//       result1,
//       result2,
//       allMatch: result1 && result2,
//       someMatch: result1 || result2,
//     });
//     console.log("====================================");

//     if (result1 !== result2 || result1 === false) {
//       return false;
//     }
//   }
//   return true;
// }

export function isTrueRegex(
  pattern1: string,
  pattern2: string,
  testArray: string[]
) {
  let regex1, regex2;

  try {
    regex1 = new RegExp(`^${pattern1}$`);
    regex2 = new RegExp(`^${pattern2}$`);
  } catch (e) {
    console.error("Invalid regex pattern:", e);
    return false;
  }

  for (let i = 0; i < testArray.length; i++) {
    const testString = testArray[i];
    const result1 = regex1.test(testString);
    const result2 = regex2.test(testString);

    let matchedSubstrings = "";

    if (
      pattern1[pattern1.length - 1] !== "\\" &&
      pattern1[pattern1.length - 1] !== "["
    ) {
      const matchedSubstrings1 =
        testString.match(new RegExp(pattern1, "g")) || [];
      const matchedSubstrings2 =
        testString.match(new RegExp(pattern2, "g")) || [];
      matchedSubstrings = [
        new Set([...matchedSubstrings1, ...matchedSubstrings2]),
      ].join("");
    }
    console.log("====================================");
    console.log(testString, matchedSubstrings, {
      result1,
      result2,
      allMatch: result1 && result2,
      someMatch: result1 || result2,
    });
    console.log("====================================");

    if (result1 !== result2) {
      return false;
    }
  }
  return true;
}
