# 🚀 ForgeUI Studio | First-Time Setup & Getting Started Guide

## Visual LVGL v9 HMI Designer for ESP32-P4

Welcome to **ForgeUI Studio**.

ForgeUI Studio is a visual drag-and-drop LVGL v9 designer built specifically for the **ESP32-P4** platform using **ESP-IDF**.

The goal is simple:

```text
Design UI
    ↓
Preview UI
    ↓
Build & Flash
    ↓
ESP32-P4 Hardware
```

No manual LVGL coding required.

---

# 🎯 Current Project Status

Current status:

```text
PROVEN
```

The following are working:

```text
✓ Browser Preview

✓ Theme Manager

✓ Single Source Theme System

✓ Build & Flash

✓ Clean Build & Flash

✓ Standalone ESP-IDF Export

✓ Asset Manager

✓ Uploaded Asset Selection

✓ Uploaded Asset Registry

✓ Builder Image Rendering

✓ Browser Preview Image Rendering

✓ Multi-Image Validation

✓ Offline LVGL v9 Image Converter

✓ PNG → LVGL C Conversion

✓ Automatic Asset Source Generation

✓ Automatic CMake Integration

✓ Automatic LV_IMAGE_DECLARE Generation

✓ Automatic lv_image_set_src Generation

✓ ESP-IDF Asset Compilation

✓ Physical ESP32-P4 Image Rendering

✓ Theme Preview Validation

✓ Theme Hardware Flash Validation
```

---

# 🎨 Theme System V2

Status:

```text
PROVEN
```

Current architecture:

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
ForgeUILvglExport
        ↓
Generated LVGL
        ↓
ESP32-P4
```

Single source of truth.

Adding a theme to:

```text
studio/src/forgeui/preview/forgeThemeMap.ts
```

automatically:

```text
✓ Appears in Theme Manager

✓ Appears in Browser Preview

✓ Exports to LVGL

✓ Flashes to ESP32-P4
```

---

# 🖼️ Current Image Workflow

Status:

```text
PROVEN
```

Current architecture:

```text
Uploaded Asset
    ↓
Asset Manager
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
LV_IMAGE_DECLARE(...)
    ↓
lv_image_set_src(...)
    ↓
Build & Flash
    ↓
Physical ESP32-P4 Rendering
```

---

# 🖼️ Uploaded Asset Status

Current truth:

```text
The uploaded image pipeline is complete.

The image conversion problem is solved.

The image integration problem is solved.

Multi-image validation is complete.

Physical ESP32-P4 rendering is proven.
```

---

# 📍 Current Save Point

```text
FORGEUI_SINGLE_THEME_SOURCE_V1__PREVIEW_EXPORT_P4_SYNC_PROVEN__TEST_PURPLE_VALIDATED__2026-06-13
```

Meaning:

```text
✓ Uploaded image pipeline proven

✓ Multi-image validation proven

✓ Theme Manager proven

✓ Theme export proven

✓ ESP32-P4 theme validation proven

✓ Duplicate theme definitions removed

✓ Theme drift eliminated

✓ Single source of truth established

✓ Nordic Ice validated

✓ Graphite validated

✓ Test Purple validated
```

---

# 🎯 Next Major Milestone

```text
Texture Pack V1
    ↓
Additional Built-In Textures
    ↓
Background Playground
    ↓
Theme Categories
    ↓
Custom Theme Creation
    ↓
Theme Import / Export
    ↓
Presentation Quality Improvements
    ↓
Desktop Wrapper Investigation
```


---

# 🛠️ Required Software

Install the following software before using ForgeUI Studio.

## Node.js

Required:

```text
Node.js 20 LTS or newer
```

Download:

```text
https://nodejs.org
```

Verify:

```bash
node -v
npm -v
```

---

## Git

Required:

```text
Git SCM
```

Download:

```text
https://git-scm.com
```

Verify:

```bash
git --version
```

---

## Visual Studio Code

Required:

```text
Visual Studio Code
```

Download:

```text
https://code.visualstudio.com
```

Recommended extensions:

```text
ESLint
Prettier
Espressif ESP-IDF Extension
```

---

## ESP-IDF

Required:

```text
ESP-IDF 5.5.4
```

Target:

```text
ESP32-P4
```

Recommended installation:

```text
Espressif VS Code Extension
```

Verify:

```text
ESP-IDF PowerShell opens successfully
```

---

# 🖼️ LVGL Image Converter

ForgeUI Studio now includes a proven offline LVGL v9 image converter.

Location:

```text
tools/lvgl/LVGLImage.py
```

Status:

```text
PROVEN
```

Bench validation:

```text
✓ Python 3.11 verified
✓ LVGLImage.py executes
✓ pypng installed
✓ lz4 installed
✓ PNG → LVGL C conversion verified
✓ ARGB8888 output verified
✓ Generated .c asset created successfully
```

Current required packages:

```text
pypng
lz4
```

Install:

```powershell
pip install pypng lz4
```

Future goal:

```text
START_FORGEUI_STUDIO.bat
    ↓
