import styled from 'styled-components'

import Main from '../layout/Main'

const HomeMain = styled(Main)`
    padding: 2rem 1.5rem;

    @media only screen and (min-width: 768px) {
        padding: 3.5rem 3rem;
    }

    @media only screen and (min-width: 1024px) {
        padding: 4.5rem 3rem;
    }
`

export default HomeMain