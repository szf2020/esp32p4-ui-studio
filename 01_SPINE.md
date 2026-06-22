# SPINE

## Current Save Point

```text
FORGEUI_AI_PLAYGROUND_V1__LAYOUT_DOCUMENT_MODEL_PROVEN__METADATA_READY__2026-06-22
```

---

# Project Status

```text
ACTIVE

STABLE

PHYSICAL HARDWARE PROVEN
```

ForgeUI Studio is an open-source visual LVGL v9 HMI designer, code generator, asset pipeline, theme system, and ESP-IDF workflow targeting ESP32-P4 hardware.

Core pipeline proven:

```text
Builder
    ↓
Browser Preview
    ↓
LVGL Export
    ↓
Generated C
    ↓
ESP-IDF Build
    ↓
Physical ESP32-P4
```

---

# Current Architecture Truth



---

## Asset Pipeline

```text
Uploaded Asset
    ↓
Asset Manager
    ↓
LVGLImage.py
    ↓
Generated LVGL C Asset
    ↓
Asset Registry
    ↓
Generated Export
    ↓
ESP-IDF Build
    ↓
Physical ESP32-P4
```

Status:

```text
PROVEN
```

---

## Theme Pipeline

Single source of truth:

```text
FG_PREVIEW_PALETTES
    ↓
Theme Manager
    ↓
ForgeThemeContext
    ↓
Builder
    ↓
Browser Preview
    ↓
LVGL Export
    ↓
ESP32-P4
```

Status:

```text
PROVEN

NO DRIFT
```

Rule:

```text
FG_PREVIEW_PALETTES remains the only source of truth.

Do not create duplicate theme maps.

Do not create duplicate theme selectors.
```

---

## Runtime Systems

### RTC Runtime

```text
20_RTC
    ↓
Clock Widget
```

Status:

```text
PROVEN ON PHYSICAL ESP32-P4
```

Ownership:

```text
RTC runtime owns time truth.

Clock widget owns display only.

LVGL timer owns refresh.
```

---

### WiFi Runtime

```text
30_WIFI
    ↓
WiFi Widget
```

Status:

```text
PROVEN ON PHYSICAL ESP32-P4
```

Ownership:

```text
30_WIFI owns WiFi truth.

WiFi widget owns display only.

LVGL timer owns refresh.

UI owns neither.
```

---

## Runtime Architecture Rule

```text
Runtime owns truth.

Widget owns display.

LVGL timer owns refresh.

UI owns neither.
```

---

# Current Proven Widget Status

## Runtime Widgets

```text
Clock
    ✓ Proven

WiFi
    ✓ Proven
```

---

## Core Widgets

```text
Button
Text
Heading
Input
Textarea
Switch
Checkbox
Radio
Slider
Progress
CircularProgress
NumberInput
Select
Image
Box
```

Status:

```text
Builder
    ✓

Preview
    ✓

Export
    ✓

ESP32-P4
    ✓
```

---

## LVGL Widgets

```text
Led
Bar
Arc
Chart
Table
Calendar
Scale
Roller
Msgbox
ButtonMatrix
Canvas
Line
Tabview
Tileview
Keyboard
AnimImage
```

Status:

```text
Builder
    ✓

Preview
    ✓

Export
    ✓

ESP32-P4
    ✓
```

---



```
# AI Playground V1

## Current Save Point

```text
FORGEUI_AI_PLAYGROUND_V1__LAYOUT_DOCUMENT_MODEL_PROVEN__METADATA_READY__2026-06-22
```

---

## Status

```text
PROVEN IN STUDIO

SCHEMA VALIDATION PROVEN

REGISTRY BOUND

DOCUMENT MODEL PROVEN
```

---

## Current Architecture

```text
Template Library
    ↓
loadLayoutJson()
    ↓
Layout Document
    ↓
JSON Editor
    ↓
Insert JSON
    ↓
JSON.parse()
    ↓
validateAiLayout()
    ↓
aiSupportedComponents
    ↓
insertAiLayout()
    ↓
ForgeUI Component Store
    ↓
