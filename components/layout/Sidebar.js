import styled from 'styled-components'

import Avatar from '../shared/Avatar'
import Logo from '../shared/Logo'
import ThemeToggle from './ThemeToggle'

const Wrapper = styled.aside`
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    background: ${props => props.theme.color.sidebar.bg};
    transition: background .3s;

    .sidebar-logo {
        margin-right: auto;
    }

    .sidebar-toggle-btn {
        margin: 0 1.75rem;
    }

    .sidebar-avatar {
        margin: 0 2rem;
    }

    @media only screen and (min-width: 900px) {
        flex-direction: column;
        width: initial;
        height: 100vh;
        border-radius: 0 20px 20px 0;

        .sidebar-logo {
            margin-right: initial;
            margin-bottom: auto;
        }

        .sidebar-toggle-btn {
            margin: 1.75rem 0;
        }

        .sidebar-avatar {
            margin: 1.5rem 0;
        }
    }
`

const Divider = styled.div`
    width: 1px;
    align-self: stretch;
    background: #494E6E;

    @media only screen and (min-width: 900px) {
        width: 100%;
        height: 1px;
    }
`

export default function Sidebar({ toggleTheme }) {
    return (
        <Wrapper>
            <Logo className="sidebar-logo"/>
            <ThemeToggle className="sidebar-toggle-btn" toggleTheme={toggleTheme}/>
            <Divider/>
            <Avatar className="sidebar-avatar"/>
        </Wrapper>
    )
}