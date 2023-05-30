const EditModal = ({
  setShowEditModal,
  setEditItem,
  editItem,
  handleEditBook,
}) => {
  return (
    <div className="confirmModal">
      <div className="confirmModalInner">
        <h5 className="text-center">Edit Book Name</h5>

        <input
          value={editItem.title}
          className="form-control shadow"
          type="text"
          placeholder="Change new book name"
          onChange={(e) =>
            setEditItem({
              ...editItem,
              title: e.target.value,
              date: new Date().toLocaleString(),
            })
          }
        />

        <div className="d-flex flex-column gap-3">
          <button
            className="btn btn-warning"
            onClick={() => setShowEditModal(false)}
          >
            Cancel
          </button>
          <button className="btn btn-success" onClick={handleEditBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
