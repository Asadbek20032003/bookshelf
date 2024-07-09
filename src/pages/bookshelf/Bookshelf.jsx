import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import BookCard from "./components/BookCard";
import Alert from "./components/Alert";
import Modal from "./components/Modal";
import { addBook, fetchBooks, updateBook } from "../../store/books/books.thunk";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../layout/Navbar";

const Bookshelf = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [currentBook, setCurrentBook] = useState(null);
  const [open, setOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCurrentBook(null);
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddBook = async (newBook) => {
    dispatch(addBook(newBook))
      .unwrap()
      .then(() => {
        setAlertMessage("Book added successfully!");
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 3000); // Alertni 3 sekunddan keyin yashirish
      });

    setOpen(false);
  };

  const handleEditBook = (book) => {
    setCurrentBook(book);
    setOpen(true);
  };

  const handleUpdateBook = async (updatedBook, id) => {
    dispatch(updateBook({ updatedBook, id }))
      .unwrap()
      .then(() => {
        setAlertMessage("Book updated successfully!");
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 3000); // Alertni 3 sekunddan keyin yashirish
      });

    setOpen(false);
  };

  return (
    <>
      <Navbar />
      <section className="pt-[36px] pb-[36px] h-[90vh]">
        <div className="container">
          <div className="flex flex-col">
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-[36px] font-[700] text-[#fefefe]">
                  You have got <span className="text-[#6200EE]">{books.length} books</span>
                </h1>
                <button
                  className="bg-[#6200EE] text-[#fefefe] pt-[10px] pr-[24px] pb-[10px] pl-[24px] rounded-[4px]"
                  onClick={handleOpen} // Open modal on button click
                >
                  <FontAwesomeIcon icon={faPlus} /> Create book
                </button>
              </div>
              <p className="text-[#fefefe] mt-[12px] font-[400] text-[20px]">Your books today</p>
            </div>
            <div className="mt-[36px]">
              <BookCard onEdit={handleEditBook} />
            </div>
          </div>
        </div>
        {alertVisible && <Alert message={alertMessage} />}
      </section>

      <Modal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        onAddBook={handleAddBook}
        onEditBook={handleUpdateBook}
        book={currentBook}
      />
    </>
  );
};

export default Bookshelf;
