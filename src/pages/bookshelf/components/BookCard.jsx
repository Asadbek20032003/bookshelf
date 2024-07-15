// import React from "react";

import trash from "../../../assets/images/trash.svg";
import edit from "../../../assets/images/edit.svg";

// import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
// import { deleted } from "../../../store/books/books.slice";
import { deleteBook } from "../../../store/books/books.thunk";
const BookCard = ({ book, onEdit }) => {
  const books = useSelector((state) => state.books.books);
  // console.log(books.data, "bookscard");
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleEdit = () => {
    onEdit(book);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
      <div className="card bg-[#fefefe] flex flex-col  rounded-lg border-[1px] border-[#ebebeb] shadow-custom  p-[32px] relative mr-[24px] ">
        <h2 className="font-bold mb-[6px] text-[16px]">Raspberry Pi User Guide</h2>
        <ul className="text-[14px] leading-6 mb-[20.5px]">
          <li>
            Cover: <a href=""> http://url.to.book.cover </a>
          </li>
          <li>Pages: 221</li>
          <li>Published: 2012</li>
          <li>Isbn:9781118464465</li>
        </ul>
        <div className="flex justify-between items-center text-[14px]">
          <h6 className="text-[14px] font-[400]">Eben Upton / 2012</h6>
          <p className="bg-[#00FF29] text-[#ffff] rounded-[8.5px] font-[700] text-center text-[16px] pt-[2px] pl-[12px] pr-[12px] pb-[2px]">
            Finished
          </p>
        </div>
        <div className=" absolute  flex flex-col items-center justify-start -right-8 top-[16px]">
          <div className="bg-[#FF4D4F] p-[8px] mb-[2px] rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-0">
            <img src={trash} alt="trash" />
          </div>
          <div className=" bg-[#6200EE] p-[8px] rounded-tl-0 rounded-tr-[6px] rounded-br-[6px] rounded-bl-[6px]">
            <img src={edit} alt="edit" />
          </div>
        </div>
      </div>
      {/* <CardItem book={book} onEdit={onEdit} /> */}
      {books.map((book) => {
        console.log(" ook", book);
        return (
          <div
            key={book.data.id}
            className="card bg-[#fefefe] flex mb- flex-col  rounded-lg border-[1px] border-[#ebebeb] shadow-custom p-[32px]  mr-[24px]"
          >
            <h2 className="font-bold mb-[6px] text-[16px]">
              {book.data.author} {book.title}
            </h2>
            <ul className="text-[14px] leading-6 mb-[20.5px]">
              <li>
                Cover: <a href={book.data.cover}> {book.data.cover} </a>
              </li>
              <li>Pages: {book.data.pages}</li>
              <li>Published: {book.data.published}</li>
              <li>Isbn: {book.data.isbn}</li>
            </ul>
            <div className="flex justify-between items-center text-[14px]">
              <h6 className="text-[14px] font-[400]">
                {book.data.author} / {book.data.published}
              </h6>
              <p className="rounded-[8.5px]  bg-[#00FF29] text-[#ffff] font-[700] text-center text-[16px] pt-[2px] pl-[12px] pr-[12px] pb-[2px]">
                Finished
              </p>
            </div>
            <div className="absolute flex flex-col items-center justify-start -right-8 top-[16px]">
              <div
                onClick={handleDelete}
                className="bg-[#FF4D4F] p-[8px] mb-[2px] rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-0"
              >
                <img src={trash} alt="trash" />
              </div>
              <div
                onClick={handleEdit}
                className="bg-[#6200EE] p-[8px] rounded-tl-0 rounded-tr-[6px] rounded-br-[6px] rounded-bl-[6px]"
              >
                <img src={edit} alt="edit" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookCard;

BookCard.propTypes = {
  book: Function,
  onEdit: Function,
};
