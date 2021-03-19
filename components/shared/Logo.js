import styled from 'styled-components'

const Wrapper = styled('div')`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    border-radius: 0 20px 20px 0;
    background: #7C5DFA;

    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50%;
        background: #9277FF;
        border-radius: 20px 0 20px 0;
    }

    @media only screen and (min-width: 900px) {
        width: 6.4375rem;
        height: 6.4375rem;
    }
`

const Image = styled('img')`
    position: relative;
    z-index: 1;
    width: 31px;
    height: 29px;

    @media only screen and (min-width: 900px) {
        width: 40px;
        height: 37px;
    }
`

export default function Logo({ className }) {
    return (
        <Wrapper className={className}>
            <Image src="/images/logo.svg" alt="logo"/>
        </Wrapper>
    )
}