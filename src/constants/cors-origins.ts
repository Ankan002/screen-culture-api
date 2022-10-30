export const origins =
	process.env["NODE_ENV"] === "production" ? [] : ["http://localhost:8000", "http://localhost:3000"];
