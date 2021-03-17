import styled from 'styled-components'
import ScrollLock from 'react-scrolllock'

const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));
`

export default function Backdrop({ children }) {
    return (
        <ScrollLock>
            <StyledBackdrop>{children}</StyledBackdrop>
        </ScrollLock>
    )
}