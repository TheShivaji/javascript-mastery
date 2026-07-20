const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }

];

// ==============================
// REVISION NOTES
// ==============================
// Study tip: uncomment one example at a time.
// Focus on one concept, run it, and then move to the next.

// ==============================
// 1) ARRAY DESTRUCTURING
// ==============================
// Goal: unpack values from an array quickly.
// Example: take the first two books from the array.
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// Example: skip the first two books and take the third.
// const [, , thirdBooks] = books;
// console.log(thirdBooks);

// Example: destructure nested arrays.
// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// ==============================
// 2) OBJECT DESTRUCTURING
// ==============================
// Goal: unpack values from an object quickly.
// Example: take title, author, and ISBN directly.
// let { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// Example: rename a property while destructuring.
// let { keywords: tags } = books[0];
// console.log(tags);

// Example: give a fallback value if a property is missing.
// let { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

// Example: reassign values into new variables.
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// Example: destructure deeply nested data.
// const { thirdParty: { goodreads: { rating: bookRating } } } = books[0];
// console.log(bookRating);

// Example: destructure function parameters.
// const printBookInfo = ({ title, author, year = 'unknown year' }) => {
//   console.log(`${title} by ${author}, ${year}`);
// };
// function prinBookInfo({ title, author, year = 'year unknown' }) {
//   console.log(`${title} by ${author}, ${year}`);
// }
// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });
// prinBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

// ==============================
// 3) SPREAD / REST OPERATORS
// ==============================
// Goal: expand arrays and collect extra values.
// Spread example: combine authors from two books.
// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// Spread example: split a string into characters.
// function spellWord(str) {
//   console.log(...str);
// }
// spellWord('javascript');

// Rest example: collect the remaining keywords.
// console.log(typeof books[0].keywords);
// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// Rest example: collect the remaining object properties.
// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher);

// Rest example: collect all extra function arguments.
// function printBookAuthorsCount(title, ...authors) {
//   console.log(`The book "${title}" has ${authors.length} authors`);
// }
// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// ==============================
// OPTIONAL CHAINING / NULLISH COALESCING
// ==============================
// const hasExamplesInJava = books[0]?.keywords?.includes('java');
// console.log(hasExamplesInJava);

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent && console.log(`${books[i].title} provides online content`);
// }

// for (const book of books) {
//   const content = book.onlineContent ?? 'Missing';
//   console.log(content);

//   if (content == 'Missing') {
//     console.log(`${book.title} provides no data about its online content`);
//   }
// }

// ==============================
// 4) LOOPS AND DATA COLLECTION
// ==============================
// Goal: practice loops and collect values from objects.
// Example: sum all page counts.
// let pageSum = 0;
// for (const { pages } of books) {
//   pageSum += pages;
// }
// console.log(pageSum);

// Example: collect all authors into one array.
// const allAuthors = [];
// for (const { author } of books) {
//   if (typeof author === 'string') {
//     allAuthors.push(author);
//   } else {
//     for (let authors of author) {
//       allAuthors.push(authors);
//     }
//   }
// }
// console.log(allAuthors);

// Example: print authors with index numbers.
// const allAuthors = [];
// for (const { author } of books) {
//   if (typeof author === 'string') {
//     allAuthors.push(author);
//   } else {
//     for (let authors of author) {
//       allAuthors.push(authors);
//     }
//   }
// }
// for (const [index, value] of allAuthors.entries()) {
//   console.log(`${index + 1}: ${value}`);
// }

// ==============================
// 5) COMPUTED PROPERTY NAMES
// ==============================
// Goal: create object keys dynamically.
// Example: build an object from a key-value array.
// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];
// const newBook = Object.fromEntries(bookData);
// console.log('Computed property example:', newBook);

// Example: use shorthand property names.
// const pages = 880;
// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };
// console.log('Property shorthand example:', newBook2);






