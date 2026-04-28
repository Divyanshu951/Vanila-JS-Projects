function generateTypingDrill(chars, percentages, totalLength = 100) {
  if (!Array.isArray(chars) || !Array.isArray(percentages)) {
    throw new Error("Both inputs must be arrays.");
  }

  if (chars.length !== percentages.length) {
    throw new Error("chars and percentages length must match.");
  }

  const totalPercentage = percentages.reduce((sum, val) => sum + val, 0);

  if (totalPercentage !== 100) {
    throw new Error("Percentages must equal exactly 100.");
  }

  const pool = [];

  // build weighted pool
  percentages.forEach((percent, index) => {
    const count = Math.floor((percent / 100) * totalLength);

    for (let i = 0; i < count; i++) {
      pool.push(chars[index]);
    }
  });

  // fill leftovers from rounding
  while (pool.length < totalLength) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    pool.push(chars[randomIndex]);
  }

  // shuffle characters
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  const result = [];
  let chunkSize = randomBetween(3, 6);
  let count = 0;

  for (const char of pool) {
    result.push(char);
    count++;

    // add only ONE space after chunk
    if (count === chunkSize && result[result.length - 1] !== " ") {
      result.push(" ");
      count = 0;
      chunkSize = randomBetween(3, 6);
    }
  }

  const finalString = result.join("").trim();

  copyToClipboard(finalString);

  return finalString;
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Copied to clipboard ✅");
  } catch (error) {
    console.error("Clipboard copy failed:", error);
  }
}

// Example
const chars = ["f", "j"];
const percentages = [50, 50];

console.log(generateTypingDrill(chars, percentages, 100));
