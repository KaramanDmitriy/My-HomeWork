//Завдання2
const products = [{
        id: 1,
        name: "Ноутбук",
        quantity: 5,
        price: 15000,
        date: "2025-08-01"
    },
    {
        id: 2,
        name: "Мишка",
        quantity: 20,
        price: 300,
        date: "2025-08-03"
    },
    {
        id: 3,
        name: "Клавіатура",
        quantity: 15,
        price: 800,
        date: "2025-08-02"
    },
    {
        id: 4,
        name: "Монітор",
        quantity: 7,
        price: 5000,
        date: "2025-08-04"
    },
    {
        id: 5,
        name: "Принтер",
        quantity: 3,
        price: 7000,
        date: "2025-08-05"
    },
    {
        id: 6,
        name: "Сканер",
        quantity: 2,
        price: 4500,
        date: "2025-08-06"
    },
    {
        id: 7,
        name: "Колонки",
        quantity: 10,
        price: 1200,
        date: "2025-08-07"
    },
    {
        id: 8,
        name: "USB-накопичувач",
        quantity: 50,
        price: 250,
        date: "2025-08-08"
    },
    {
        id: 9,
        name: "Веб-камера",
        quantity: 6,
        price: 1100,
        date: "2025-08-09"
    },
    {
        id: 10,
        name: "Мережевий кабель",
        quantity: 30,
        price: 100,
        date: "2025-08-10"
    }
];

let sortDirection = {};

function renderTable(data) {
    const tbody = document.querySelector("#productTable tbody");
    tbody.innerHTML = "";
    data.forEach(item => {
        const row = `<tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>${item.price}</td>
          <td>${item.date}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function sortTable(key) {
    const isNumeric = typeof products[0][key] === "number";
    sortDirection[key] = !sortDirection[key];

    products.sort((a, b) => {
        if (isNumeric) {
            return sortDirection[key] ? a[key] - b[key] : b[key] - a[key];
        } else {
            return sortDirection[key] ?
                a[key].localeCompare(b[key]) :
                b[key].localeCompare(a[key]);
        }
    });

    renderTable(products);
}

document.querySelectorAll("th").forEach(th => {
    th.addEventListener("click", () => {
        const key = th.getAttribute("data-key");
        sortTable(key);
    });
});

renderTable(products);


