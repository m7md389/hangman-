const words = [
  {
    word: "Amazon",
    hint: "Jeff Bezos",
  },
  {
    word: "Cat",
    hint: "Pet",
  },
  {
    word: "Bytes",
    hint: "The test",
  },
  {
    word: "FullStack",
    hint: "Our course",
  },
  {
    word: "Lotem",
    hint: "A name",
  },
  {
    word: "New York",
    hint: "American state",
  },
  {
    word: "REACT",
    hint: "R in MERN",
  },
  {
    word: "Tea",
    hint: "Most consumed beverages",
  },
].map((word) => ({ ...word, played: false }));

export default words;
