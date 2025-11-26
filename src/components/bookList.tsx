import { useEffect, useState } from "react";
import type { Book } from "../types";
import { API_URL } from "../api";
import BookForm from "./BookForm";
import BookItem from "./BookItem";

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);


  async function deleteBook(id: string) {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      await loadBooks(); // Recarrega a lista para refletir a remoção
    } catch (error) {
      console.error("Erro ao remover livro:", error);
    }
  }

  async function loadBooks() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Erro ao carregar livros:", error);
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <h2>Lista de Livros</h2>

        <BookForm onAdd={loadBooks} />

      {books.length === 0 && <p>Nenhum livro encontrado.</p>}

    <div className="book-grid">
        {books.map((book) => (
          <BookItem key={book._id} book={book} onDelete={deleteBook} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
