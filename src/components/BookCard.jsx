import React from "react";

const BookCard = ({ book, handleRead, handleModal }) => {
  return (
    <div className="d-flex align-items-center justify-content-between border p-3 my-4 shadow">
      <div>
        <h5
          style={{
            textDecoration: book.isRead ? "line-through" : "none",
          }}
        >
          {book.title}
        </h5>
        <p>{book.date}</p>
      </div>

      <div className="btn-group">
        <button onClick={() => handleModal(book.id)} className="btn btn-danger">
          Sil
        </button>
        <button className="btn btn-primary">Düzenle</button>
        <button onClick={() => handleRead(book)} className="btn btn-success">
          {book.isRead ? "Okundu" : "Okunmadı"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
