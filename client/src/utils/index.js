import axios from 'axios'

const registerServiceWorker = () => {
    navigator.serviceWorker.register('service-worker.js').then(async serviceWorker => {
        const publicKeyResponse = await axios.get('http://localhost:3000/push/public_key')

        const subscription = await serviceWorker.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: publicKeyResponse.data.publicKey
        })


        await axios.post('http://localhost:3000/push/send', {
            subscription
        })
    })
}

export {
    registerServiceWorker
}