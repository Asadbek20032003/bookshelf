import trash from "../../../assets/images/trash.svg";
import edit from "../../../assets/images/edit.svg";
import { deleteBook } from "../../../store/books/books.thunk";
import { useDispatch } from "react-redux";

const CardItem = ({ book, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(book.title));
  };

  const handleEdit = () => {
    onEdit(book);
  };
  return (
    <div className="card bg-[#fefefe] flex flex-col w-full rounded-lg border-[1px] border-[#ebebeb] shadow-custom  p-[32px] relative ">
      <h2 className="font-bold mb-[6px] text-[16px]">{book.title}</h2>
      <ul className="text-[14px] leading-6 mb-[20.5px]">
        <li>
          Cover: <a href={book.cover}> {book.cover} </a>
        </li>
        <li>Pages: {book.pages}</li>
        <li>Published: {book.published}</li>
        <li>Isbn: {book.isbn} </li>
      </ul>
      <div className="flex justify-between items-center text-[14px]">
        <h6 className="text-[14px] font-[400]">
          {book.author} / {book.published}
        </h6>
        <p className="bg-[#00FF29] text-[#ffff] rounded-[8.5px] font-[700] text-center text-[16px] pt-[2px] pl-[12px] pr-[12px] pb-[2px]">
          Finished
        </p>
      </div>
      <div className=" absolute  flex flex-col items-center justify-start -right-8 top-[16px]">
        <div
          onClick={handleDelete}
          className="bg-[#FF4D4F] p-[8px] mb-[2px] rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-0"
        >
          <img src={trash} alt="trash" />
        </div>
        <div
          onClick={handleEdit}
          className=" bg-[#6200EE] p-[8px] rounded-tl-0 rounded-tr-[6px] rounded-br-[6px] rounded-bl-[6px]"
        >
          <img src={edit} alt="edit" />
        </div>
      </div>
    </div>
  );
};

export default CardItem;

CardItem.propTypes = {
  book: Function,
  onEdit: Function,
};
