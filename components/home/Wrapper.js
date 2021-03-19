import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledWrapper = styled(motion.div)`
	width: 100%;
	max-width: 45.625rem;
	height: 100%;
	margin: 0 auto;
`

export default function Wrapper({ children }) {
	return (
		<StyledWrapper
			exit={{ 
				x: '-50%',
				opacity: 0,
				transition: { type: "tween", ease: "easeIn", duration: .5 }
			}}
		>
			{children}
		</StyledWrapper>
	)
}