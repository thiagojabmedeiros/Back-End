import express from "express";
const app = express();
const PORT = 3333;
app.use(express.json());
app.get("/", async (request, response) => {
    response.status(200).end("hello, image version 2!");
});
app.listen(PORT, () => {
    console.log(`you are on port ${PORT}`);
});
