import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/axios";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("/books");
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error.response ? error.response.data : error.message);
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
});

export const addBook = createAsyncThunk("books/addBook", async (newBook, { rejectWithValue }) => {
  try {
    const response = await axios.post("/books", newBook);
    return response.data;
  } catch (error) {
    console.error("Error adding book:", error.response ? error.response.data : error.message);
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
});

export const updateBook = createAsyncThunk("books/updateBook", async ({ id, updateBook }, { rejectWithValue }) => {
  try {
    const response = await axios.patch(`/books/${id}`, updateBook);
    return response.data;
  } catch (error) {
    console.error("Error updating book:", error.response ? error.response.data : error.message);
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
});

export const deleteBook = createAsyncThunk("books/deleteBook", async (id, { rejectWithValue }) => {
  try {
    await axios.delete("/books/" + id);
    return id;
  } catch (error) {
    console.error("Error deleting book:", error.response ? error.response.data : error.message);
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
});
