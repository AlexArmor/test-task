function findFirstUniqueChar(text) {
  const cleanedText = text
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const words = cleanedText.split(/\s/);
  let str = "";

  function iterationAndCount(word) {
    const charCountObj = {};
    for (const char of word) {
      if (charCountObj[char]) {
        charCountObj[char] += 1;
      } else {
        charCountObj[char] = 1;
      }
    }
    return charCountObj;
  }

  for (const word of words) {
    const counter = iterationAndCount(word);
    for (const char of word) {
      if (counter[char] === 1) {
        str += char;
        break;
      }
    }
  }
  const counter = iterationAndCount(str);
  for (const char of str) {
    if (counter[char] === 1) {
      return char;
    }
  }
  return null;
}

const text = `The Tao gave birth to machine language.  Machine language gave birth
to the assembler.
The assembler gave birth to the compiler.  Now there are ten thousand
languages.
Each language has its purpose, however humble.  Each language
expresses the Yin and Yang of software.  Each language has its place within
the Tao.
But do not program in COBOL if you can avoid it.
        -- Geoffrey James, "The Tao of Programming"`;

const result = findFirstUniqueChar(text);

if (result === null) {
  console.log("Текст не має унікальних символів");
} else {
  console.log(`У тексті перший унікальний символ: ${result}`);
}
