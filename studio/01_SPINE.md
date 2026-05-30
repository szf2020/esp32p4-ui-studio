# ESP32-P4 UI Studio Architecture Spine

## 1. Project Overview & Product Core

### Core System Identity

* **Project Official Name:** ESP32-P4 UI Studio
* **Internal Framework Branding:** ForgeUI Studio
* **Monorepo Repository Name:** `esp32p4-ui-studio`
* **Theme System Status:** THEME PIPELINE V1 PROVEN ON PHYSICAL ESP32-P4 DISPLAY HARDWARE
* **Theme Direction:** Synchronized token contract system unifying Browser Preview, native LVGL C export, and flashed firmware runtime
* **Active Architectural Save Point:** `FORGEUI_STUDIO_ASSET_MANAGER_PHASE3_IMAGE_PICKER_PREVIEW_OK__2026-05-30`

sandbox removed Asset Manager V2 thumbnails, delete support, and Studio cleanup

### Technical Project Mission

* Low-code visual HMI designer
* WYSIWYG LVGL screen builder
* Automated ESP-IDF export and deployment workflow
* Browser Preview → LVGL Export → Build & Flash → Physical Hardware

### Target Platform

* ESP32-P4 family
* LVGL v9
* ESP-IDF
* Touchscreen HMI applications
* Industrial dashboards
* Kiosks
* Control panels
* Embedded GUI products

### Current Product Maturity

ForgeUI Studio has moved beyond proof-of-concept status.

The following are now proven:

* Browser Preview
* LVGL export generation
* Build & Flash workflow
* Clean Build & Flash workflow
* Standalone ESP-IDF export generation
* Export folder collision protection
* Asset-aware export generation
* Asset-aware CMake generation
* Theme pipeline hardware validation

Current focus has shifted toward:

* widget parity
* export fidelity
* asset pipeline completion
* runtime stabilization
* property editor improvements
* component behavior support
* export UX refinement

---

# 2. Monorepo Architecture & File Directory Map

## Workspace Structural Tree

```text
esp32p4-ui-studio/
├── studio/                             # Visual IDE frontend, preview, LVGL generator, export bridge
├── firmware/
│   └── ForgeUI-One/                    # Live ESP-IDF runtime used by Studio Build & Flash
├── tools/                              # Build, flash, export, and helper scripts
├── docs/                               # Documentation, Spine, history, save records
│   └── history/
├── START_FORGEUI_STUDIO.bat
├── START_FORGEUI_STUDIO_HIDDEN.vbs
├── STOP_FORGEUI_STUDIO.bat
├── README.md
├── LICENSE
├── THIRD_PARTY_LICENSES.md
└── 01_SPINE.md

C:\
└── ForgeUI-Exports\                    # Detached standalone ESP-IDF project exports
```

---

## Architecture Ownership Contract

### Studio

```text
studio/
```

Owns:

* React UI
* Canvas
* Component tree
* Inspector
* Browser Preview
* Export orchestration
* LVGL generation

---

### Firmware

```text
firmware/ForgeUI-One/
```

Owns:

* ESP-IDF runtime
* BSP
* Display
* Touch
* LVGL lifecycle
* Hardware integration
* Build & Flash target

---

### Exports

```text
exports/
```

Owns:

* Standalone generated ESP-IDF projects
* User deliverables
* Export snapshots

---

### Tools

```text
tools/
```

Owns:

* Build scripts
* Flash scripts
* Runtime helpers
* Automation utilities

---

## Asset Ownership Contract

### Browser Asset Source

```text
studio/public/assets/
```

Owns:

* PNG assets
* SVG assets
* Source artwork
* Source icon files

---

### Live Firmware Asset Target

```text
firmware/ForgeUI-One/main/assets/
```

Owns:

* LVGL image assets
* Runtime icon assets
* Generated image source files

---

### Export Asset Target

```text
exports/<project>/main/assets/
```

Owns:

* Copied LVGL image assets
* Standalone export resources

---

### Hard Rule

Studio assets must never be compiled directly by ESP-IDF.

Required flow:

```text
studio/public/assets
    ↓
export bridge
    ↓
firmware/ForgeUI-One/main/assets
    ↓
ESP-IDF build
```

---

## Forbidden Architecture Drift

Never use:

```text
studio/firmware/
```

Never create:

