import Store from 'store'

export function addInvoice(invoice, invoices, setInvoices) {
	const newInvoices = [invoice, ...invoices]
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

export function updateInvoice(newInvoice, invoices, setInvoices) {
	const newInvoices = invoices.map((invoice) => {
		if (newInvoice.id === invoice.id) {
			return newInvoice
		}
		return invoice
	})
	setInvoices(newInvoices)
	Store.set('invoices', newInvoices)
}

export function markAsPaid(id, invoices, setInvoices) {
	const newInvoices = invoices.map((invoice) => {
		if (id === invoice.id) {
			return { ...invoice, status: 'paid' }
		}
		return invoice
	})
	setInvoices(newInvoices)
	Store.set('invoices', newInvoices)
}