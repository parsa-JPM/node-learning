import chalk from 'chalk';
import express from 'express';

const app = express();


const products = [
    {
        id: 1,
        name: "volvo"
    },
    {
        id: 2,
        name: "bmw"
    },
    {
        id: 3,
        name: "ferrari"
    },
];

// get product list
app.get('/', (req, res) => {
    res.json(products);
});

// get single product
app.get("/:productId", (req, res) => {
    const { productId } = req.params;
    const product = products.find((p) => p.id === Number(productId));
    if (!product) {
        res.status(404).send("not found");
    }
    res.json(product)
})

app.listen(3000, () => {
    console.log(`server is running ${chalk.green('on port 3000')}`);
})