import { useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Backdrop = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7));
    backdrop-filter: blur(5px);
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
`

const Avatar = styled.img`
    width: 7.5rem;
    height: 7.5rem;
    margin-bottom: 1.25rem;
    border-radius: 50%;
`

const Heading = styled.h3`
    position: relative;
    margin-bottom: 2.5rem;
    background: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    font-weight: 300;

    ::before {
        content: '';
        position: absolute;
        bottom: -1.25rem;
        left: 50%;
        transform: translateX(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
    }
`

const Link = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: .875rem;
    text-decoration: none;

    ::before {
        content: '';
        position: absolute;
        bottom: -2.5px;
        left: 0;
        width: 0;
        height: 1px;
        background: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
        transition: width .3s;
    }

    :hover::before {
        width: 100%;
    }

    span {
        display: inline-block;
        margin-right: .25rem;
        background: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'Spartan', sans-serif;
        letter-spacing: -.5px;
    }

    img {
        width: 1.125rem;
        height: 1.125rem;
        margin-top: -4px;
    }
`

const backdropAnimation = {
    hidden: {
        opacity: 0,
        transition: { duration: .2 }
    },
    visible: {
        opacity: 1,
        transition: { duration: .2 }
    }
}

export default function Attribution({ isOpen, setIsOpen }) {
    const container = useRef()

    function handleClick(e) {
        if (e.target === container.current) {
            setIsOpen(false)
        }
    }

    return (
        <Backdrop
            ref={container}
            variants={backdropAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleClick}
            key="container"
        >
            <Wrapper>
                <Avatar src="/images/image-attribution.jpg" alt="ApplePieGiraffe profile image"/>
                <Heading>ApplePieGiraffe</Heading>
                <Link href="https://www.frontendmentor.io/solutions/invoice-app-react-nextjs-styledcomponents-formik-framer-motion-3y1EaxPtj" target="_blank">
                    <span>Visit solution page</span>
                    <img src="/images/icon-external-link.svg" alt=""/>
                </Link>
                <Link href="https://github.com/ApplePieGiraffe/invoice-app" target="_blank">
                    <span>Visit Git repo</span>
                    <img src="/images/icon-external-link.svg" alt=""/>
                </Link>
                <Link href="https://www.frontendmentor.io/profile/ApplePieGiraffe" target="_blank">
                    <span>Visit Frontend Mentor profile</span>
                    <img src="/images/icon-external-link.svg" alt=""/>
                </Link>
            </Wrapper>
        </Backdrop>
    )
}