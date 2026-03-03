import fs from 'fs';
import path from 'path';

export default function BooksPage() {
  // В серверних компонентах можна читати файли прямо тут!
  const booksDirectory = path.join(process.cwd(), 'public', 'books');
  const books = fs.readdirSync(booksDirectory).filter(f => f.endsWith('.pdf'));

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Список книг</h1>
      <ul className="space-y-2">
        {books.map((book) => (
          <li key={book}>
            <a 
              href={`/books/${book}`} 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              {book.replace('.pdf', '')}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}