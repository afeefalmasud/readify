import getBooks from "./getBooks"

const getFeaturedBook = async() => {
  const featuredBooks = await getBooks();
  return featuredBooks.filter(featuredBook => featuredBook.featured)
}

export default getFeaturedBook