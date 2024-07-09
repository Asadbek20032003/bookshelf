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
// import { BorderAllRounded } from "@mui/icons-material";
// import { Button } from "antd";

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

export default function TransitionsModal({ open, handleClose, onAddBook, book, onEditBook }) {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book) {
      onEditBook(formData);
    } else {
      onAddBook(formData);
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            Author:
            <FormControl required>
              {({ filled, focused }) => (
                <Fragment>
                  <StyledInput
                    value={formData.author}
                    onChange={handleChange}
                    name="title"
                    type="text"
                    placeholder="book title"
                    className={filled ? "filled" : ""}
                  />
                  {filled && !focused && <OkMark>✔</OkMark>}
                </Fragment>
              )}
            </FormControl>
            Title:
            <FormControl required>
              {({ filled, focused }) => (
                <Fragment>
                  <StyledInput
                    value={formData.title}
                    onChange={handleChange}
                    name="title"
                    type="text"
                    placeholder="book title"
                    className={filled ? "filled" : ""}
                  />
                  {filled && !focused && <OkMark>✔</OkMark>}
                </Fragment>
              )}
            </FormControl>
            Cover:
            <FormControl required>
              {({ filled, focused }) => (
                <Fragment>
                  <StyledInput
                    onChange={handleChange}
                    name="cover"
                    value={formData.cover}
                    type="text"
                    placeholder="url"
                    className={filled ? "filled" : ""}
                  />
                  {filled && !focused && <OkMark>✔</OkMark>}
                </Fragment>
              )}
            </FormControl>
            Pages:
            <FormControl required>
              {({ filled, focused }) => (
                <Fragment>
                  <StyledInput
                    onChange={handleChange}
                    name="pages"
                    value={formData.pages}
                    type="number"
                    placeholder="pages"
                    className={filled ? "filled" : ""}
                  />
                  {filled && !focused && <OkMark>✔</OkMark>}
                </Fragment>
              )}
            </FormControl>
            Published:
            <FormControl required>
              {({ filled, focused }) => (
                <Fragment>
                  <StyledInput
                    onChange={handleChange}
                    name="published"
                    value={formData.published}
                    type="number"
                    placeholder="published"
                    className={filled ? "filled" : ""}
                  />
                  {filled && !focused && <OkMark>✔</OkMark>}
                </Fragment>
              )}
            </FormControl>
            Isbn:
            <FormControl required>
              {({ filled, focused }) => (
                <Fragment>
                  <StyledInput
                    value={formData.isbn}
                    onChange={handleChange}
                    name="isbn"
                    type="number"
                    placeholder="ISBN"
                    className={filled ? "filled" : ""}
                  />
                  {filled && !focused && <OkMark>✔</OkMark>}
                </Fragment>
              )}
            </FormControl>
            <Button onClick={handleSubmit} className="rounded-lg">
              {book ? "Update Book" : "Add Book"}
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

TransitionsModal.propTypes = {
  book: PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    published: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
  }),
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onAddBook: PropTypes.func.isRequired,
  onEditBook: PropTypes.func.isRequired,
};
