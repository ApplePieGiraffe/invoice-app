import Store from 'store'

export const emptyInvoice = {
	id: '',
	createdAt: '',
	paymentDue: '',
	description: '',
	paymentTerms: null,
	clientName: '',
	clientEmail: '',
	status: '',
	senderAddress: {
		street: '',
		city: '',
		postCode: '',
		country: ''
	},
	clientAddress: {
		street: '',
		city: '',
		postCode: '',
		country: ''
	},
	items: [],
	total: null
}

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

export function updateInvoice(invoice, invoices, setInvoices) {
	const newInvoices = null
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