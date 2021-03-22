import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
	width: 100%;
	max-width: 45.625rem;
	height: 100%;
	margin: 0 auto;
    padding: 2rem 1.5rem 3.5rem 1.5rem;

    .invoice-page-header {
        margin-bottom: 1rem;
    }

    @media only screen and (min-width: 768px) {
        padding: 3.5rem 3rem;

        .invoice-page-header {
            margin-bottom: 1.5rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        padding: 4.5rem 3rem;
    }
`

const animation = {
    hidden: { 
        opacity: 0, 
        // x: '250px' 
    },
    visible: { 
        opacity: 1,
        // x: 0,
        transition: { type: 'tween', ease: 'easeOut', duration: .5 }
    },
    exit: {
        opacity: 0,
        x: '50%',
        transition: { type: 'tween', ease: 'easeIn', duration: .5, staggerChildren: 0 }
    }
}

export default function Wrapper({ children }) {
    return (
        <StyledWrapper
            variants={animation}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {children}
        </StyledWrapper>
    )
}