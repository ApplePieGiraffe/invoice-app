import Link from 'next/link'
import styled from 'styled-components'

// import Wrapper from './Wrapper'
import { TextA } from '../shared/Typography'

const Wrapper = styled.a`
    dispay: flex;
    align-items: center;
    margin-bottom: 2rem;
    cursor: pointer;

    :hover span {
        color: ${props => props.theme.color.text.linkHover};
    }

    img {
        margin-right: 1.5rem;
    }

    span {
        ${TextA}
        color: ${props => props.theme.color.text.link};
    }
`

export default function HomeLink({ className }) {
    return (
        <Link href="/">
            <Wrapper className={className}>
                <img src="/images/icon-arrow-left.svg" alt=""/>
                <span>Go back</span>
            </Wrapper>
        </Link>
    )
}