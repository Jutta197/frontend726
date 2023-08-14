// 使用 Fetch API 从 JSON 文件加载数据
fetch('book.json')
    .then(response => response.json())
    .then(data => renderBookInfo(data))
    .catch(error => console.error('Error fetching JSON:', error));

function renderBookInfo(data) {
    document.getElementById("bookTitle").textContent = data.title;
    document.getElementById("author").textContent = "Author: " + data.author;
    document.getElementById("year").textContent = "Year: " + data.year;
    document.getElementById("genre").textContent = "Genre: " + data.genre;
}
