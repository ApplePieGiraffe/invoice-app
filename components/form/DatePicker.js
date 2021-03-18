import { forwardRef } from 'react'
import { useFormikContext, useField } from 'formik'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'

import { fontStylesA } from '../shared/Typography'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    ${fontStylesA}

    .react-datepicker-wrapper {
        grid-column: 1 / -1;
    }
`

const Label = styled.label`
    grid-column: 1 / 2;
    margin-bottom: .625rem;
    color: ${props => props.valid ? props.theme.color.text.formLabel : '#EC5757'};
    transition: color .3s;
`

const Button = styled.button`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 3rem;
    border: 1px solid ${props => props.valid ? props.theme.color.form.fieldBorder : '#EC5757'};
    border-radius: 4px;
    padding: 1rem 1.25rem;
    background: ${props => props.theme.color.form.fieldBg};

    ${fontStylesA}
    color: ${props => props.theme.color.text.heading};
    font-weight: bold;

    outline: none;
    cursor: pointer;
    transition: color .3s, border .3s, background .3s;

    :focus {
        border: 1px solid #9277FF;
    }
`

export default function DatePicker({ label, name }) {
    const { setFieldValue } = useFormikContext()
    const [field, meta] = useField(name)

    const CustomInput = forwardRef(
        ({ value, onClick }, ref) => (
            <Button type="button" onClick={onClick} ref={ref} valid="true">
                <span>{value}</span>
                <img src="/images/icon-calendar.svg" alt=""/>
            </Button>
        ),
    )

    return (
        <Wrapper>
            <Label htmlFor={name} valid="true">{label}</Label>
            <ReactDatePicker 
                id={name} 
                {...field}
                selected={field.value}
                onChange={value => setFieldValue(name, value)}
                customInput={<CustomInput/>}
                dateFormat="MMM d, yyyy"
            />
        </Wrapper>
    )
}