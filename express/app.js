import chalk from 'chalk';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Fuck yeaaa!");
})

app.listen(3000, () => {
    console.log(`server is running ${chalk.green('on port 3000')}`);
})