import type { Book } from "../types";

interface BookItemProps {
  book: Book;
  onDelete: (id: string) => void;
}

function BookItem({ book, onDelete }: BookItemProps) {
  return (
    <div className="book-card">
      <img
        src={book.cover || "https://via.placeholder.com/120x180?text=Sem+Capa"}
        alt={book.title}
        style={{
          width: "120px",
          height: "180px",
          objectFit: "cover",
          borderRadius: "5px",
          marginBottom: "8px",
        }}
      />
      <strong>{book.title}</strong>
      <p style={{ fontSize: "12px", opacity: 0.8 }}>{book.author}</p>
      <span
        style={{
          fontSize: "12px",
          padding: "2px 6px",
          borderRadius: "4px",
          background: book.status === "Lido" ? "#4caf50" : "#f44336",
          display: "inline-block",
          marginBottom: "8px",
        }}
      >
        <span className={book.status === "Lido" ? "badge lido" : "badge nao"}>
          {book.status}
        </span>
      </span>
      <button
        onClick={() => onDelete(book._id!)} // onDelete agora recebe o ID diretamente
        style={{
          marginTop: "8px",
          background: "#ff5555",
          border: "none",
          padding: "6px 8px",
          borderRadius: "4px",
          cursor: "pointer",
          color: "white",
          fontSize: "12px",
        }}
      >
        Remover
      </button>
    </div>
  );
}

export default BookItem;
