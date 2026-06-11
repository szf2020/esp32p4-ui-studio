# 🛠️ ForgeUI Studio

[![GitHub License](https://shields.io)](LICENSE)
[![ESP32-P4 Compliant](https://shields.io)](https://espressif.com)
[![LVGL Version](https://shields.io)](https://lvgl.io)
[![ESP-IDF Version](https://shields.io)](https://github.com)

An open-source **Visual UI Designer, Low-Code HMI Layout Engine, Asset Pipeline, and Automated Firmware Deployment Studio** engineered specifically for the **Espressif ESP32-P4** ecosystem running **LVGL v9** and **ESP-IDF**.

ForgeUI Studio bridges the gap between browser-based UI design and production-ready embedded deployment. It eliminates manual coordinate calculations, automates LVGL code generation, manages image assets, and deploys directly to ESP32-P4 hardware from a single workflow.

---

# ⚡ Key Architectural Advancement

ForgeUI Studio supports both:

* Integrated browser-based Build & Flash workflows.
* Fully standalone ESP-IDF project exports.

Visual layouts remain editable inside the Studio while generated firmware remains portable and independent.

---

# 📦 Standalone ESP-IDF Export Architecture

ForgeUI Studio can generate complete standalone ESP-IDF projects which no longer depend on the Studio after export.

## Benefits

* Zero framework lock-in.
* Open directly inside Visual Studio Code.
* Native ESP-IDF workflow compatibility.
* Portable project distribution.
* Clean rebuild support.
* Long-term firmware maintainability.

Only the generated UI layer is injected into the runtime shell:

```text
90_Studio_Export.c
90_Studio_Export.h
```

Everything else remains standard ESP-IDF and LVGL.

---

# 🔄 Proven Deployment Pipeline

```text
ForgeUI Studio Canvas
            ↓
Generate Native LVGL Code
            ↓
Generate Asset Sources
            ↓
Generate CMake Sources
            ↓
ESP-IDF Build
            ↓
Flash ESP32-P4
            ↓
Physical Hardware Validation
```

---

# 🖼️ Uploaded Image Pipeline (PROVEN)

ForgeUI Studio now supports user-uploaded image assets which are automatically converted into LVGL-compatible C assets.

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

## Proven Capabilities

* PNG Upload
* JPG Upload
* SVG Upload
* Drag & Drop Asset Import
* Thumbnail Generation
* Asset Registry
* Automatic LVGL Conversion
* Automatic Asset Compilation
* Automatic CMake Integration
* Physical ESP32-P4 Rendering

No cloud conversion services are required.

All image conversion occurs locally.

---

# 🚀 Core Features

## Visual Designer

* WYSIWYG Canvas Editing
* Absolute Positioning
* Drag & Drop Layout Construction
* Resize Handles
* Grid Alignment
* Device-Aware Workspaces

## Browser Preview

* Real-Time Preview Rendering
* Preview-to-Hardware Validation
* Theme Previewing
* Live Layout Inspection

## LVGL Code Generation

* Native LVGL v9 Output
* Optimized Static Layout Generation
* Automatic Widget Creation
* Automatic Styling Generation
* Asset Integration

## Build & Flash

* Browser Build Trigger
* Browser Flash Trigger
* Clean Build Support
* Live Flash Console
* ESP-IDF Integration

## Asset Management

* Upload Assets
* Delete Assets
* Asset Registry
* Thumbnail Browser
* LVGL Asset Conversion
* Firmware Asset Generation

---

# 🎨 Supported Widgets

ForgeUI Studio currently supports:

## Structure

* Box
* Text
* Image

## Input

* Input
* Textarea
* NumberInput
* Select

## Controls

* Button
* Switch
* Checkbox
* Radio
* Slider

## Status

* Progress
* CircularProgress

The widget pipeline is validated across:

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

ForgeUI Studio ships with multiple hardware-validated visual themes:

* Reactor Dark
* Graphite
* Nordic Blue
* Midnight Terminal
* Industrial Steel
* Military Green
* Cyber Teal
* Forge Orange
* Nebula Purple
* OLED Black
* Matrix Green
* Carbon Red
* Arctic Ice
* Blueprint
* Toxic Lime

Theme tokens remain synchronized across:

```text
Builder
Preview
Generated LVGL
Hardware
```

---

# 💻 Hardware Validation

## Primary Target

**ESP32-P4**

Validated using:

**Waveshare ESP32-P4-WIFI6-Touch-LCD-7B**

## Specifications

* ESP32-P4
* 1024×600 Display
* MIPI-DSI LCD
* Capacitive Touch
* LVGL v9
* ESP-IDF v5.5.4

---

# ✅ Proven Milestones

## Browser UI Builder

```text
PROVEN
```

## Browser Preview

```text
PROVEN
```

## Build & Flash

```text
PROVEN
```

## Detached ESP-IDF Export

```text
PROVEN
```

## LVGLImage.py Integration

```text
PROVEN
```

## PNG → LVGL C Conversion

```text
PROVEN
```

## Uploaded Asset Pipeline

```text
PROVEN
```

## Automatic CMake Injection

```text
PROVEN
```

## Physical ESP32-P4 Image Rendering

```text
PROVEN
```

---

# 🏭 Target Use Cases

ForgeUI Studio is optimized for:

* Industrial HMI Systems
* Machine Control Panels
* IoT Dashboards
* Smart Home Controllers
* Medical Equipment Interfaces
* Kiosk Displays
* Automation Systems
* Fleet Telematics
* Touchscreen Appliances

---

# 🔮 Current Development Direction

Current focus areas:

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

# 🤝 Open Source Credits

ForgeUI Studio is built upon the excellent open-source editor foundations originally created by Premier Octet.

The project has been extensively adapted and expanded for:

* LVGL v9
* ESP32-P4
* Embedded HMI Development
* ESP-IDF Integration
* Hardware Deployment Automation

Original licensing and attribution remain preserved.

---

# 👨‍💻 Project Maintainer

Scott Forster
ForgeUI Project

📧 [forgeui.esp32@gmail.com](mailto:forgeui.esp32@gmail.com)

---

## Current Save Point

```text
FORGEUI_STUDIO_UPLOADED_IMAGE_PIPELINE_V1_PROVEN__LVGL_CONVERSION_CMAKE_FLASH_SUCCESS__2026-06-11
```
