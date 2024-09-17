// Function to get all books
document.getElementById('getBooksBtn').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/books', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const books = await response.json();
    console.log('All Books:', books);
});

// Function to create a new book
document.getElementById('createBookBtn').addEventListener('click', async () => {
    const newBook = {
        title: '1984',
        isbn: '978-0451524935',
        publisherDate: '1949-06-08',
        author: 'George Orwell'
    };

    const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    });

    const book = await response.json();
    console.log('Created Book:', book);
});

// Function to update a book
document.getElementById('updateBookBtn').addEventListener('click', async () => {
    const bookId = prompt('Enter Book ID to update:');
    const updatedBook = {
        title: 'Animal Farm',
        isbn: '978-0451526342',
        publisherDate: '1945-08-17',
        author: 'George Orwell'
    };

    const response = await fetch(`http://localhost:3000/books/${bookId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBook)
    });

    if (response.ok) {
        console.log('Book updated successfully');
    } else {
        console.log('Failed to update book');
    }
});

// Function to delete a book
document.getElementById('deleteBookBtn').addEventListener('click', async () => {
    const bookId = prompt('Enter Book ID to delete:');

    const response = await fetch(`http://localhost:3000/books/${bookId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        console.log('Book deleted successfully');
    } else {
        console.log('Failed to delete book');
    }
});
