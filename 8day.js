// problem 36
function safeJsonParse(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
  }
}

// problem 37
async function retry(fn, times) {
  for (let i = 0; i < times; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === times - 1) {
        throw error;
      }
    }
  }
}