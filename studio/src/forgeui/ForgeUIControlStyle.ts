export const forgeuiInputStyle = {
  bg: '#020617',
  color: '#f8fafc',
  opacity: 1,

  borderColor: '#334155',

  sx: {
    color: '#f8fafc !important',
    WebkitTextFillColor: '#f8fafc !important',
    opacity: '1 !important',

    '&::placeholder': {
      color: '#94a3b8 !important',
      WebkitTextFillColor: '#94a3b8 !important',
      opacity: '1 !important',
    },

    '&:disabled, &[disabled], &[aria-disabled=true], &[readonly]': {
      color: '#cbd5e1 !important',
      WebkitTextFillColor: '#cbd5e1 !important',
      opacity: '1 !important',
    },
  },

  _hover: {
    borderColor: '#475569',
  },

  _focus: {
    borderColor: '#38bdf8',
    boxShadow: '0 0 0 1px #38bdf8',
  },

  _placeholder: {
    color: '#94a3b8',
    opacity: 1,
  },

  _disabled: {
    opacity: 1,
    color: '#cbd5e1',
  },
}