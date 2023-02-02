const getTheTitles = function(books) {
    result = [];
    books.forEach(book => {
        result.push(book.title);
    });

    return result;
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
