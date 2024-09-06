import chalk from 'chalk';
import express from 'express';
// notice that we have to write suffix
import logger from './logger.js';

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

// add middleware to all endpoints that defined after this line
app.use(logger);

// working with query param
// notice that we have to put this endpoint in first of file
app.get("/search", (req, res) => {
    // shallow cody of prodcts
    let p = [...products];
    const { name } = req.query;
    if (name) {
        p = p.filter((p) => p.name.includes(name))
    }

    return res.json(p);
})

// get product list
app.get('/', (req, res) => {
    return res.json(products);
});

// get single product using query param
app.get("/:productId", (req, res) => {
    const { productId } = req.params;
    const product = products.find((p) => p.id === Number(productId));
    if (!product) {
        return res.status(404).send("not found");
    }

    return res.json(product)
});

// it's mandetory to parse json in res body
app.use(express.json());

app.post("/api/test", (req, res) => {
    const { name, family } = req.body;
    console.log(req.body);

    if (name !== 'parsa') {
        return res
            .status(405)
            .json({ 'error': 'name is wrong' })
    } else {
        return res.status(201).json({ 'msg': 'success' })
    }
});



app.listen(3000, () => {
    console.log(`server is running ${chalk.green('on port 3000')}`);
})