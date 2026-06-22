import React, { useState } from 'react'
import { Box, Button, Flex, HStack, Textarea } from '@chakra-ui/react'
import { aiSupportedComponents } from '~componentsList'

type ForgeAIPanelProps = {
  onClose: () => void
  insertAiLayout: (items: any[]) => void
}

const SUPPORTED_AI_COMPONENTS = new Set(aiSupportedComponents)

const AI_LAYOUTS = {
  wifiSetup: [
    {
      type: 'Heading',
      props: {
        positionMode: 'absolute',
        x: 360,
        y: 90,
        w: 320,
        h: 60,
        children: 'WiFi Setup',
      },
    },
    {
      type: 'Input',
      props: {
        positionMode: 'absolute',
        x: 360,
        y: 180,
        w: 320,
        h: 50,
      },
    },
    {
      type: 'Input',
      props: {
        positionMode: 'absolute',
        x: 360,
        y: 250,
        w: 320,
        h: 50,
      },
    },
    {
      type: 'Button',
      props: {
        positionMode: 'absolute',
        x: 360,
        y: 330,
        w: 140,
        h: 50,
        children: 'Scan',
      },
    },
    {
      type: 'Button',
      props: {
        positionMode: 'absolute',
        x: 540,
        y: 330,
        w: 140,
        h: 50,
        children: 'Connect',
      },
    },
  ],

  loginScreen: [
    {
      type: 'Heading',
      props: {
        positionMode: 'absolute',
        x: 360,
        y: 90,
        w: 320,
        h: 60,
        children: 'Login',
      },
    },
    {
      type: 'Input',
      props: {
        positionMode: 'absolute',
        x: 360,
        y: 180,
        w: 320,
        h: 50,
      },
    },
    {
      type: 'Input',
      props: {
        positionMode: 'absolute',
        x: 360,
        y: 250,
        w: 320,
        h: 50,
      },
    },
    {
      type: 'Button',
      props: {
        positionMode: 'absolute',
        x: 450,
        y: 330,
        w: 140,
        h: 50,
        children: 'Login',
      },
    },
  ],

  dashboard: [
    {
      type: 'Heading',
      props: {
        positionMode: 'absolute',
        x: 80,
        y: 70,
        w: 420,
        h: 60,
        children: 'Dashboard',
      },
    },
    {
      type: 'Box',
      props: {
        positionMode: 'absolute',
        x: 80,
        y: 160,
        w: 260,
        h: 120,
      },
    },
    {
      type: 'Box',
      props: {
        positionMode: 'absolute',
        x: 380,
        y: 160,
        w: 260,
        h: 120,
      },
    },
    {
      type: 'Button',
      props: {
        positionMode: 'absolute',
        x: 80,
        y: 330,
        w: 180,
        h: 50,
        children: 'Start',
      },
    },
    {
      type: 'Button',
      props: {
        positionMode: 'absolute',
        x: 300,
        y: 330,
        w: 180,
        h: 50,
        children: 'Settings',
      },
    },
  ],
}

const DEFAULT_LAYOUT_JSON = `{
  "layout": [
    {
      "type": "Heading",
      "props": {
        "positionMode": "absolute",
        "x": 100,
        "y": 100,
        "w": 300,
        "h": 60,
        "children": "JSON Test"
      }
    }
  ]
}`

const DEFAULT_PROMPT = 'Create a WiFi setup screen'

