// import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { FormControl } from "@mui/base/FormControl";
import { Input, inputClasses } from "@mui/base/Input";
import { styled } from "@mui/system";
import { Fragment, useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "10px",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #fff",
  boxShadow: 24,
  p: 4,
};

const StyledInput = styled(Input)(
  ({ theme }) => `
    display: inline-block;
  
    .${inputClasses.input} {
      width: 320px;
      font-family: 'Mulish', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 8px 12px;
      margin-bottom: 12px;
      border-radius: 8px;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
      box-shadow: 0px 2px 2px ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
  
      &:hover {
        border-color: ${blue[400]};
      }
  
      &:focus {
        outline: 0;
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
      }
    }
  
    &.filled .${inputClasses.input} {
      box-shadow: 0 0 2px 2px rgba(125, 200, 0, 0.25);
    }
  `
);

const OkMark = styled("span")`
  margin-left: 8px;
  margin-top: 10px;
  position: absolute;
  color: rgb(125 200 0 / 1);
`;

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

export default function TransitionsModal({ open, setOpen, title, handleClose, onAddBook, book, onEditBook }) {
  const [formData, setFormData] = useState({
    isbn: "",
    title: "",
    author: "",
    cover: "",
    pages: "",
    published: "",
  });

  useEffect(() => {
    if (book) {
      setFormData(book);
    }
  }, [book]);

  const [isValid, setIsValid] = useState({
    isbn: false,
    title: false,
    author: false,
    cover: false,
    pages: false,
    published: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setIsValid((prevState) => ({
      ...prevState,
      [name]: value.trim() !== "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allValid = Object.values(isValid).every(Boolean);
    if (!allValid) {
      alert("Please fill out all fields.");
      return;
    }
    if (book) {
      onEditBook(formData);
    } else {
      onAddBook(formData);
    }
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <FormControl required>
                <label htmlFor="author">Author:</label>
                <Fragment>
                  <StyledInput
                    value={formData.author}
                    onChange={handleChange}
                    name="author"
                    type="text"
                    placeholder="Author"
                    className={isValid.author ? "filled" : ""}
                  />
                  {isValid.author && <OkMark>✔</OkMark>}
                </Fragment>
              </FormControl>
              <FormControl required>
                <label htmlFor="title">Title:</label>
                <Fragment>
                  <StyledInput
                    value={formData.title}
                    onChange={handleChange}
                    name="title"
                    type="text"
                    placeholder="Title"
                    className={isValid.title ? "filled" : ""}
                  />
                  {isValid.title && <OkMark>✔</OkMark>}
                </Fragment>
              </FormControl>
              <FormControl required>
                <label htmlFor="cover">Cover:</label>
                <Fragment>
                  <StyledInput
                    value={formData.cover}
                    onChange={handleChange}
                    name="cover"
                    type="text"
                    placeholder="Cover URL"
                    className={isValid.cover ? "filled" : ""}
                  />
                  {isValid.cover && <OkMark>✔</OkMark>}
                </Fragment>
              </FormControl>
              <FormControl required>
                <label htmlFor="pages">Pages:</label>
                <Fragment>
                  <StyledInput
                    value={formData.pages}
                    onChange={handleChange}
                    name="pages"
                    type="number"
                    placeholder="Pages"
                    className={isValid.pages ? "filled" : ""}
                  />
                  {isValid.pages && <OkMark>✔</OkMark>}
                </Fragment>
              </FormControl>
              <FormControl required>
                <label htmlFor="published">Published:</label>
                <Fragment>
                  <StyledInput
                    value={formData.published}
                    onChange={handleChange}
                    name="published"
                    type="text"
                    placeholder="Published"
                    className={isValid.published ? "filled" : ""}
                  />
                  {isValid.published && <OkMark>✔</OkMark>}
                </Fragment>
              </FormControl>
              <FormControl required>
                <label htmlFor="isbn">ISBN:</label>
                <Fragment>
                  <StyledInput
                    value={formData.isbn}
                    onChange={handleChange}
                    name="isbn"
                    type="text"
                    placeholder="ISBN"
                    className={isValid.isbn ? "filled" : ""}
                  />
                  {isValid.isbn && <OkMark>✔</OkMark>}
                </Fragment>
              </FormControl>
              <Button variant="contained" type="submit" style={{ marginTop: "20px", width: "100%" }}>
                {title === "Add" ? "Add Book" : "Update Book"}
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

TransitionsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  onAddBook: PropTypes.func.isRequired,
  book: PropTypes.object,
  onEditBook: PropTypes.func.isRequired,
};
