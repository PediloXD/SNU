const components = {
    cpu: [
        { name: "Intel Core i5", price: 150 },
        { name: "Intel Core i7", price: 250 },
        { name: "AMD Ryzen 5", price: 160 },
        { name: "AMD Ryzen 7", price: 270 }
    ],
    motherboard: [
        { name: "ASUS B550", price: 130 },
        { name: "MSI Z590", price: 180 }
    ],
    gpu: [
        { name: "NVIDIA RTX 4060", price: 350 },
        { name: "AMD RX 6700 XT", price: 400 }
    ],
    ram: [
        { name: "16GB DDR4", price: 60 },
        { name: "32GB DDR4", price: 100 }
    ],
    storage: [
        { name: "SSD 500GB", price: 50 },
        { name: "SSD 1TB", price: 90 },
        { name: "HDD 1TB", price: 40 }
    ],
    psu: [
        { name: "550W Bronze", price: 45 },
        { name: "750W Gold", price: 85 }
    ],
    case: [
        { name: "Gabinete ATX Básico", price: 50 },
        { name: "Gabinete Gaming RGB", price: 120 }
    ]
};

function populateSelect(id, items) {
    const select = document.getElementById(id);
    items.forEach(item => {
        const option = document.createElement("option");
        option.value = item.price;
        option.textContent = `${item.name} - $${item.price}`;
        select.appendChild(option);
    });

    select.addEventListener("change", updateTotal);
}

function updateTotal() {
    let total = 0;
    Object.keys(components).forEach(id => {
        const value = parseFloat(document.getElementById(id).value);
        if (!isNaN(value)) total += value;
    });
    document.getElementById("total").textContent = total;
}

window.onload = () => {
    Object.entries(components).forEach(([key, value]) => {
        populateSelect(key, value);
    });
};