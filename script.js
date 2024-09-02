// Array extraño
const strangeArray = [
    "Zero",
    function () {
        alert("Hola soy una función en un array");
    },
    22,
    null,
    "Go lang",
    undefined,
    "Cobol",
    "I'm programmer",
    -2000,
    "hello world",
    "One is 1", // Asegúrate de que sea una cadena
    { name: "Info", lastname: "last info" },
    () => true,
    function showNumbers() {
        return "1, 2, 3, 4";
    },
    "Another String",
    ["Hola mundo!"],
    "B is a letter",
    "JavaScript",
];

// Función para mostrar la lista en el elemento <ul>
function showList(array) {
    const container = document.getElementById("list");
    container.innerHTML = "";

    array.forEach((element) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        container.appendChild(li);
    });
}

// Filtrar y ordenar los elementos cuando el documento esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const filteredAndSortedArray = strangeArray
        .filter(item => typeof item === 'string') // Filtrar solo las cadenas
        .sort((a, b) => a.localeCompare(b)); // Ordenar alfabéticamente

    showList(filteredAndSortedArray);
});

function showList(array) {
    const container = document.getElementById("list");
    container.innerHTML = "";

    array.forEach((element) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        container.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const filteredAndSortedArray = strangeArray
        .filter(item => typeof item === 'string')
        .sort((a, b) => a.localeCompare(b));

    showList(filteredAndSortedArray);
});
