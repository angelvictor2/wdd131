const products = [
    { id: "washer3000", name: "Washer 3000" },
    { id: "dryerpro", name: "Dryer Pro" },
    { id: "refrigeratorxl", name: "Refrigerator XL" },
    { id: "dishwasherplus", name: "Dishwasher Plus" }
];

const productSelect = document.querySelector('#product');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;      // ✔️ ID como value
    option.textContent = product.name; // ✔️ Name como texto
    productSelect.appendChild(option);
});

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;