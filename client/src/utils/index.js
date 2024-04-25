import axios from 'axios'

const baseURL = import.meta.env.VITE_NODE_ENV === 'dev' ?
    import.meta.env.VITE_URL_DEV :
    import.meta.env.VITE_URL_PROD

const instance = axios.create({
    baseURL
})

const registerServiceWorker = async () => {
    const serviceWorker = await navigator.serviceWorker.register('service-worker.js')

    return serviceWorker
}

const subscribeToPushManager = async () => {
    const serviceWorker = await registerServiceWorker()

    const publicKeyResponse = await instance.get('/push/public_key')

    const subscription = await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKeyResponse.data.publicKey
    })

    return subscription
}

const sendNotification = async (notification, quantity) => {
    const subscription = await subscribeToPushManager()

    await instance.post('/push/send', {
        subscription,
        notification,
        quantity
    })
}

export {
    sendNotification
}