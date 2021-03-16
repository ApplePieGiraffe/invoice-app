import styled from 'styled-components'

const Wrapper = styled.main`
    flex: 1;
    display: flex;
    width: 100%;
`

export default function Main({ className, children }) {
    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    )
}