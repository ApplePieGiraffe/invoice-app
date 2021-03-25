import { Form as FormikForm } from 'formik'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Backdrop from './Backdrop'

const Wrapper = styled(motion.div)`
    position: fixed;
    top: 5rem;
    left: 0;
    z-index: 10;
    background: ${props => props.theme.color.form.bg};
    transition: background .3s;

    @media only screen and (min-width: 600px) {
        border-radius: 0 20px 20px 0;
    }

    @media only screen and (min-width: 900px) {
        top: 0;
        padding-left: 6.4375rem;
        border-radius: 0 20px 20px 0;
    }
`

const StyledForm = styled(FormikForm)`
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    height: calc(100vh - 5rem);
    width: 100vw;
    max-width: 40rem;
    padding: 2rem 1rem 0 1.5rem;

    @media only screen and (min-width: 500px) {
        padding: 2.5rem 2rem 0 2.5rem;
    }

    @media only screen and (min-width: 600px) {
        padding: 3.5rem 2rem 0 3.5rem;
    }

    @media only screen and (min-width: 900px) {
        height: 100vh;
    }
`

const animation = {
    hidden: { 
        x: '-100%',
        transition: { type: 'spring', duration: .75 }
    },
    visible: { 
        x: 0,
        transition: { type: 'spring', duration: .75 }
    }
}

export default function Form({ setIsOpen, children }) {
    return (
        <>
            <Backdrop setIsOpen={setIsOpen}/>
            <Wrapper
                variants={animation}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <StyledForm>
                    {children}
                </StyledForm>
            </Wrapper>
        </>
    )
}