import Store from 'store'

// do stuff to invoices

export function markAsPaid(id, invoices, setInvoices) {
    const newInvoices = invoices.map((invoice) => {
        if (id === invoice.id) {
            return {...invoice, status: 'paid'}
        }
        return invoice
    })
    setInvoices(newInvoices)
    Store.set('invoices', newInvoices)
}

export function deleteInvoice(id, invoices, setInvoices) {
    const newInvoices = invoices.filter((invoice) => {
        return id !== invoice.id
    })
    setInvoices(newInvoices)
    Store.set('invoices', newInvoices)
}

// create a new invoice

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

// misc

export function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function invoicesMessage(num, filter) {
    if (num === 0 && !filter) {
        return 'There are no invoices.'
    } else if (num === 0 && filter) {
        return `There are no ${filter} invoices.`
    } else if (num === 1 && !filter) {
        return 'There is 1 invoice.'
    } else if (num === 1 && filter) {
        return `There is 1 ${filter} invoice.`
    } else if (!filter) {
        return `There are ${num} total invoices.`
    } else {
        return `There are ${num} ${filter} invoices.`
    }
}