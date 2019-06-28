const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];

const printingNestedArrays = (array) => {
  for (const item of array) {
    if (Array.isArray(item)) {
      printingNestedArrays(item);
    } else {
      console.log(item);
    }
  }
};

printingNestedArrays(array);