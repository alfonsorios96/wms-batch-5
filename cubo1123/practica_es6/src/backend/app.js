import express from "express";
import cors from "cors";
import heroes from "./controllers/superheroes";

const app = express();

app.use(cors());
app.use('/heroes', heroes);

const server = app.listen(8080, () => {
    console.log('Server is running...');
});

module.exports = app;
