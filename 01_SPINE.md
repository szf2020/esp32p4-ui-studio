# SPINE

## Current Save Point

```text
FORGEUI_AI_PLAYGROUND_V1__PROMPT_LAYOUT_LIBRARY_PROVEN__WIFI_LOGIN_DASHBOARD__2026-06-22
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

## Current Save Point

```text
FORGEUI_AI_PLAYGROUND_V1__SCHEMA_VALIDATION_PROVEN__REGISTRY_BOUND__UNSUPPORTED_COMPONENT_REJECTED__2026-06-22
```

---

# AI Playground V1

## Status

```text
PROVEN IN STUDIO

SCHEMA VALIDATION PROVEN

REGISTRY BOUND
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

User Editable JSON Textarea
    ✓

JSON Error Handling
    ✓

Prompt Box
    ✓

Generate JSON Button
    ✓

Prompt → Layout Template Match
    ✓

Layout Library V1
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

Registry-backed AI Component Allow List
    ✓
```

---

## Current Proven Flow

```text
Prompt
    ↓
Intent Match
    ↓
Layout Library
    ↓
ForgeUI JSON
    ↓
JSON Textarea
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

Tested rejection:

```text
SuperWidget
    ↓
Unsupported component: SuperWidget
    ✓
```

---

## Registry Binding

AI validation now uses:

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
Do not maintain a separate hard-coded AI component list inside ForgeAIPanel.

AI-supported components must come from the ForgeUI component registry path.
```

---

# Current Next Mission

```text
FORGEUI_AI_PLAYGROUND_V1__LAYOUT_LIBRARY_EXPANSION_NEXT__2026-06-22
```

Goal:

```text
Expand Layout Library V1 with more safe ForgeUI templates.

Keep all generated layouts JSON-only.

Keep validation before insertion.

Do not touch firmware.

Do not touch export.

Do not touch runtime.
```

Candidate templates:

```text
Settings screen

Sensor dashboard

Machine status panel

WiFi login drawer mockup

Diagnostics screen

Touch keypad screen
```

---

# Future AI Roadmap

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

V9 Prompt → JSON Template Generation
    ✓ Complete

V10 Layout Library V1
    ✓ Complete

V11 ForgeUI Schema Validation
    ✓ Complete

V11.5 Registry-backed Component Validation
    ✓ Complete

V12 Layout Library Expansion
    NEXT

V13 OpenAI Integration

V14 Asset Generation

V15 ForgeUI Playbooks
```

## Status

```text
PROVEN IN STUDIO
```

## Current Save Point

```text
FORGEUI_AI_PLAYGROUND_V1__PROMPT_LAYOUT_LIBRARY_PROVEN__WIFI_LOGIN_DASHBOARD__2026-06-22
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

User Editable JSON Textarea
    ✓

JSON Error Handling
    ✓

Prompt Box
    ✓

Generate JSON Button
    ✓

Prompt → Layout Template Match
    ✓

Layout Library V1
    ✓

ForgeUI Store Integration
    ✓

Canvas Render
    ✓
```

---

## Current Proven Flow

```text
Prompt
    ↓
Intent Match
    ↓
Layout Library
    ↓
ForgeUI JSON
    ↓
JSON Textarea
    ↓
JSON.parse()
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

## Layout Library V1

Proven prompt templates:

```text
Create a WiFi setup screen
    ↓
WiFi Setup Layout
    ✓

Create a login screen
    ↓
Login Layout
    ✓

Create a dashboard
    ↓
Dashboard Layout
    ✓
```

---

## AI Panel Refactor

AI Playground was moved out of:

```text
Header.tsx
```

and into:

```text
src/forgeui/ai/ForgeAIPanel.tsx
```

Header now only owns:

```text
Open / Close AI Panel

insertAiLayout()
```

ForgeAIPanel now owns:

```text
Prompt UI

Generate JSON

Layout JSON Textarea

JSON Validation

Insert JSON

Layout Library
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

AI does not generate arbitrary React.

AI does not generate LVGL.

AI generates ForgeUI layout definitions only.
```

---

# Current Next Mission

```text
FORGEUI_AI_PLAYGROUND_V1__FORGEUI_SCHEMA_VALIDATION_NEXT__2026-06-22
```

Goal:

```text
Validate component type.

Validate layout array.

Validate props object.

Reject invalid component types.

Reject unsafe / unsupported layout definitions.

Only allow ForgeUI-supported components.
```

Success criteria:

```text
Valid ForgeUI JSON
    ↓
Accepted
    ↓
Canvas Insert

Invalid JSON or unsupported component
    ↓
Rejected
    ↓
Error shown
    ↓
Nothing inserted
```

---

# Future AI Roadmap

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

V9 Prompt → JSON Template Generation
    ✓ Complete

V10 Layout Library V1
    ✓ Complete

V11 ForgeUI Schema Validation
    Next

V12 OpenAI Integration

V13 Layout Library Expansion

V14 Asset Generation

V15 ForgeUI Playbooks
```



# Current Hardware Target

```text
Waveshare ESP32-P4-WIFI6-Touch-LCD-7B

Resolution:
1024x600

LVGL:
9.2.2

ESP-IDF:
5.5.x

Display:
MIPI-DSI

Touch:
GT911
```

---

# Build Truth

```text
Build & Flash
    ✓ Working

Clean Build & Flash
    ✓ Working

Detached Export
    ✓ Working

Generated LVGL
    ✓ Compiles

Generated Assets
    ✓ Compile

Generated Themes
    ✓ Compile

Physical ESP32-P4
    ✓ Proven
```

---

# Non-Negotiable Rules

```text
Do not rebuild RTC.

Do not rebuild WiFi.

Do not create duplicate theme systems.

Do not create duplicate runtime systems.

Do not bypass Builder.

Do not bypass Export.

Do not bypass the component store.

Extend proven systems.

Preserve Builder → Preview → Export → P4 architecture.
```
