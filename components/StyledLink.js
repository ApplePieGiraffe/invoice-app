import Link from 'next/link'
import styled from 'styled-components'
import { TextA } from './Typography'

const Wrapper = styled.a`
    dispay: flex;
    align-items: center;
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

export default function HomeLink() {
    return (
        <Link href="/">
            <Wrapper>
                <img src="/images/icon-arrow-left.svg" alt=""/>
                <span>Go back</span>
            </Wrapper>
        </Link>
    )
}