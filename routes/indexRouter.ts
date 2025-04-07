import { Router, Request, Response } from "express";
const indexRouter = Router();

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

indexRouter.get("/", (req: Request, res: Response) => {
	res.render("index", { messages: messages });
});

export default indexRouter;
export { messages };
