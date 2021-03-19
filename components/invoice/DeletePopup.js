import styled from 'styled-components'
import ScrollLock from 'react-scrolllock'
import { motion, AnimatePresence } from 'framer-motion'

import Button from '../shared/Buttons'
import { Heading2 } from '../shared/Headings'
import { fontStylesA } from '../shared/Typography'

const Backdrop = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));
`

const Popup = styled(motion.div)`
    width: 100%;
    max-width: 24rem;
    margin: 0 1.5rem;
    border-radius: 8px;
    padding: 2rem;
    background: ${props => props.theme.color.popup.bg};
    transition: background .3s;

    @media only screen and (min-width: 768px) {
        max-width: 30rem;
        padding: 3rem;
    }
`

const Heading = styled(Heading2)`
    margin-bottom: 1rem;

    @media only screen and (min-width: 768px) {
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
    }
`

const Message = styled.p`
    margin-bottom: 1.5rem;
    ${fontStylesA}
    line-height: 1.375rem;

    @media only screen and (min-width: 768px) {
        margin-bottom: 1rem;
    }
`

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: .5rem;
`

const backdropAnimation = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { duration: .15 }
    },
    exit: { 
        opacity: 0,
        transition: { duration: .15 }
    }
}

const popupAnimation = {
    hidden: { scale: 0 },
    visible: { 
        scale: 1,
        transition: { type: 'spring', duration: .35 }
    },
    exit: { 
        scale: 0,
        transition: { duration: .15 }
    }
}

export default function DeletePopup({ id, popupIsOpen, setPopupIsOpen, handleDelete }) {
    return (
        <AnimatePresence>
            {popupIsOpen && 
                <ScrollLock>
                    <Backdrop
                        variants={backdropAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Popup variants={popupAnimation}>
                            <Heading>Confirm Deletion</Heading>
                            <Message>Are you sure you want to delete invoice {id}? This action cannot be undone.</Message>
                            <Buttons>
                                <Button secondary onClick={() => setPopupIsOpen(false)}>Cancel</Button>
                                <Button alert onClick={() => handleDelete(id, setPopupIsOpen)}>Delete</Button>
                            </Buttons>
                        </Popup>
                    </Backdrop>
                </ScrollLock>
            }
        </AnimatePresence>
    )
}