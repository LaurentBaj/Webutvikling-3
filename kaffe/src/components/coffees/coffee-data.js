const coffeeArray = [
    { name: "Blue Java", roastLevel: "Lightly", pricePerKg: 200 },
    { name: "Geisha", roastLevel: "Roasted", pricePerKg: 200 },
    { name: "Tropical", roastLevel: "Strongly", pricePerKg: 200 }
];

export const getAll = () => {
    return [...coffeeArray];
}
