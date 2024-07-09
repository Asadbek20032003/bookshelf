import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import booksReducer from "./books/books.slice";
import messagesReducer from "./messages/messages.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    messages: messagesReducer,
  },
});

export default store;
