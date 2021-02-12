export const anchorExtractor = (h: string) => {
  let i = h.indexOf('"') + 1;
  let j = i;
  let output = "";

  while (h[j] != '"') {
    j += 1;
  }

  output = h.slice(i, j);
  return output;
};
