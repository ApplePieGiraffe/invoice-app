import styled from 'styled-components'

const Wrapper = styled.main`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 2rem 1.5rem;
    width: 100%;

    @media only screen and (min-width: 768px) {
        padding: 3.5rem 3rem;
    }

    @media only screen and (min-width: 1024px) {
        padding: 4.5rem 3rem;
    }
`

export default function Main({ children }) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}