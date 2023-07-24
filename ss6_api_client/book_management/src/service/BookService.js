import axios from "axios";

export async function getBookList() {
    const res = await axios.get('http://localhost:8081/bookList');
    return res.data;
}

export async function deleteBookById(id) {
    await axios.delete('http://localhost:8081/bookList/' + id);
}

export async function addBook(book) {
    await axios.post('http://localhost:8081/bookList/', book);
}

export async function editBookById(book) {
    await axios.put('http://localhost:8081/bookList/' + book.id, book);
}

export async function getBookById(id) {
    const res = await axios.get('http://localhost:8081/bookList/' + id);
    return res.data;
}