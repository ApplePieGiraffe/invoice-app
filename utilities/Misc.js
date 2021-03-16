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