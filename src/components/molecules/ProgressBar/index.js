import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProgressBar = styled(motion.div).attrs(({ barPercentage }) => ({
  animate: {
    width: `${barPercentage}%`
  }
}))`
  height: 6px;
  background-color: ${({ theme }) => theme.colors.widgetBg};
  `

export default ProgressBar
