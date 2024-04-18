import axios from 'axios'

const registerServiceWorker = () => {
    navigator.serviceWorker.register('service-worker.js').then(async serviceWorker => {
        const publicKeyResponse = await axios.get('https://pushnotifications.onrender.com/push/public_key')

        const subscription = await serviceWorker.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: publicKeyResponse.data.publicKey
        })


        await axios.post('https://pushnotifications.onrender.com/push/send', {
            subscription
        })
    })
}

export {
    registerServiceWorker
}