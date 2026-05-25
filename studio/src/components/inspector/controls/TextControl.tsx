import { forgeuiInputStyle } from '~forgeui/ForgeUIControlStyle'
import React, { ReactNode } from 'react'
import { Input } from '@chakra-ui/react'
import FormControl from './FormControl'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'

type TextControlPropsType = {
  name: string
  label: string | ReactNode
  autoFocus?: boolean
  hasColumn?: boolean
  placeholder?: string
}

const TextControl: React.FC<TextControlPropsType> = ({
  name,
  label,
  autoFocus = false,
  hasColumn = false,
  placeholder = '',
}) => {
  const { setValueFromEvent } = useForm()
  const value = usePropsSelector(name)

  return (
    <FormControl hasColumn={hasColumn} htmlFor={name} label={label}>
      <Input
        {...forgeuiInputStyle}
        sx={{
          color: '#e5e7eb !important',
          WebkitTextFillColor: '#e5e7eb !important',
          opacity: '1 !important',

          input: {
            color: '#e5e7eb !important',
            WebkitTextFillColor: '#e5e7eb !important',
          },

          '&::placeholder': {
            color: '#64748b !important',
            WebkitTextFillColor: '#64748b !important',
          },

          '&:disabled': {
            opacity: '1 !important',
            color: '#94a3b8 !important',
            WebkitTextFillColor: '#94a3b8 !important',
          },
        }}
        borderRadius="md"
        autoComplete="off"
        id={name}
        name={name}
        autoFocus={autoFocus}
        size="sm"
        value={value || ''}
        type="text"
        width={hasColumn ? '3rem' : '100%'}
        placeholder={placeholder}
        onChange={setValueFromEvent}
      />
    </FormControl>
  )
}

export default TextControl