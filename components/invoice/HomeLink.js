import Link from 'next/link'
import styled from 'styled-components'

import { fontStylesA } from '../shared/Typography'

const Wrapper = styled.a`
    dispay: flex;
    align-items: center;
    margin-bottom: 2rem;
    text-decoration: none;
    cursor: pointer;

    :hover span {
        color: ${props => props.theme.color.text.linkHover};
    }

    :focus-visible {
        outline: 2px dotted #7C5DFA;
    }

    img {
        margin-right: 1.5rem;
    }

    span {
        ${fontStylesA}
        color: ${props => props.theme.color.text.link};
    }
`

export default function HomeLink({ className }) {
    return (
        <Link href="/" passHref={true} scroll={false}>
            <Wrapper className={className}>
                <img src="/images/icon-arrow-left.svg" alt=""/>
                <span>Go back</span>
            </Wrapper>
        </Link>
    )
}