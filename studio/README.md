# 🛠️ ESP32-P4 Studio | Visual LVGL v9 HMI Designer & ESP-IDF Flash Toolchain

[![ESP-IDF Version](https://shields.io)](https://github.com)
[![LVGL Version](https://shields.io)](https://lvgl.io)
[![Target Hardware](https://shields.io)](https://www.waveshare.com)
[![License](https://shields.io)](LICENSE)

**ESP32-P4 Studio** (ForgeUI Studio) is an open-source visual HMI designer, LVGL code generator, asset pipeline, and automated deployment environment built specifically for **Espressif ESP32-P4** hardware running **LVGL v9** and **ESP-IDF**.

The platform bridges browser-based drag-and-drop UI design with native embedded deployment. Layouts, widgets, styling, assets, and image resources are transformed into optimized LVGL C code, compiled locally using ESP-IDF, and deployed directly to physical ESP32-P4 hardware.

---

# ⚡ Core Philosophy

ForgeUI Studio exists to eliminate:

```text
Manual coordinate calculations
Manual LVGL coding
Manual asset conversion
Manual CMake maintenance
Manual firmware integration
```

while preserving:

```text
Native LVGL
Native ESP-IDF
Native C code
Native hardware performance
```

No runtime web framework is deployed onto the microcontroller.

Everything becomes pure embedded firmware.

---

# 🚀 Proven Embedded Toolchain Pipeline

```text
Visual Canvas
      ↓
Component Tree
      ↓
LVGL Code Generator
      ↓
Asset Pipeline
      ↓
Generated C Sources
      ↓
Generated CMake Sources
      ↓
ESP-IDF Build
      ↓
ESP32-P4 Flash
      ↓
Physical Hardware Execution
```

---

# 🖼️ Uploaded Image Pipeline V1 (PROVEN)

ForgeUI Studio now includes a fully integrated offline LVGL v9 image asset pipeline.

Uploaded artwork can be converted, compiled, flashed, and rendered directly on physical ESP32-P4 hardware.

No cloud services are required.

All conversion occurs locally.

---

## Converter

Location:

```text
tools/lvgl/LVGLImage.py
```

Status:

```text
PROVEN
```

Dependencies:

```text
pypng
lz4
```

---

## Proven Workflow

```text
PNG Upload
    ↓
Asset Manager
    ↓
LVGLImage.py
    ↓
ARGB8888 Conversion
    ↓
Generated LVGL C Asset
    ↓
Firmware Assets/uploads
    ↓
Asset Registry
    ↓
assetSources[]
    ↓
Generated CMake
    ↓
LV_IMAGE_DECLARE(...)
    ↓
lv_image_set_src(...)
    ↓
Build & Flash
    ↓
Physical ESP32-P4 Rendering
```

---

## Proven Capabilities

```text
✓ PNG Upload

✓ JPG Upload

✓ SVG Upload

✓ Drag & Drop Asset Import

✓ Thumbnail Generation

✓ Uploaded Asset Registry

✓ Automatic LVGL Conversion

✓ Automatic Asset Compilation

✓ Automatic CMake Integration

✓ Automatic LV_IMAGE_DECLARE Generation

✓ Automatic lv_image_set_src Generation

✓ ESP-IDF Compilation

✓ Physical ESP32-P4 Rendering
```

---

## Architecture Truth

```text
Uploaded Asset
    ↓
LVGLImage.py
    ↓
Generated LVGL C Asset
    ↓
Firmware Assets/uploads
    ↓
Asset Registry
    ↓
assetSources[]
    ↓
Generated CMake
    ↓
Build & Flash
    ↓
ESP32-P4 Display

PROVEN
```

---

# ✅ Proven Milestones

```text
Browser UI Builder                  ✓ PROVEN

Browser Preview                     ✓ PROVEN

Build & Flash                       ✓ PROVEN

Clean Build & Flash                 ✓ PROVEN

Detached ESP-IDF Export             ✓ PROVEN

LVGLImage.py Integration            ✓ PROVEN

PNG → LVGL C Conversion             ✓ PROVEN

Uploaded Asset Pipeline             ✓ PROVEN

Automatic CMake Injection           ✓ PROVEN

Automatic Asset Compilation         ✓ PROVEN

Physical ESP32-P4 Image Rendering   ✓ PROVEN
```

---

# 🚀 Standalone ESP-IDF Export Pipeline

ForgeUI Studio supports exporting fully standalone ESP-IDF firmware projects directly from the visual editor.

Generated projects become independent of the Studio environment.

---

## Portable Project Ecosystem

### Zero Framework Lock-In

Exported projects open directly inside:

```text
Visual Studio Code
ESP-IDF Extension
```

without requiring ForgeUI Studio.

### Clean Rebuilds

Projects support:

```text
idf.py reconfigure
idf.py build
idf.py flash
```

from a clean environment.

### Lightweight Integration

The Studio injects only:

```text
90_Studio_Export.c
90_Studio_Export.h
```

into the runtime shell.

Everything else remains standard ESP-IDF.

---

## Proven Export Validation Flow

```text
ForgeUI Studio Canvas
           ↓
Generate Native LVGL Runtime
           ↓
Generate Asset Sources
           ↓
Generate CMake Sources
           ↓
Export Standalone ESP-IDF Project
           ↓
Open in VS Code
           ↓
idf.py build
           ↓
idf.py flash
           ↓
Successful ESP32-P4 Boot
```

---

# 🛠️ Supported Hardware

Primary validation target:

```text
Waveshare ESP32-P4-WIFI6-Touch-LCD-7B
```

---

## Hardware Baseline

```text
ESP32-P4

1024 × 600 Display

MIPI-DSI LCD

GT911 Touch Controller

LVGL v9

ESP-IDF v5.5.4

ESP-Hosted WiFi

Audio

RTC

SD Card
```

---

# 📦 Repository Architecture

```text
esp32p4-ui-studio/
├── studio/
│   └── React / Next.js UI Builder

├── firmware/
│   └── ForgeUI-One/
│       └── Native ESP-IDF Runtime

├── tools/
│   └── lvgl/
│       └── LVGLImage.py

├── docs/

├── START_FORGEUI_STUDIO.bat
├── START_FORGEUI_STUDIO_HIDDEN.vbs
├── STOP_FORGEUI_STUDIO.bat

├── README.md
├── LICENSE
├── THIRD_PARTY_LICENSES.md
└── 01_SPINE.md

C:\
└── ForgeUI-Exports\
```

---

# 🏗️ Architectural Separation

## Studio Layer

Responsible for:

```text
Visual Editing

Widget Management

Themes

Asset Management

LVGL Generation

Export Generation
```

---

## Firmware Layer

Responsible for:

```text
ESP-IDF Runtime

LVGL Runtime

Display Drivers

Touch Drivers

Audio

RTC

WiFi

SD Card

Generated UI Execution
```

---

# 🚨 Design Rules

## No Browser Runtime On Hardware

The ESP32-P4 never runs:

```text
React
HTML
CSS
JavaScript
Chakra UI
```

---

## Pure Native Output

Everything becomes:

```text
C

LVGL

ESP-IDF
```

---

## Static Generation

The Studio exports:

```text
Static LVGL Code

Static Assets

Static Firmware Artifacts
```

for maximum runtime performance.

---

# 🎨 Supported Widgets

Current widget support:

### Structure

```text
Text
Box
Image
```

### Input

```text
Input
Textarea
NumberInput
Select
```

### Controls

```text
Button
Switch
Checkbox
Radio
Slider
```

### Status

```text
Progress
CircularProgress
```

---

## Widget Validation Path

```text
Canvas
    ↓
Preview
    ↓
Generated LVGL
    ↓
ESP32-P4 Hardware
```

---

# 🎨 Built-In Themes

Included themes:

```text
Reactor Dark

Graphite

Nordic Blue

Midnight Terminal

Industrial Steel

Military Green

Cyber Teal

Forge Orange

Nebula Purple

OLED Black

Matrix Green

Carbon Red

Arctic Ice

Blueprint

Toxic Lime
```

Theme tokens remain synchronized across:

```text
Builder
Preview
Generated LVGL
Hardware
```

---

# 🔄 Typical Workflow

```text
Start ForgeUI Studio
        ↓
Design Interface
        ↓
Upload Assets
        ↓
Preview Layout
        ↓
Build & Flash
        ↓
Test On Hardware
        ↓
Export Standalone ESP-IDF Project
        ↓
Deploy
```

---

# 🔮 Current Development Direction

```text
Multi-Image Validation

Builder ↔ Preview ↔ Hardware
Sizing Parity

Image Scaling Controls

Asset Cleanup Management

Asset Browser Improvements

Template Expansion

Future AI-Assisted UI Generation
```

---

# 📜 Open Source Attribution

ESP32-P4 Studio is built upon the excellent open-source editor foundations originally created by Premier Octet.

The project has been extensively adapted and expanded for:

```text
ESP32-P4

LVGL v9

ESP-IDF

Embedded HMI Development

Asset Pipelines

Automated Deployment
```

Original licensing and attribution remain preserved.

---

# 👨‍💻 Project Maintainer

**Scott Forster**  
ForgeUI Project

📧 forgeui.esp32@gmail.com

---

## Current Save Point

```text
FORGEUI_STUDIO_UPLOADED_IMAGE_PIPELINE_V1_PROVEN__LVGL_CONVERSION_CMAKE_FLASH_SUCCESS__2026-06-11
```