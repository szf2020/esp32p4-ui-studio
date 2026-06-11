import React from 'react'
import { Box, Text, HStack } from '@chakra-ui/react'
import { FORGEUI_ACTIVE_DEVICE } from '~forgeui/ForgeUIDeviceConfig'
import { renderForgePreview } from './forgePreviewRenderer'
import { getForgePreviewPalette } from './forgeThemeMap'

interface DevicePreviewProps {
  components: IComponents
}

const DevicePreview: React.FC<DevicePreviewProps> = ({ components }) => {
  const palette = getForgePreviewPalette()
  const root = components.root

  const textureUrl =
    palette.texture && palette.texture !== 'none'
      ? `/textures/${palette.texture}.png`
      : undefined

  return (
    <Box px={3} pt={0} pb={1}>
      <HStack mb={0} justify="space-between">
        <Text fontWeight="bold">ForgeUI Browser Preview</Text>
        <Text fontSize="xs" color="gray.400">
          Browser Preview Only — final LVGL render may differ slightly.
        </Text>
      </HStack>

      <Box
        bg="#05070a"
        border="1px solid rgba(45, 212, 191, 0.5)"
        borderRadius="18px"
        p={3}
        overflow="auto"
      >
        <Box
          position="relative"
          width={`${FORGEUI_ACTIVE_DEVICE.width}px`}
          height={`${FORGEUI_ACTIVE_DEVICE.height}px`}
          minWidth={`${FORGEUI_ACTIVE_DEVICE.width}px`}
          minHeight={`${FORGEUI_ACTIVE_DEVICE.height}px`}
          bg={palette.bg}
          backgroundImage={textureUrl ? `url(${textureUrl})` : undefined}
          backgroundRepeat="repeat"
          backgroundSize="auto"
          border={`2px solid ${palette.border}`}
          borderRadius="12px"
          overflow="hidden"
        >
          {root ? renderForgePreview({ component: root, components }) : null}
        </Box>
      </Box>
    </Box>
  )
}

export default DevicePreview