export const origins =
	process.env["NODE_ENV"] === "production"
		? ["https://screen-culture-api.onrender.com"]
		: ["http://localhost:8000", "http://localhost:3000"];
