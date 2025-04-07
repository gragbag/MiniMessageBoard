import { Router, Request, Response } from "express";
import { messages } from "./indexRouter";

const newRouter = Router();

newRouter.get("/", (req: Request, res: Response) => {
	res.render("form");
});

newRouter.post("/", (req: Request, res: Response) => {
	const name: string = req.body.name;
	const message: string = req.body.message;
	messages.push({ text: message, user: name, added: new Date() });
	res.redirect("/");
});

export default newRouter;
