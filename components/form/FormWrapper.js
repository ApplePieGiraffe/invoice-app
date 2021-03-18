import styled from 'styled-components'

import Backdrop from './Backdrop'

const Wrapper = styled.div`
    position: absolute;
    top: 5rem;
    left: 0;
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

export default function FormWrapper({ children }) {
    return (
        <Backdrop>
            <Wrapper>
                <StyledForm>
                    {children}
                </StyledForm>
            </Wrapper>
        </Backdrop>
    )
}