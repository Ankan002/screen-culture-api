import express, { Request, Response } from "express";
import cors from "cors";
import { origins } from "constants/cors-origins";
import cookieParser from "cookie-parser";
import { morganConfig } from "middlewares/morgan";
import { logger } from "utils/logger";

export const startServer = () => {
	const app = express();
	const PORT = process.env["PORT"];

	app.use(
		cors({
			credentials: true,
			origin: origins,
		})
	);

	app.use(express.json());
	app.use(cookieParser());
	app.use(morganConfig);

	app.get("/", (req: Request, res: Response) => {
		// Delete this later. ONLY FOR TESTING PURPOSES...
		res.cookie("Name", `${new Date().getUTCMilliseconds()}`, {
			httpOnly: true,
		});

		return res.status(200).json({
			success: true,
			message: "Welcome to the official Screen Culture API!!",
		});
	});

	app.listen(PORT, () => logger.info(`App is running at PORT: ${PORT}`));
};
