import { Router } from "express"
import WebPush from 'web-push'
import dotenv from 'dotenv'

dotenv.config()

const publicKey = process.env.PUBLIC_KEY

const subject = process.env.NODE_ENV === 'dev' ? process.env.EMAIL : process.env.URL

WebPush.setVapidDetails(subject, publicKey, process.env.PRIVATE_KEY)

const router = Router()

router.get('/push/public_key', (_req, res) => {
    res.send({ publicKey })
})

router.post('/push/send', (req, res) => {
    const { subscription, notification, quantity } = req.body

    for (let i = 0; i < quantity; i++) {
        WebPush.sendNotification(subscription, JSON.stringify(notification))
    }
})

export default router