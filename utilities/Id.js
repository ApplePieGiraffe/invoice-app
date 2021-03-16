export function generateRandomId() {
    let id = ''
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    id += letters.charAt(Math.floor(Math.random() * letters.length))
    id += letters.charAt(Math.floor(Math.random() * letters.length))
    id += String(Math.random()).slice(2, 6)
    return id
}

export function generateUniqueId(ids) {
    while (true) {
        let id = generateRandomId()
        if (!ids.includes(id)) {
            return id
        }
    }
}