```text
studio/firmware/ForgeUI-One/
```

Treat these paths as architecture drift and accidental junk.

---

# 3. Technology Stack

## Frontend

* React
* Next.js
* Chakra UI

## Export Layer

* ForgeUI LVGL Generator
* Native LVGL C Export

## Firmware

* ESP-IDF 5.5.4
* LVGL v9
* ForgeUI-One Runtime

## Hardware

* Waveshare ESP32-P4-WIFI6-Touch-LCD-7B
* 1024x600 Display
* Capacitive Touch

---

# 4. Build & Flash Pipeline

## Studio Startup

```text
START_FORGEUI_STUDIO_HIDDEN.vbs
        ↓
Node Backend
        ↓
React Frontend
        ↓
Export Bridge
        ↓
http://localhost:3000
```

---

## Build & Flash Flow

```text
Canvas
    ↓
Generate LVGL
    ↓
Generate Asset List
    ↓
Write Runtime Files
    ↓
Copy Runtime Assets
    ↓
Generate CMake
    ↓
ESP-IDF Build
    ↓
Flash
    ↓
ESP32-P4
```

---

## Generated Runtime Files

```text
90_Studio_Export.c
90_Studio_Export.h
```

Generated files are disposable build artifacts.

Never manually edit them.

All changes originate from the visual canvas.

---

# 5. Export Pipeline

## Detached Export CMake Parity Rule

The live Build & Flash path and the detached Export ESP-IDF Project path must generate the same core runtime source list.

### Correct Runtime Source List

Both `/export` and `/export-idf-project` must include:

```text
main.c
01_FG_Runtime.c
20_RTC.c
30_Audio.c
30_WIFI.c
40_SD.c
90_Studio_Export.c

## Export Status

**PROVEN**

The standalone ESP-IDF export path is operational.

---

## Export Route

```text
POST /export-idf-project

Reason

Studio Build & Flash works because it builds inside:

firmware/ForgeUI-One/

Detached export builds inside:

C:\ForgeUI-Exports\<project>\

If /export-idf-project only generates:

main.c
90_Studio_Export.c

the project will configure and build the bootloader, but fail at final link with errors such as:

undefined reference to fg_runtime_init
undefined reference to fg_rtc_init
undefined reference to fg_wifi_init
undefined reference to fg_sd_init
undefined reference to fg_wifi_pump
undefined reference to fg_sd_test
Hard Rule

Never update the live /export CMake generation without checking the detached /export-idf-project CMake generation.

They must stay aligned unless there is a deliberate, documented reason.

Current Fix

In:

studio/export-server.js

inside:

app.post('/export-idf-project')

the cmakeSources block must match the live export route:

const cmakeSources = [
  '"main.c"',
  '"01_FG_Runtime.c"',
  '"20_RTC.c"',
  '"30_Audio.c"',
  '"30_WIFI.c"',
  '"40_SD.c"',
  '"90_Studio_Export.c"',
]

Asset sources are appended after this:

assetSources.forEach((src) => {
  cmakeSources.push(`"${src}"`)
})
```

---

## Export Protection

Enabled:

* Auto increment export folders
* Collision protection
* Overwrite prevention

Example:

```text
ForgeUI_Export
ForgeUI_Export_001
ForgeUI_Export_002
ForgeUI_Export_003
```

---

## Export Cleanliness Rules

Never export:

```text
build/
.vscode/
.vs/
managed_components/
```

Purpose:

* smaller exports
* clean rebuilds
* portable projects

---

# 6. Browser Preview System

## Status

PROVEN

Browser Preview is operational and validated.

---

## Components

```text
studio/src/forgeui/preview/
```

Contains:

* DevicePreview.tsx
* forgePreviewRenderer.tsx
* forgeThemeMap.ts

---

## Browser Preview Rule

Browser Preview is a simulation.

Physical hardware remains the source of truth.

---

# 7. Theme System

## Shared Token Contract

```json
{
  "tokens": [
    "bg",
    "surface",
    "surface2",
    "border",
    "text",
    "accent"
  ]
}
```

---

## Current Theme Library

* Matrix Green
* Reactor Dark
* Graphite
* Nordic Blue
* Military Green
* Cyber Teal
* Forge Orange
* Nebula Purple
* OLED Black
* Carbon Red
* Arctic Ice
* Industrial Steel
* Lava Core
* Blueprint
* Toxic Lime

---

# 8. Widget Export Matrix

## Hardware Validated

### Controls

* Button
* Slider
* Switch
* Checkbox
* Radio

### Text

* Label
* Input
* Textarea
* NumberInput

### Layout

* Box
* Select

### Status

* Progress
* CircularProgress

### Images

* Preset image pipeline operational
* Uploaded asset pipeline operational
* Image widget asset picker operational
* Browser Preview asset rendering operational
* Uploaded asset export integration pending
---

# 9. Asset Pipeline Status

## Current State

**PROVEN**

Asset Manager Phase 3 is now working.

Uploaded assets can now flow from Asset Manager into the Image widget and Browser Preview.

### Proven Data Flow

```text
Asset Manager Upload
    ↓