export const ForgeAIPanel = ({
  onClose,
  insertAiLayout,
}: ForgeAIPanelProps) => {
  const [prompt, setPrompt] = useState(DEFAULT_PROMPT)
  const [layoutJson, setLayoutJson] = useState(DEFAULT_LAYOUT_JSON)
  const [jsonError, setJsonError] = useState('')

  const loadLayoutJson = (layout: any[]) => {
    setLayoutJson(
      JSON.stringify(
        {
          layout,
        },
        null,
        2
      )
    )
  }

  const validateAiLayout = (layout: any[]) => {
  if (!Array.isArray(layout)) {
    throw new Error('layout must be an array')
  }

  layout.forEach((item, index) => {
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      throw new Error(`layout[${index}] must be an object`)
    }

    if (typeof item.type !== 'string') {
      throw new Error(`layout[${index}].type must be a string`)
    }

    if (!SUPPORTED_AI_COMPONENTS.has(item.type)) {
      throw new Error(`Unsupported component: ${item.type}`)
    }

    if (
      !item.props ||
      typeof item.props !== 'object' ||
      Array.isArray(item.props)
    ) {
      throw new Error(`layout[${index}].props must be an object`)
    }
  })
}

const generateJsonFromPrompt = () => {
  setJsonError('')

  const text = prompt.toLowerCase()

  if (text.includes('wifi') || text.includes('wi-fi')) {
    loadLayoutJson(AI_LAYOUTS.wifiSetup)
    return
  }

  if (text.includes('login') || text.includes('sign in')) {
    loadLayoutJson(AI_LAYOUTS.loginScreen)
    return
  }

  if (text.includes('dashboard') || text.includes('status')) {
    loadLayoutJson(AI_LAYOUTS.dashboard)
    return
  }

  setJsonError('No matching layout template yet')
  setLayoutJson(DEFAULT_LAYOUT_JSON)
}

const insertJsonLayout = () => {
  try {
    setJsonError('')

    const parsed = JSON.parse(layoutJson)

    validateAiLayout(parsed.layout)

    insertAiLayout(parsed.layout)
  } catch (err: any) {
    setJsonError(err.message || 'Invalid JSON')
  }
}

  return (
    <Box
      position="fixed"
      left="20px"
      top="70px"
      right="20px"
      bottom="20px"
      bg="#070b12"
      color="white"
      border="1px solid #2dd4bf"
      borderRadius="md"
      zIndex={9999}
      overflow="auto"
      boxShadow="0 0 24px rgba(0,0,0,0.65)"
      p={4}
    >
      <Flex justify="space-between" align="center" mb={4}>
        <Box fontWeight="bold" fontSize="lg">
          ForgeUI AI Playground
        </Box>

        <Button size="xs" colorScheme="red" onClick={onClose}>
          Close
        </Button>
      </Flex>

      <Box color="gray.400" mb={4}>
        AI layout generation playground.
      </Box>

      <Box mb={2} color="cyan.200" fontWeight="bold">
        Prompt
      </Box>

      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        minH="80px"
        mb={4}
        bg="#101827"
        color="white"
        borderColor="gray.600"
        fontFamily="monospace"
        fontSize="sm"
      />

      <HStack spacing={3} mb={4}>
        <Button colorScheme="cyan" onClick={generateJsonFromPrompt}>
          Generate JSON
        </Button>

        <Button colorScheme="purple" onClick={insertJsonLayout}>
          Insert JSON
        </Button>

        <Button
            variant="outline"
            colorScheme="cyan"
             onClick={() => {
            try {
             setJsonError('')
             validateAiLayout(AI_LAYOUTS.wifiSetup)
            insertAiLayout(AI_LAYOUTS.wifiSetup)
    } catch (err: any) {
      setJsonError(err.message || 'Invalid AI layout')
    }
  }}
>
  Insert WiFi Setup Layout
</Button>
      </HStack>

      <Box mb={2} color="cyan.200" fontWeight="bold">
        Layout JSON
      </Box>

      <Textarea
        value={layoutJson}
        onChange={(e) => setLayoutJson(e.target.value)}
        minH="300px"
        bg="#101827"
        color="white"
        borderColor="gray.600"
        fontFamily="monospace"
        fontSize="sm"
      />

      {jsonError && (
        <Box mt={3} color="red.300" fontFamily="monospace">
          {jsonError}
        </Box>
      )}
    </Box>
  )
}

export default ForgeAIPanel