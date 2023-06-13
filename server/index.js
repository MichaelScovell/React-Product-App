import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

// Creating our express server
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello There" })
})

// Listen on specific port
app.listen(8080, () => console.log('Were Live on server port 8080'))