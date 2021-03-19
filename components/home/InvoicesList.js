import styled from 'styled-components'
import InvoiceItem from './InvoiceItem'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
`

const animation = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: .15
        }
    }
}

export default function InvoicesList({ invoices }) {
    return (
        <>
            {invoices && 
                <Wrapper
                    variants={animation}
                    initial="hidden"
                    animate="visible"
                >
                    {invoices.map((invoice) => {
                        return (
                            <InvoiceItem
                                key={invoice.id}
                                id={invoice.id}
                                paymentDue={invoice.paymentDue}
                                clientName={invoice.clientName}
                                total={invoice.total}
                                status={invoice.status}
                            />
                        )
                    })}
                </Wrapper>
            }
        </>
    )
}