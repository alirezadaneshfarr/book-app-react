import { useState } from "react";

import { books as bookData } from "../constants/mockData";

import BookCard from "./BookCard";
import FavoriteList from "./FavoriteList";
import SearchBox from "./SearchBox";

const Books = () => {
  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((item) => item.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  const bookSearchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        bookSearchHandler={bookSearchHandler}
      />
      <div className="container mx-auto flex flex-col-reverse xl:flex-row">
        <div className="flex flex-col set">
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handleLikedList={handleLikedList}
            />
          ))}
        </div>
        {liked.length ? (
          <div
            className="container mx-auto flex flex-col 
        bg-[#6552f4] my-8 rounded-2xl h-fit xl:ml-10 set-favor">
            <h3 className="my-4 ml-4 font-semibold">Favorites</h3>
            {liked.map((like) => (
              <FavoriteList key={like.id} data={like} />
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Books;