ForgeUIUploadedAssetRegistry
    ↓
Image Widget Inspector
    ↓
Uploaded Asset Dropdown
    ↓
Image src blob URL
    ↓
Canvas Render
    ↓
Browser Preview Render
Proven Features
Asset Manager opens from Editor menu
PNG upload works
JPG/JPEG upload works
SVG upload works
Drag/drop upload works
Click-to-browse upload works
Uploaded asset registry works
Asset survives Asset Manager close/reopen
Thumbnail preview works
File name/type/size display works
Delete asset works
Image widget Inspector shows Uploaded Asset dropdown
Uploaded asset can be selected from Image widget
Image widget canvas updates immediately
Browser Preview renders selected uploaded asset
Current Limit

Image sizing is not yet fully aligned between:

Canvas selection box
Browser Preview render
Future LVGL hardware render

This is expected and will be handled later as an image sizing/alignment pass.

Not Started Yet

Do not start these yet:

uploaded asset persistence after browser refresh
uploaded asset manifest save/load
uploaded asset export integration
LVGL conversion for uploaded assets
physical P4 flash path for uploaded runtime assets
Hard Rule

Do not touch these proven paths during the next asset pass:

Build & Flash
Clean Build & Flash
ESP-IDF Export
Export server
LVGL export core
existing preset asset copy pipeline

---

## Proven Data Flow

```text
ForgeUIAssetRegistry
        ↓
FORGEUI_IMAGE_ASSETS
        ↓
asset.cFile
        ↓
generateForgeUILvglCode()
        ↓
assetSources[]
        ↓
Header.tsx
        ↓
/export
        ↓
Generated CMakeLists.txt
        ↓
idf_component_register(SRCS ...)
```

---

## Proven Progress

Old failure:

```text
undefined reference to fg_icon_add_users_48px
```

Advanced to:

```text
Cannot find source file:
main/assets/icons/fg_icon_add_users_48px.c
```

This proves:

* asset discovery works
* asset transport works
* export route works
* generated CMake works
* ESP-IDF sees expected asset references

---

## Current Blocker

Physical icon asset copy not yet complete.

Required target:

```text
firmware/ForgeUI-One/main/assets/icons/
```

---

## Next Proof Required

Build log should show:

```text
fg_icon_add_users_48px.c.obj
```

instead of:

```text
Cannot find source file
```

---

## Next Mission

Trace:

```text
ForgeUIAssetRegistry
    ↓
FORGEUI_IMAGE_ASSETS
    ↓
asset.cFile
    ↓
/export route
    ↓
firmware/ForgeUI-One/main/assets/icons/
```

Implement physical icon copy.

Then validate:

* Build success
* Flash success
* Icon render on physical ESP32-P4

---

# 10. Immediate Roadmap

## Near-Term

* Complete icon asset copy
* Physical icon rendering
* Improve Button actions
* Improve Switch actions
* Improve Slider bindings
* Improve Progress bindings
* Improve Radio support
* Improve Checkbox support

---

## Mid-Term

* Theme editor
* Surface editor
* Background flavour editor
* Component styling tools
* Asset manager
* Property panel improvements

---

## Long-Term

* Full LVGL export coverage
* Professional HMI workflow
* Commercial-grade ESP32-P4 designer
* Standalone packaged desktop application
* Production deployment pipeline
* Community component ecosystem

---

# Source Of Truth Rule

The Spine is the architecture authority.

If code, documentation, exports, or discussions disagree:

**The Spine wins.**
