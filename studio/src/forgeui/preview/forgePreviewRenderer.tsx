import React from 'react'
import { useForgeTheme } from '~forgeui/theme/ForgeThemeContext'
import {
  Box,
  Text,
  Progress,
  Checkbox,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  CircularProgress,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  Select,
  Image,
} from '@chakra-ui/react'

const lv = (v: any, d: any = 0) =>
  v !== undefined && v !== null && v !== '' ? v : d


interface RenderProps {
  component: IComponent
  components: IComponents
}

export const renderForgePreview = ({
  component,
  components,
}: RenderProps): React.ReactNode[] => {

  const { palette } = useForgeTheme()
  const output: React.ReactNode[] = []

  ;(component.children || []).forEach((key: string) => {
    const child = components[key]
    if (!child) return

    const x = lv(child.props.x, 0)
    const y = lv(child.props.y, 0)
    const w = lv(child.props.w, 120)
    const h = lv(child.props.h, 40)

    const label =
      child.props.children ||
      child.props.text ||
      child.props.value ||
      child.props.placeholder

    const commonStyle = {
      position: 'absolute' as const,
      left: `${x}px`,
      top: `${y}px`,
      width: `${w}px`,
      height: `${h}px`,
    }

    switch (child.type) {
      case 'Text': {
        output.push(
          <Text
            key={child.id}
            position="absolute"
            left={`${x}px`}
            top={`${y}px`}
            color={child.props.color || palette.text}
            fontSize={`${lv(child.props.fontSize, 24)}px`}
          >
            {label || 'Text'}
          </Text>,
        )
        break
      }

      case 'Button': {
        output.push(
          <Box
            key={child.id}
            {...commonStyle}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
            background={palette.surface}
            border={`2px solid ${palette.border}`}
            color={child.props.color || palette.text}
            fontSize={`${lv(child.props.fontSize, 18)}px`}
            fontWeight="bold"
          >
            {label || 'Button'}
          </Box>,
        )
        break
      }

      case 'Box': {
        output.push(
          <Box
            key={child.id}
            {...commonStyle}
            borderRadius="12px"
            background={palette.surface}
            border={`2px solid ${palette.border}`}
          />,
        )
        break
      }

      case 'Input': {
        output.push(
          <Input
            key={child.id}
            {...commonStyle}
            value={String(label || '')}
            readOnly
            placeholder="Input"
            color={palette.text}
            borderColor={palette.border}
            background={palette.surface}
          />,
        )
        break
      }

      case 'Textarea': {
        output.push(
          <Textarea
            key={child.id}
            {...commonStyle}
            value={String(label || '')}
            readOnly
            placeholder="Textarea"
            color={palette.text}
            borderColor={palette.border}
            background={palette.surface}
          />,
        )
        break
      }

      case 'NumberInput': {
        output.push(
          <NumberInput
            key={child.id}
            {...commonStyle}
            value={String(lv(child.props.value, 0))}
          >
            <NumberInputField
              color={palette.text}
              borderColor={palette.border}
              background={palette.surface}
            />
          </NumberInput>,
        )
        break
      }

      case 'Select': {
        output.push(
          <Select
            key={child.id}
            {...commonStyle}
            value=""
            color={palette.text}
            borderColor={palette.border}
            background={palette.surface}
          >
            <option value="">Select</option>
          </Select>,
        )
        break
      }

      case 'Switch': {
        output.push(
    <Box
      key={child.id}
      {...commonStyle}
      display="flex"
      alignItems="center"
    >
      <Switch
        isChecked={Boolean(child.props.isChecked)}
        sx={{
          '.chakra-switch__track': {
            bg: Boolean(child.props.isChecked)
              ? palette.accent
              : palette.surface2,
          },
          '.chakra-switch__thumb': {
            bg: palette.text,
          },
        }}
      />
    </Box>,
  )
  break
}

      case 'Checkbox': {
  output.push(
    <Checkbox
      key={child.id}
      position="absolute"
      left={`${x}px`}
      top={`${y}px`}
      isChecked={Boolean(child.props.isChecked)}
      color={palette.text}
      sx={{
        '.chakra-checkbox__control': {
          bg: palette.surface,
          borderColor: palette.border,
        },
        '.chakra-checkbox__control[data-checked]': {
          bg: palette.accent,
          borderColor: palette.accent,
        },
      }}
    >
      {label || 'Checkbox'}
    </Checkbox>,
  )
  break
}

      case 'Radio': {
  output.push(
    <Checkbox
      key={child.id}
      position="absolute"
      left={`${x}px`}
      top={`${y}px`}
      isChecked={Boolean(child.props.isChecked)}
      color={palette.text}
      sx={{
        '.chakra-checkbox__control': {
          borderRadius: '999px',
          bg: palette.surface,
          borderColor: palette.border,
        },

        '.chakra-checkbox__control[data-checked]': {
          bg: palette.accent,
          borderColor: palette.accent,
        },
      }}
    >
      {label || 'Radio'}
    </Checkbox>,
  )
  break
}

      case 'Slider': {
  output.push(
    <Box key={child.id} {...commonStyle} display="flex" alignItems="center">
      <Slider value={lv(child.props.value, 50)}>
        <SliderTrack bg={palette.surface2}>
          <SliderFilledTrack bg={palette.accent} />
        </SliderTrack>

        <SliderThumb bg={palette.text} />
      </Slider>
    </Box>,
  )
  break
}

      case 'Progress': {
  output.push(
    <Progress
      key={child.id}
      value={lv(child.props.value, 65)}
      {...commonStyle}
      borderRadius="md"
      bg={palette.surface2}
      sx={{
        '& > div': {
          background: palette.accent,
        },
      }}
    />,
  )
  break
}

     case 'CircularProgress': {
  output.push(
    <Box
      key={child.id}
      {...commonStyle}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress
        value={lv(child.props.value, 65)}
        color={palette.accent}
        trackColor={palette.surface2}
      />
    </Box>,
  )
  break
}

      case 'Image': {
        output.push(
          <Image
            key={child.id}
            {...commonStyle}
            src={child.props.src || child.props.url || ''}
            alt={child.props.alt || 'Image'}
            objectFit="contain"
            border={`1px solid ${palette.border}`}
          />,
        )
        break
      }

      default:
        break
    }

    if (child.children?.length) {
      output.push(
        ...renderForgePreview({
          component: child,
          components,
        }),
      )
    }
  })

  return output
}