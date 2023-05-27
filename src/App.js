import { useState } from "react";
import BookCard from "./components/BookCard";
import { toast } from "react-toastify";

function App() {
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: new Date().getTime(),
      title: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    };

    setBooks([...books, newBook]);

    setBookName("");

    toast.success("Book added", { autoClose: 800 });
  };

  const handleModal = (id) => {
    setDeleteId(id);
    setShowConfirm(!showConfirm);
  };

  const handleDelete = (id) => {
    const updatedList = books.filter((book) => book.id !== id);

    setBooks(updatedList);

    toast.warning("Book deleted", { autoClose: 800 });
  };

  // 1- okundu değerini tersine çevir
  // 2- books dizinin bir kopyasını oluştur
  // 3- düzenlenicek olan kitabın dizideki sırasını bul
  // 4- books kopya diziden çıkar yerine güncellenmiş datayı koy
  // 5- güncel olan kopya diziyi state'e aktar

  // findIndex => dizi içerisindeki bir elemanın dizide ki sırasını bulmayı sağlar
  const handleRead = (book) => {
    const updatedBook = { ...book, isRead: !book.isRead };

    const cloneBooks = [...books];

    const index = cloneBooks.findIndex((item) => item.id === book.id);

    cloneBooks.splice(index, 1, updatedBook);

    setBooks(cloneBooks);
  };
  return (
    <div>
      {/* header */}
      <div className="bg-dark p-3 text-center fs-3 text-light ">
        Check Book List
      </div>
      {/* form */}
      <div className="container my-5">
        <form onSubmit={handleSubmit} className="d-flex gap-3">
          <input
            onChange={(e) => setBookName(e.target.value)}
            value={bookName}
            className="form-control shadow"
            type="text"
          />
          <button className="btn btn-warning shadow">Add</button>
        </form>

        <div>
          {books.length === 0 && (
            <h4 className="my-4 mx-3 fs-3">No book has been added yet</h4>
          )}

          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              handleModal={handleModal}
              handleRead={handleRead}
            />
          ))}
        </div>
      </div>

      {/* modal */}

      {showConfirm && (
        <div>
          <h5>Do you want to delete?</h5>
          <button
            onClick={() => setShowConfirm(false)}
            className="btn btn-warning"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleDelete(deleteId);
              setShowConfirm(!showConfirm);
            }}
            className="btn btn-danger"
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
