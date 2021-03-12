import styled from 'styled-components'

const StyledBackdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1));

    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Backdrop() {
    return <StyledBackdrop className=".backdrop"/>
}