const faker = require('faker');
const fs = require('fs');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generateArray() {
    const randNum = getRandomInt(1, 4)
    return new Array(randNum).fill()
}

const generateMockProducts = (number) => {
    const products = [];
    while (number >= 0) {
        products.push({
            id: number,
            color: generateArray().map(() => faker.commerce.color()),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            prodDesc: faker.commerce.productDescription(),
            image: faker.image.fashion(),
        })
        number--
    }
    return products;
}

// Code to generate User Mock data
const generateUserData = (number) => {
    const persons = [];
    while (number >= 0) {
        persons.push({
            id: number,
            name: faker.name.firstName(),
            description: faker.lorem.paragraphs(2),
            picture: faker.image.avatar(),
            country: faker.address.country(),
            joining_date: faker.date.future(),
        });
        number--;
    }
    return persons;
};

fs.writeFileSync(
    "./db.json",
    JSON.stringify({ users: generateUserData(20), products: generateMockProducts(100) })
);