Canvas Render
```

Status:

```text
PROVEN
```

---

## Layout Document Model

Supported document format:

```json
{
  "name": "Dashboard",
  "category": "Templates",
  "description": "Basic dashboard layout",
  "layout": [...]
}
```

Rules:

```text
name
category
description

are optional metadata.
```

```text
layout

is required.
```

---

## What Was Proven

```text
Editor Menu
    ✓

AI Playground Panel
    ✓

Custom Event System
    ✓

Canvas Insertion
    ✓

Single Component Insert
    ✓

Multi Component Insert
    ✓

Layout Definition Array
    ✓

JSON Layout Definition
    ✓

JSON.parse()
    ✓

User Editable JSON
    ✓

JSON Error Handling
    ✓

Layout Library
    ✓

Template Library
    ✓

Layout Document Model
    ✓

Metadata Support
    ✓

ForgeUI Store Integration
    ✓

Canvas Render
    ✓

ForgeUI Schema Validation
    ✓

Layout Array Validation
    ✓

Props Object Validation
    ✓

Unsupported Component Rejection
    ✓

Registry-backed AI Component Validation
    ✓
```

---

## Schema Validation

Validation owns:

```text
layout[]
type
props
```

Validation does not own:

```text
name
category
description
```

These are document metadata only.

---

## Schema Validation Proof

```text
Valid ForgeUI JSON
    ↓
Accepted
    ↓
Canvas Insert
    ✓

Unsupported Component
    ↓
Rejected
    ↓
Error Shown
    ↓
Nothing Inserted
    ✓
```

Proof:

```text
SuperWidget
    ↓
Unsupported component: SuperWidget
    ✓
```

---

## Registry Binding

AI validation uses:

```text
~componentsList
    ↓
componentsList
    ↓
aiSupportedComponents
    ↓
SUPPORTED_AI_COMPONENTS
    ↓
validateAiLayout()
```

Status:

```text
PROVEN
```

Rule:

```text
Do not create a second AI component registry.

AI validation must remain bound to the ForgeUI registry path.
```

---

## Template Library

Templates proven:

```text
WiFi Setup
    ✓

Login
    ✓

Dashboard
    ✓

Settings
    ✓

Sensor Dashboard
    ✓

Machine Status Panel
    ✓

Diagnostics Screen
    ✓

Touch Keypad Screen
    ✓

WiFi Drawer Mockup
    ✓
```

Proven flow:

```text
Load Template
    ↓
Layout Document
    ↓
JSON Editor
    ↓
JSON.parse()
    ↓
validateAiLayout()
    ↓
insertAiLayout()
    ↓
Canvas
```

---

## AI Architecture Rule

```text
AI suggests.

ForgeUI validates.

Builder owns layout.

Preview owns preview.

Export owns LVGL generation.

Runtime owns truth.

AI does not write firmware.

AI does not generate React.

AI does not generate LVGL.

AI generates ForgeUI layout definitions only.
```

---

## Current Next Mission

```text
FORGEUI_AI_PLAYGROUND_V1__DOCUMENT_LIBRARY_COMPLETE__OPENAI_DOCUMENT_GENERATION_NEXT__2026-06-22
```

Goal:

```text
Finish converting all templates to document format.

Prepare OpenAI to generate ForgeUI layout documents.

Keep validation before insertion.

Keep registry binding.

Do not touch firmware.

Do not touch export.

Do not touch runtime.

Do not change insertAiLayout().
```

---

## Future AI Roadmap

```text
V1 AI Menu
    ✓ Complete

V2 AI Panel
    ✓ Complete

V3 Canvas Insertion
    ✓ Complete

V4 Multi Component Layout
    ✓ Complete

V5 Layout Definition Array
    ✓ Complete

V6 JSON Layout Definition
    ✓ Complete

V7 JSON Parse
    ✓ Complete

V8 JSON Textarea + Error Handling
    ✓ Complete

V9 Layout Library
    ✓ Complete

V10 Schema Validation
    ✓ Complete

V11 Registry Binding
    ✓ Complete

V12 Template Library Expansion
    ✓ Complete

V13 Layout Document Model
    ✓ Complete

V14 OpenAI Integration
    NEXT

V15 Asset Generation

V16 ForgeUI Playbooks
```
