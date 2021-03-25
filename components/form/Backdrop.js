import styled from 'styled-components'
import ScrollLock from 'react-scrolllock'
import { motion } from 'framer-motion'

const StyledBackdrop = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 5;
    background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));
`

const animation = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { duration: .3 }
    }
}

export default function Backdrop({ setIsOpen, children }) {
    return (
        <ScrollLock>
            <StyledBackdrop
                variants={animation}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => setIsOpen(false)}
            >
                {children}
            </StyledBackdrop>
        </ScrollLock>
    )
}