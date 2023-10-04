
import express, { Router, Request, Response } from "express";
import { PASTRIES as pastries } from "./mocks";
import { Pastrie } from "./pastrie";
import { sign, verify } from 'jsonwebtoken';

const router: Router = express.Router();

// all pastries
router.get("/all", function (req: Request, res: Response) {
    const token = req.cookies.token
    console.log('Cookies: ', req.cookies)
    if (!token)
        return res.status(401).end()

    try {
        verify(token, "secret")
        res.json(pastries);

    } catch (e) {

        return res.status(401).end()
    }
    return res.status(401).end()
});

// id pastries
router.get("/pastrie/:id", function (req: Request, res: Response) {
    const id: string = req.params.id
    const pastrie: Pastrie | undefined = pastries.find(p => p.id == id);

    if (pastrie)
        res.json(pastrie);
});

router.get('/login', (req, res, next) => {
    const { username, password } = { username: "alan@alan.fr", password: "123" }

    if (username !== "alan@alan.fr" && password !== "123") res.status(401).end()

    const token = sign({ username }, 'secret');

    res.cookie("token", token)

    res.end()

})


router.get('*', function (req: Request, res: Response) {
    res.status(404).json({ error: "Not found" })
});

export default router;