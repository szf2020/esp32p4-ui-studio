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

  settingsScreen: [
    {
      type: 'Heading',
      props: {
        positionMode: 'absolute',
        x: 90,
        y: 70,
        w: 420,
        h: 60,
        children: 'Settings',
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 110,
        y: 165,
        w: 220,
        h: 40,
        children: 'WiFi',
      },
    },
    {
      type: 'Switch',
      props: {
        positionMode: 'absolute',
        x: 360,
        y: 160,
        w: 90,
        h: 50,
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 110,
        y: 235,
        w: 220,
        h: 40,
        children: 'Bluetooth',
      },
    },
    {
      type: 'Switch',
      props: {
        positionMode: 'absolute',
        x: 360,
        y: 230,
        w: 90,
        h: 50,
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 110,
        y: 305,
        w: 220,
        h: 40,
        children: 'Sound',
      },
    },
    {
      type: 'Switch',
      props: {
        positionMode: 'absolute',
        x: 360,
        y: 300,
        w: 90,
        h: 50,
      },
    },
    {
      type: 'Button',
      props: {
        positionMode: 'absolute',
        x: 110,
        y: 390,
        w: 160,
        h: 55,
        children: 'Save',
      },
    },
  ],

  sensorDashboard: [
    {
      type: 'Heading',
      props: {
        positionMode: 'absolute',
        x: 70,
        y: 60,
        w: 460,
        h: 60,
        children: 'Sensor Dashboard',
      },
    },
    {
      type: 'Box',
      props: {
        positionMode: 'absolute',
        x: 70,
        y: 155,
        w: 260,
        h: 120,
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 95,
        y: 175,
        w: 180,
        h: 35,
        children: 'Temperature',
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 95,
        y: 220,
        w: 180,
        h: 40,
        children: '24.8 C',
      },
    },
    {
      type: 'Box',
      props: {
        positionMode: 'absolute',
        x: 370,
        y: 155,
        w: 260,
        h: 120,
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 395,
        y: 175,
        w: 180,
        h: 35,
        children: 'Humidity',
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 395,
        y: 220,
        w: 180,
        h: 40,
        children: '61%',
      },
    },
    {
      type: 'Box',
      props: {
        positionMode: 'absolute',
        x: 670,
        y: 155,
        w: 260,
        h: 120,
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 695,
        y: 175,
        w: 180,
        h: 35,
        children: 'Pressure',
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 695,
        y: 220,
        w: 180,
        h: 40,
        children: '101.2 kPa',
      },
    },
  ],

  machineStatusPanel: [
    {
      type: 'Heading',
      props: {
        positionMode: 'absolute',
        x: 80,
        y: 60,
        w: 460,
        h: 60,
        children: 'Machine Status',
      },
    },
    {
      type: 'Led',
      props: {
        positionMode: 'absolute',
        x: 100,
        y: 165,
        w: 40,
        h: 40,
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 165,
        y: 165,
        w: 320,
        h: 40,
        children: 'Motor: Running',
      },
    },
    {
      type: 'Led',
      props: {
        positionMode: 'absolute',
        x: 100,
        y: 235,
        w: 40,
        h: 40,
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 165,
        y: 235,
        w: 320,
        h: 40,
        children: 'Battery: Normal',
      },
    },
    {
      type: 'Led',
      props: {
        positionMode: 'absolute',
        x: 100,
        y: 305,
        w: 40,
        h: 40,
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 165,
        y: 305,
        w: 320,
        h: 40,
        children: 'Network: Connected',
      },
    },
  ],

  diagnosticsScreen: [
    {
      type: 'Heading',
      props: {
        positionMode: 'absolute',
        x: 80,
        y: 60,
        w: 460,
        h: 60,
        children: 'Diagnostics',
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 100,
        y: 155,
        w: 180,
        h: 35,
        children: 'CPU',
      },
    },
    {
      type: 'Bar',
      props: {
        positionMode: 'absolute',
        x: 260,
        y: 155,
        w: 420,
        h: 35,
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 100,
        y: 225,
        w: 180,
        h: 35,
        children: 'Memory',
      },
    },
    {
      type: 'Bar',
      props: {
        positionMode: 'absolute',
        x: 260,
        y: 225,
        w: 420,
        h: 35,
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 100,
        y: 295,
        w: 180,
        h: 35,
        children: 'WiFi',
      },
    },
    {
      type: 'Bar',
      props: {
        positionMode: 'absolute',
        x: 260,
        y: 295,
        w: 420,
        h: 35,
      },
    },
  ],

  touchKeypadScreen: [
    {
      type: 'Heading',
      props: {
        positionMode: 'absolute',
        x: 360,
        y: 45,
        w: 320,
        h: 60,
        children: 'Enter PIN',
      },
    },
    {
      type: 'Input',
      props: {
        positionMode: 'absolute',
        x: 360,
        y: 120,
        w: 300,
        h: 50,
      },
    },
    ...['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((label, index) => ({
      type: 'Button',
      props: {
        positionMode: 'absolute',
        x: 360 + (index % 3) * 105,
        y: 195 + Math.floor(index / 3) * 70,
        w: 85,
        h: 55,
        children: label,
      },
    })),
    {
      type: 'Button',
      props: {
        positionMode: 'absolute',
        x: 360,
        y: 405,
        w: 85,
        h: 55,
        children: 'Cancel',
      },
    },
    {
      type: 'Button',
      props: {
        positionMode: 'absolute',
        x: 465,
        y: 405,
        w: 85,
        h: 55,
        children: '0',
      },
    },
    {
      type: 'Button',
      props: {
        positionMode: 'absolute',
        x: 570,
        y: 405,
        w: 85,
        h: 55,
        children: 'Enter',
      },
    },
  ],

  wifiDrawerMockup: [
    {
      type: 'Box',
      props: {
        positionMode: 'absolute',
        x: 640,
        y: 0,
        w: 360,
        h: 600,
      },
    },
    {
      type: 'Heading',
      props: {
        positionMode: 'absolute',
        x: 670,
        y: 45,
        w: 280,
        h: 60,
        children: 'WiFi Networks',
      },
    },
    {
      type: 'Button',
      props: {
        positionMode: 'absolute',
        x: 670,
        y: 125,
        w: 280,
        h: 45,
        children: 'Scan Networks',
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 675,
        y: 195,
        w: 250,
        h: 35,
        children: 'Workshop_AP',
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 675,
        y: 240,
        w: 250,
        h: 35,
        children: 'Factory_WiFi',
      },
    },
    {
      type: 'Text',
      props: {
        positionMode: 'absolute',
        x: 675,
        y: 285,
        w: 250,
        h: 35,
        children: 'Service_Hotspot',
      },
    },
    {
      type: 'Input',
      props: {
        positionMode: 'absolute',
        x: 670,
        y: 350,
        w: 280,
        h: 50,
      },
    },
    {
      type: 'Button',
      props: {
        positionMode: 'absolute',
        x: 670,
        y: 425,
        w: 130,
        h: 50,
        children: 'Connect',
      },
    },
    {
      type: 'Button',
      props: {
        positionMode: 'absolute',
        x: 820,
        y: 425,
        w: 130,
        h: 50,
        children: 'Close',
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

    if (
      text.includes('wifi drawer') ||
      text.includes('wi-fi drawer') ||
      text.includes('wifi panel') ||
      text.includes('network drawer')
    ) {
      loadLayoutJson(AI_LAYOUTS.wifiDrawerMockup)
      return
    }

    if (text.includes('wifi') || text.includes('wi-fi')) {
      loadLayoutJson(AI_LAYOUTS.wifiSetup)
      return
    }

    if (text.includes('login') || text.includes('sign in')) {
      loadLayoutJson(AI_LAYOUTS.loginScreen)
      return
    }

    if (text.includes('settings') || text.includes('setup menu')) {
      loadLayoutJson(AI_LAYOUTS.settingsScreen)
      return
    }

    if (
      text.includes('sensor') ||
      text.includes('temperature') ||
      text.includes('humidity') ||
      text.includes('pressure')
    ) {
      loadLayoutJson(AI_LAYOUTS.sensorDashboard)
      return
    }

    if (
      text.includes('machine') ||
      text.includes('motor') ||
      text.includes('battery')
    ) {
      loadLayoutJson(AI_LAYOUTS.machineStatusPanel)
      return
    }

    if (
      text.includes('diagnostics') ||
      text.includes('diagnostic') ||
      text.includes('cpu') ||
      text.includes('memory')
    ) {
      loadLayoutJson(AI_LAYOUTS.diagnosticsScreen)
      return
    }

    if (
      text.includes('keypad') ||
      text.includes('pin') ||
      text.includes('touch keypad')
    ) {
      loadLayoutJson(AI_LAYOUTS.touchKeypadScreen)
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

      <HStack spacing={3} mb={4} flexWrap="wrap">
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