import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // process.cwd() — це корінь вашого проекту
    const booksDirectory = path.join(process.cwd(), 'public', 'books');
    
    // Зчитуємо список файлів
    const filenames = fs.readdirSync(booksDirectory);
    
    // Фільтруємо лише PDF
    const pdfFiles = filenames.filter(file => 
      file.toLowerCase().endsWith('.pdf')
    );

    return NextResponse.json(pdfFiles);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read directory' }, { status: 500 });
  }
}