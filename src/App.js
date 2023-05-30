import { useState } from "react";
import BookCard from "./components/BookCard";
import { toast } from "react-toastify";
import EditModal from "./components/EditModal";

function App() {
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookName) {
      toast.warning("Please enter book name", { autoClose: 800 });
      return;
    }

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

  // kitabı günceller
  const handleEditBook = () => {
    // değişecek elemanın dizide ki sırasını bul
    const index = books.findIndex((book) => book.id === editItem.id);

    //kitaplar dizisinin kopyasını oluşturma
    const cloneBooks = [...books];

    // eski kitabı diziden çıkar yerine yenisini koy
    cloneBooks.splice(index, 1, editItem);

    // stati güncelle

    setBooks(cloneBooks);

    // modalı kapat
    setShowEditModal(false);
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
              setShowEditModal={setShowEditModal}
              setEditItem={setEditItem}
            />
          ))}
        </div>
      </div>

      {/* modal */}

      {showConfirm && (
        <div className="confirmModal">
          <div className="confirmModalInner shadow">
            <h5>Do you want to delete?</h5>
            <button
              className="btn btn-warning"
              onClick={() => setShowConfirm(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDelete(deleteId);
                setShowConfirm(!showConfirm);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* edit modal */}

      {showEditModal && (
        <EditModal
          setShowEditModal={setShowEditModal}
          setEditItem={setEditItem}
          editItem={editItem}
          handleEditBook={handleEditBook}
        />
      )}
    </div>
  );
}

export default App;
