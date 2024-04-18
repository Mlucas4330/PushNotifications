import { Router } from "express"
import WebPush from 'web-push'
import dotenv from 'dotenv'

dotenv.config()

const publicKey = process.env.PUBLIC_KEY

WebPush.setVapidDetails('mailto:mlucas4330@gmail.com', publicKey, process.env.PRIVATE_KEY)

const router = Router()

router.get('/push/public_key', (_req, res) => {
    res.send({ publicKey })
})

router.post('/push/send', (req, res) => {
    const { subscription } = req.body

    WebPush.sendNotification(subscription, 'testando')
})

export default router