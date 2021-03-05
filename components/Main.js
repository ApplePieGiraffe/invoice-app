import styled from 'styled-components'

const Wrapper = styled.main`
    padding: 2rem 1.5rem;
    width: 100%;

    @media only screen and (min-width: 768px) {
        padding: 3.5rem 3rem;
    }

    @media only screen and (min-width: 1024px) {
        padding: 4.5rem 3rem;
    }
`

const Content = styled.div`
    width: 100%;
    max-width: 45.625rem;
    margin: 0 auto;
`

export default function Main({ children }) {
    return (
        <Wrapper>
            <Content>
                {children}
            </Content>
        </Wrapper>
    )
}