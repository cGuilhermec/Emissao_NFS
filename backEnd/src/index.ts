import express from "express";
import NFSRouter from "./routes/NFSRoutes";

const app = express();
app.use(express.json());
const PORT = 3001;

app.use('/nfs', NFSRouter);

app.listen(PORT, () => {
    console.log(`The server is running on the port: http://localhost:${PORT}`);
});