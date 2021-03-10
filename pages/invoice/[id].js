import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import HomeLink from '../../components/StyledLink'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
	width: 100%;
	max-width: 45.625rem;
	height: 100%;
	margin: 0 auto;

    > a {
        margin-bottom: 2rem;
    }
`

export default function Invoice() {
    const router = useRouter()
    const [id, setId] = useState(null)

    useEffect(() => {
        setId(router.query.id)
    }, [router.query])

    return (
        <>
            <Head>
                <title>Invoice | {id && `#${id}`}</title>
            </Head>
            <Wrapper>
                <HomeLink/>
            </Wrapper>
        </>
    )
}