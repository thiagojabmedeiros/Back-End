"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = require("./routes/index-routes");
const app = (0, express_1.default)();
const PORT = 3333;
app.use(express_1.default.json());
app.use(index_routes_1.routes);
app.listen(PORT, () => console.log(`the server is running at ${PORT}!`));
