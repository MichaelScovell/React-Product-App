import express from 'express'
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

// Define router for routes
const router = express.Router();

// Create new configuration for Dalle
const config = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

// Merge api key with ai (for AI access)
const openai = new OpenAIApi(config)

// Route
router.route('/').get((req, res) => {
	res.status(200).json({ message: "Hello from DallE" });
})

// Define route to pass prompt from server to frontend client
router.route('/').post(async (req, res) => {
	try {
		// Capturing prompt in request body
		const { prompt } = req.body;
		// Structuring the request to generate the image
		const response = await openai.createImage({
			prompt,
			n: 1,
			size: '1024x1024',
			response_format: 'b64_json'
		});

		// variable for returned image
		const image = response.data.data[0].b64_json;

		// Return generated image
		res.status(200).json({ photo: image });

	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Something went wrong" })
	}
})

export default router;