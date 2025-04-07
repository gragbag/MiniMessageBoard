import { Router, Request, Response } from "express";
const indexRouter = Router();

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
		id: 1,
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
		id: 2,
	},
];
let nextId = 3;

indexRouter.get("/", (req: Request, res: Response) => {
	res.render("index", { messages: messages });
});

indexRouter.get("/:id", (req: Request, res: Response) => {
	const id: number = Number(req.params.id);
	const message = messages.find((message) => message.id === id);
	res.render("message", { message: message });
});

const incrementId = () => {
	nextId++;
};

export default indexRouter;
export { messages, nextId, incrementId };
