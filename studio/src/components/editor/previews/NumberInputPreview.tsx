import { forgeuiInputStyle } from '~forgeui/ForgeUIControlStyle'
import React, { useState } from 'react'
import * as Chakra from '@chakra-ui/react'

interface IProps {
  component: IComponent
}

const NumberInputPreview = ({ component }: IProps) => {
  const [value, setValue] = useState(50)

  return (
    <Chakra.Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap="10px"
      padding="10px"
    >
      <Chakra.Text color="white" fontSize="sm">
        Number Input {value}
      </Chakra.Text>

      <Chakra.NumberInput
       value={value}
       min={0}
       max={100}
       onChange={(_, v) => setValue(v || 0)}
      {...forgeuiInputStyle}
      >
        <Chakra.NumberInputField {...forgeuiInputStyle} />

        <Chakra.NumberInputStepper>
          <Chakra.NumberIncrementStepper />
          <Chakra.NumberDecrementStepper />
        </Chakra.NumberInputStepper>
      </Chakra.NumberInput>
    </Chakra.Box>
  )
}

export default NumberInputPreview