Auto-check dependencies
    ↓
Auto-install missing packages
    ↓
Launch Studio
```

---

# 📦 Clone The Repository

Clone the repository into:

```text
C:\ForgeUI\Projects\
```

Example:

```bash
git clone <repository-url>
```

Expected folder:

```text
C:\ForgeUI\Projects\esp32p4-ui-studio
```

---

# 📦 Install Studio Dependencies

Open a terminal:

```bash
cd studio
npm install
```

This installs:

```text
React
Next.js
Chakra UI
react-dropzone
Studio dependencies
```

---

# 🚀 Start ForgeUI Studio

From the project root:

```text
START_FORGEUI_STUDIO_HIDDEN.vbs
```

Expected result:

```text
Node backend starts
Studio frontend starts
Browser opens automatically
```

Default address:

```text
http://localhost:3000
```

---

# 🛑 Stop ForgeUI Studio

When finished:

```text
STOP_FORGEUI_STUDIO.bat
```

This:

```text
Stops node processes
Closes local servers
Releases ports
Stops file watchers
```

---

# 📂 Repository Structure

```text
esp32p4-ui-studio/
├── studio/
│   ├── src/
│   ├── public/
│   └── export-server.js
│
├── firmware/
│   └── ForgeUI-One/
│
├── tools/
│   └── lvgl/
│       └── LVGLImage.py
│
├── docs/
│   └── history/
│
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

# 🔄 Current UI Workflow

```text
Drag Components
    ↓
Builder Canvas
    ↓
Browser Preview
    ↓
Generate LVGL
    ↓
Build & Flash
    ↓
ESP32-P4 Hardware
```

---

# 🖼️ Current Image Workflow

### Browser Side

Working:

```text
Upload PNG
Upload JPG
Upload SVG
Thumbnail Preview
Builder Preview
Browser Preview
```

### Hardware Side

Current status:

```text
Preset LVGL assets render correctly.

Uploaded assets currently export as
placeholders until automatic conversion
integration is completed.
```

Current architecture:

```text
Uploaded PNG
    ↓
Asset Manager
    ↓
Builder
    ↓
Preview

WORKING
```

Future architecture:

```text
Uploaded PNG
    ↓
Asset Manager
    ↓
LVGLImage.py
    ↓
Generated .c Asset
    ↓
Firmware Assets
    ↓
Generated CMake
    ↓
Build & Flash
    ↓
Real Image On P4
```

---

# ⚠️ White Box Explanation

Current white-box behavior is expected.

The white box is:

```text
NOT a rendering bug
NOT a Build & Flash bug
NOT a CMake bug
```

Root cause:

```text
Uploaded browser assets are not yet
automatically converted into LVGL C assets.
```

Current truth:

```text
Preset LVGL assets render correctly.

LVGLImage.py conversion is proven.

Automatic integration is the remaining task.
```

---

# 📍 Current Save Point

```text
FORGEUI_STUDIO_LVGL9_OFFLINE_IMAGE_CONVERTER_PROVEN__PNG_TO_C_WORKING__2026-05-30
```

Meaning:

```text
✓ LVGLImage.py added
✓ pypng installed
✓ lz4 installed
✓ Converter executes
✓ PNG conversion proven
✓ ARGB8888 output generated
✓ Offline workflow proven
✓ White-box root cause confirmed
```

---

# 🎯 Next Major Milestone

```text
Asset Manager
    ↓
Auto-run LVGLImage.py
    ↓
Generate .c Asset
    ↓
Firmware Assets/uploads
    ↓
assetSources[]
    ↓
Generated CMake
    ↓
Build & Flash
    ↓
Real Uploaded Image On P4
```

The image conversion problem is solved.

The remaining work is integration.