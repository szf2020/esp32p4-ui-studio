import React, { ReactNode, memo } from 'react'
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  AccordionItemProps,
} from '@chakra-ui/react'

const AccordionContainer: React.FC<{
  title: ReactNode
  defaultIsOpen?: boolean
  children: ReactNode
} & AccordionItemProps> = ({ title, children, defaultIsOpen = true }) => {
  return (
    <AccordionItem borderColor="#1e293b">
      <AccordionButton
        zIndex={2}
        px={3}
        py={2}
        fontSize="sm"
        bg="#0f172a"
        color="#e5e7eb"
        _hover={{ bg: '#172033' }}
        _expanded={{ bg: '#111827', color: 'cyan.300' }}
      >
        <Box flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel
        bg="#111827"
        color="#cbd5e1"
        px={3}
        pb={4}
        borderTop="1px solid"
        borderColor="#1e293b"
      >
        {children}
      </AccordionPanel>
    </AccordionItem>
  )
}

export default memo(AccordionContainer)