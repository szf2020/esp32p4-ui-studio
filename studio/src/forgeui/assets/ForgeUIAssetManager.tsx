import React, { useCallback, useState } from 'react'
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import { useDropzone } from 'react-dropzone'

type ForgeUIAssetManagerProps = {
  onClose: () => void
}

export function ForgeUIAssetManager({ onClose }: ForgeUIAssetManagerProps) {
  const [assets, setAssets] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setAssets(prev => [...prev, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/svg+xml': ['.svg'],
    },
  })

  return (
    <Box
      position="fixed"
      inset="40px"
      bg="#10141c"
      color="white"
      border="1px solid #2dd4bf"
      borderRadius="12px"
      zIndex={9999}
      p={6}
      boxShadow="0 0 40px rgba(0,0,0,0.55)"
    >
      <HStack justify="space-between" mb={5}>
        <Text fontSize="22px" fontWeight="bold">
          Asset Manager
        </Text>

        <Button size="sm" onClick={onClose}>
          Close
        </Button>
      </HStack>

      <Box
        {...getRootProps()}
        border="2px dashed #2dd4bf"
        borderRadius="12px"
        p={8}
        textAlign="center"
        cursor="pointer"
        bg={isDragActive ? '#123033' : '#0b0f16'}
      >
        <input {...getInputProps()} />

        <Text fontSize="16px" fontWeight="semibold">
          {isDragActive
            ? 'Drop assets here...'
            : 'Drag PNG, JPG, or SVG files here'}
        </Text>

        <Text fontSize="13px" opacity={0.7} mt={2}>
          Click to browse files
        </Text>
      </Box>

      <Box mt={6}>
        <Text fontSize="18px" fontWeight="bold" mb={3}>
          Assets
        </Text>

        {assets.length === 0 ? (
          <Text opacity={0.65}>No assets uploaded yet.</Text>
        ) : (
          <VStack align="stretch" spacing={2}>
            {assets.map((file, index) => (
              <Box
                key={`${file.name}-${index}`}
                bg="#0b0f16"
                border="1px solid #263241"
                borderRadius="8px"
                px={4}
                py={2}
              >
                {file.name}
              </Box>
            ))}
          </VStack>
        )}
      </Box>
    </Box>
  )
}