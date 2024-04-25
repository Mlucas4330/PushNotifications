self.addEventListener('push', e => {
    const { title, icon, body } = e.data.json()

    self.registration.showNotification(title, {
        icon,
        body
    })
})