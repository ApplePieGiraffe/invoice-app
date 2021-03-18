import { useField } from 'formik'
import styled, { css } from 'styled-components'

import { fontStylesA } from '../shared/Typography'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .625rem;
    ${fontStylesA}

    :focus-within label {
        color: ${props => props.theme.color.text.formLabel};
    }

    ${props => props.hideLabels && css`
        @media only screen and (min-width: 600px) {
            & > *:nth-child(1) {
                clip: rect(0 0 0 0);
                clip-path: inset(50%);
                height: 1px;
                overflow: hidden;
                position: absolute;
                white-space: nowrap;
                width: 1px;
            }
        } 
    `}
`

const Label = styled.label`
    color: ${props => props.valid ? props.theme.color.text.formLabel : '#EC5757'};
    transition: color .3s;
`

const Field = styled.input`
    width: 100%;
    border: 1px solid ${props => props.valid ? props.theme.color.form.fieldBorder : '#EC5757'};
    border-radius: 4px;
    padding: 1rem 1.25rem;
    background: ${props => props.theme.color.form.fieldBg};
    outline: none;
    ${fontStylesA}
    color: ${props => props.theme.color.text.heading};
    font-weight: bold;
    transition: color .3s, border .3s, background .3s;

    ::placeholder {
        color: ${props => props.theme.color.text.placeholder};
        transition: color .3s;
    }

    :focus {
        border: 1px solid #9277FF;
    }

    ${props => props.faded && css`
        border: none;
        padding: 1rem 0;
        background: transparent;
        color: #888EB0;

        :focus {
            border: none;
        }
    `}
`

export default function Input({ label, name, hideLabels, ...rest }) {
    const [field, meta] = useField(name)
    
    return (
        <Wrapper hideLabels={hideLabels}>
            <Label htmlFor={name} valid={!(meta.touched && meta.error)}>{label}</Label>
            <Field id={name} {...field} valid={!(meta.touched && meta.error)} {...rest}/>
        </Wrapper>
    )
}