import { useFormikContext, useField } from 'formik'
import styled from 'styled-components'

import { TextA } from '../shared/Typography'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-row-gap: .625rem;
    ${TextA}
`

const Label = styled.label`
    grid-column: 1 / 2;
    color: ${props => props.valid ? props.theme.color.text.formLabel : '#EC5757'};
    transition: color .3s;
`

const ErrorMessage = styled.div`
    grid-column: 2 / -1;
    color: #EC5757;
    font-size: .625rem;
    text-align: end;
`

const Field = styled.input`
    grid-column: 1 / -1;
    width: 100%;
    border: 1px solid ${props => props.valid ? props.theme.color.form.fieldBorder : '#EC5757'};
    border-radius: 4px;
    padding: 1rem 1.25rem;
    background: ${props => props.theme.color.form.fieldBg};
    outline: none;
    ${TextA}
    color: ${props => props.theme.color.text.heading};
    font-weight: bold;
    transition: color .3s, border .3s, background .3s;

    :focus {
        border: 1px solid #9277FF;
    }
`

export default function Input({ label, name }) {
    const { submitCount } = useFormikContext()
    const [field, meta] = useField(name)

    return (
        <Wrapper>
            <Label htmlFor={name} valid={!(meta.touched && meta.error)}>{label}</Label>
            <ErrorMessage>{submitCount > 0 && meta.error}</ErrorMessage>
            <Field id={name} {...field} valid={!(meta.touched && meta.error)}/>
        </Wrapper>
    )
}