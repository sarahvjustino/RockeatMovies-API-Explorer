require("dotenv");
require("express-async-errors")
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError");
const UploadConfig = require("./configs/upload");

const express = require('express');
const routes = require("./routes");
const cors = require("cors");

migrationsRun()

const app = express();
app.use(cors());
app.use(express.json());

app.use("/files", express.static(UploadConfig.UPLOAD_FOLDER));

app.use(routes);

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "Error",
            message: error.message
        })
    }

    console.log(error);

    return response.status(500).json({
        status: "Error",
        message: "Internal server error"
    })
})

const PORT = process.env.PORT || 3333;
app.listen(PORT);