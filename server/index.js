import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

//Importing Routes
import dalleRoutes from './routes/dalle.routes.js';

// Creating our express server
const app = express();
// Defining app middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello There" })
})

// Listen on specific port
app.listen(8080, () => console.log('Were Live on server port 8080'))