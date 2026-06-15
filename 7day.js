// problem 31
function debounce(fn, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

// Example
function search() {
  console.log("Searching...");
}

const debouncedSearch = debounce(search, 300);

debouncedSearch();
debouncedSearch();
debouncedSearch();
debouncedSearch();
