import { useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import Attribution from './Attribution'

const Button = styled.button`
    border: none;
    background: none;
    outline: none;

    :focus-visible {
        outline: 2px dotted #7E88C3;
    }
`

const Image = styled.img`
    width: 2rem;
    border-radius: 50%;
    cursor: pointer;
`

export default function Avatar({ className }) {
    const [attributionIsOpen, setAttributionIsOpen] = useState(false)

    return (
        <>
            <AnimatePresence>
                {attributionIsOpen && 
                    <Attribution
                        isOpen={attributionIsOpen}
                        setIsOpen={setAttributionIsOpen}
                    />
                }
            </AnimatePresence>
            <Button className={className} onClick={() => setAttributionIsOpen(true)}>
                <Image src="/images/image-avatar.jpg" alt="avatar"/>
            </Button>
        </>
    )
}