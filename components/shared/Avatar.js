import styled from 'styled-components'

const Image = styled.img`
    width: 2rem;
    border-radius: 50%;
    cursor: pointer;
`

export default function Avatar({ className }) {
    return <Image className={className} src="/images/image-avatar.jpg" alt="avatar"/>
}