const coffeeArray = [
    { name: "Blue Java", roastLevel: "Lightly"},
    { name: "Geisha", roastLevel: "Roasted"},
    { name: "Tropical", roastLevel: "Strongly"}
];

export const getCoffeeList = () => {
    return [...coffeeArray]
}