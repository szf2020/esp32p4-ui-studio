````markdown
# ESP32-P4 UI Studio Architecture Spine

## 1. Project Overview & Product Core

### Core System Identity

* **Project Official Name:** ESP32-P4 UI Studio
* **Internal Framework Branding:** ForgeUI Studio
* **Monorepo Repository Name:** `esp32p4-ui-studio`
* **Theme System Status:** THEME PIPELINE V1 PROVEN ON PHYSICAL ESP32-P4 DISPLAY HARDWARE
* **Asset System Status:** ASSET MANAGER V1 / UPLOADED ASSET CONTRACT V1 PROVEN IN BROWSER + EXPORT PLACEHOLDER PROVEN ON P4
* **Active Architectural Save Point:** `FORGEUI_STUDIO_UPLOADED_ASSET_CONTRACT_V1__PREVIEW_SIZE_FIXED__EXPORT_PLACEHOLDER_PROVEN__2026-05-30`

### Technical Project Mission

* Low-code visual HMI designer
* WYSIWYG LVGL screen builder
* Automated ESP-IDF export and deployment workflow
* Browser Preview → LVGL Export → Build & Flash → Physical Hardware
* User-uploaded/snipped image workflow toward clickable embedded UI elements

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
* Asset-aware export generation for preset registered LVGL C assets
* Asset-aware CMake generation
* Theme pipeline hardware validation
* Asset Manager upload/drop/delete/thumbnail flow
* Uploaded image selection in Image widget
* Builder image sizing
* Browser Preview image sizing aligned with Builder
* Uploaded asset export placeholder/stub on P4 hardware

Current focus has shifted toward:

* uploaded asset export completion
* PNG/JPG/SVG to LVGL C conversion
* image-as-button action scaffolding
* widget parity
* export fidelity
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
````

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
* Asset Manager
* Uploaded asset registry
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
C:\ForgeUI-Exports\
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

* Preset PNG assets
* Preset SVG assets
* Source artwork
* Source icon files

---

### Uploaded Browser Asset Registry

```text
studio/src/forgeui/ForgeUIUploadedAssetRegistry.ts
```

Owns:

* Uploaded browser-side asset records
* Object URL browser preview source
* Uploaded asset ID/name/type/size/file
* Future LVGL export identity scaffolding
* Export status tracking

Uploaded assets are browser-side only until conversion exists.

---

### Preset LVGL Asset Registry

```text
studio/src/forgeui/ForgeUIAssetRegistry.ts
```

Owns:

* Preset asset records
* `src`
* `lvgl`
* `cFile`
* width/height metadata

Preset registered LVGL assets are the current proven hardware-safe image path.

---

### Live Firmware Asset Target

```text
firmware/ForgeUI-One/main/assets/
```

Owns:

* LVGL image assets
* Runtime icon assets
* Generated/copied image source files

---

### Export Asset Target

```text
C:\ForgeUI-Exports\<project>\main\assets\
```

Owns:

* Copied LVGL image assets
* Standalone export resources

---

### Hard Rule

Studio/browser assets must never be compiled directly by ESP-IDF.

Required flow for hardware images:

```text
browser/source asset
    ↓
conversion/export bridge
    ↓
LVGL C image asset
    ↓
firmware/ForgeUI-One/main/assets
    ↓
CMake assetSources
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
* react-dropzone

## Export Layer

* ForgeUI LVGL Generator
* Native LVGL C Export
* Node/Express export bridge

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

All changes originate from the visual canvas and export generator.

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
```

---

## Export Status

**PROVEN**

The standalone ESP-IDF export path is operational.

---

## Export Route

```text
POST /export-idf-project
```

Studio Build & Flash works because it builds inside:

```text
firmware/ForgeUI-One/
```

Detached export builds inside:

```text
C:\ForgeUI-Exports\<project>\
```

If `/export-idf-project` only generates:

```text
main.c
90_Studio_Export.c
```

the project may configure and build the bootloader, but fail at final link with errors such as:

```text
undefined reference to fg_runtime_init
undefined reference to fg_rtc_init
undefined reference to fg_wifi_init
undefined reference to fg_sd_init
undefined reference to fg_wifi_pump
undefined reference to fg_sd_test
```

### Hard Rule

Never update the live `/export` CMake generation without checking the detached `/export-idf-project` CMake generation.

They must stay aligned unless there is a deliberate, documented reason.

### Current Fix

In:

```text
studio/export-server.js
```

inside:

```text
app.post('/export-idf-project')
```

the `cmakeSources` block must match the live export route:

```js
const cmakeSources = [
  '"main.c"',
  '"01_FG_Runtime.c"',
  '"20_RTC.c"',
  '"30_Audio.c"',
  '"30_WIFI.c"',
  '"40_SD.c"',
  '"90_Studio_Export.c"',
]
```

Asset sources are appended after this:

```js
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

## Image Preview Fix

Previous bug:

```text
Image Preview used fixed 48px base sizing.
```

Fixed behavior:

```text
Image Preview now respects widget width/height.
Builder image size now matches Browser Preview image size.
```

Current truth:

```text
Builder size = Preview size
P4 placeholder size = Exported LVGL object size
```

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

#### Preset Registered Assets

Status:

```text
PROVEN
```

Preset image flow:

```text
ForgeUIAssetRegistry
    ↓
FORGEUI_IMAGE_ASSETS
    ↓
asset.lvgl
    ↓
asset.cFile
    ↓
generateForgeUILvglCode()
    ↓
assetSources[]
    ↓
/export
    ↓
copy .c asset into firmware
    ↓
generated CMake
    ↓
LV_IMAGE_DECLARE
    ↓
P4 render
```

#### Uploaded Asset Manager Images

Status:

```text
BROWSER PIPELINE PROVEN
EXPORT PLACEHOLDER PROVEN
REAL LVGL IMAGE CONVERSION NOT YET BUILT
```

Uploaded image flow currently:

```text
Asset Manager Upload
    ↓
ForgeUIUploadedAssetRegistry
    ↓
browserSrc object URL
    ↓
Image Widget Inspector dropdown
    ↓
Builder render
    ↓
Browser Preview render
    ↓
LVGL export placeholder/stub
    ↓
P4 clickable placeholder
```

Current P4 result:

```text
P4 does not yet show the uploaded PNG/SVG artwork.
P4 shows a meaningful placeholder/stub with text such as:
Uploaded Asset / Pending LVGL Export
```

This is expected until uploaded image conversion exists.

---

# 9. Asset Pipeline Status

## LVGL Image Converter Status

Status:

PROVEN

The official LVGL v9 offline image converter is now integrated into the ForgeUI Studio toolchain.

Location:

tools/lvgl/LVGLImage.py

Dependencies proven:

* pypng
* lz4

Bench proof:

* Python environment verified
* LVGLImage.py executes successfully
* Help output verified
* PNG → LVGL C conversion verified
* ARGB8888 output verified
* Generated .c asset created successfully

Proof command:

python LVGLImage.py --ofmt C --cf ARGB8888 --output output --name fg_test_image test.png

Result:

done 1 files

Current truth:

ForgeUI Studio now possesses a proven local/offline LVGL image conversion capability.

The remaining work is pipeline integration, not image conversion research.

## Current State

**PROVEN WITH LIMITS**

Asset Manager V1 is working.

Uploaded assets can flow from Asset Manager into the Image widget, Builder, and Browser Preview.

Uploaded assets can now also safely export as a visible placeholder/stub on P4 hardware.

---

## Asset Manager Proven Features

* Asset Manager opens from Editor menu
* PNG upload works
* JPG/JPEG upload works
* SVG upload works
* Drag/drop upload works
* Click-to-browse upload works
* Uploaded asset registry works
* Asset survives Asset Manager close/reopen during current browser session
* Thumbnail preview works
* File name/type/size display works
* Delete asset works
* Image widget Inspector shows Uploaded Asset dropdown
* Uploaded asset can be selected from Image widget
* Image widget canvas updates immediately
* Browser Preview renders selected uploaded asset
* Browser Preview image sizing now matches Builder
* Build & Flash still runs
* P4 receives exported placeholder object
* P4 placeholder object position/size aligns with Builder/Preview

---

## Uploaded Asset Contract V1

Current uploaded asset type includes:

```ts
export type ForgeUIUploadedAsset = {
  id: string
  name: string
  type: string
  size: number
  file: File
  createdAt: number

  browserSrc: string
  kind: 'uploaded'
  exportStatus: 'browser_only' | 'pending_conversion' | 'lvgl_ready'

  lvgl: string
  cFile: string
}
```

Current meaning:

```text
browserSrc = browser-only preview source
lvgl = future LVGL symbol name
cFile = future generated LVGL C asset path
exportStatus = current conversion/export state
```

Current status value for normal uploaded assets:

```text
browser_only
```

---

## Current Uploaded Asset Limitation

Uploaded image files are not yet automatically converted to LVGL C data.

Manual LVGL conversion is now proven via tools/lvgl/LVGLImage.py.

The remaining gap is automatic integration between Asset Manager and the LVGL conversion pipeline.

Therefore:

```text
uploaded PNG/JPG/SVG
    ↓
works in browser
    ↓
does not yet become a real LVGL image asset
    ↓
P4 receives placeholder/stub instead of artwork
```

This is not a bug.

This is the next missing feature.

---

## Export Placeholder Behavior

When `ForgeUILvglExport.ts` sees an Image widget whose `src` does not match a registered preset asset in:

```text
FORGEUI_IMAGE_ASSETS
```

it now exports a styled clickable placeholder instead of a blank white object.

Placeholder behavior:

```text
lv_button_create(parent)
styled with current theme surface/border/text
center label:
Uploaded Asset
Pending LVGL Export
clickable flag enabled
press transform feedback enabled
```

This gives detached exports a real visible object instead of a confusing white box.

---

## Current Split

### Browser Side

```text
Uploaded image artwork visible
Builder visible
Preview visible
Sizing aligned
```

### Firmware/P4 Side

```text
Uploaded image artwork not visible yet
Placeholder visible
Position/size aligned
Build/flash stable
```

---

## Do Not Touch Without Reason

Do not break or rewrite:

* Build & Flash
* Clean Build & Flash
* ESP-IDF Export
* Export server routing
* Existing preset asset copy pipeline
* Existing preset LVGL C asset path
* Current working preview sizing
* Current uploaded asset registry scaffold

---

# 10. Image Handler Product Direction

## Original Product Goal

The image handler exists so users can:

```text
snip/upload an image
    ↓
use it as a UI object
    ↓
attach a function/action
    ↓
export detached ESP-IDF project
    ↓
flash and continue development
```

This is bigger than simply displaying a picture.

The intended path is:

```text
Uploaded image
    ↓
image button / image tile
    ↓
action stub
    ↓
later custom user logic
```

---

## Image Action Roadmap

### Action V1

Inspector should eventually allow:

```text
Action Type:
- None
- Show message
- Change label text
- Toggle state
- Open panel
- Go to screen
- Custom C callback stub
```

### Export V1 Stub

Initial P4 action behavior can be:

```text
tap uploaded-image placeholder
    ↓
show/change label:
"Image button pressed"
```

or:

```text
tap uploaded-image placeholder
    ↓
call generated callback stub:
fg_studio_image_action_<id>()
```

Purpose:

```text
Prove touch/action/export behavior before full image conversion exists.
```

---

# 11. Required Future Image Conversion Pipeline

## Required Goal

Convert uploaded browser image files into LVGL-compatible firmware assets.

Target flow:

```text
Uploaded PNG/JPG/SVG
    ↓
normalize/sanitize name
    ↓
convert to LVGL C image descriptor
    ↓
write generated .c file
    ↓
store under firmware/ForgeUI-One/main/assets/uploads/
    ↓
append to assetSources[]
    ↓
append to generated CMake
    ↓
LV_IMAGE_DECLARE(fg_upload_xxx)
    ↓
lv_image_set_src(img, &fg_upload_xxx)
    ↓
P4 renders actual uploaded artwork
```

---

## Likely New Folder

```text
firmware/ForgeUI-One/main/assets/uploads/
```

Detached export target:

```text
C:\ForgeUI-Exports\<project>\main\assets\uploads\
```

---

## Required Conversion Decisions

Still to decide:

* PNG to LVGL C converter approach
* SVG support strategy
* whether SVG converts to PNG first
* asset size limits
* max dimensions
* transparency handling
* color format
* output naming rules
* generated C file ownership
* standalone export inclusion
* live Build & Flash inclusion

---

## Preferred Direction

Do not attempt to compile browser Blob URLs.

Blob URLs are browser-only.

Correct direction:

```text
File object / image bytes
    ↓
server-side or build-time converter
    ↓
LVGL C source
```

---

# 12. Immediate Roadmap

## Near-Term

* Verify uploaded asset scaffold remains stable after restart/reload limits are understood
* Add visible export warnings/labels in Inspector for browser-only uploaded assets
* Add Image Action Stub V1
* Add generated callback stub for uploaded image placeholder/button
* Design PNG/SVG to LVGL C conversion pipeline
* Keep preset registered C assets as known-good hardware-safe path

---

## Mid-Term

* Uploaded asset persistence after browser refresh
* Uploaded asset manifest save/load
* Uploaded image conversion to LVGL C
* Uploaded asset copy into firmware assets/uploads
* Uploaded asset CMake integration
* Detached export support for uploaded converted assets
* Real uploaded artwork render on P4
* Theme editor
* Surface editor
* Background flavour editor
* Component styling tools
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

# 13. Known-Good Save Point

## Current Save Point

```text
FORGEUI_STUDIO_UPLOADED_ASSET_CONTRACT_V1__PREVIEW_SIZE_FIXED__EXPORT_PLACEHOLDER_PROVEN__2026-05-30
```

## Known-Good State

```text
Asset Manager upload works
Asset Manager delete works
Asset Manager thumbnail works
Uploaded asset registry works
Uploaded asset contract upgraded
browserSrc introduced
exportStatus introduced
future lvgl/cFile fields introduced
Image widget uploaded asset dropdown works
Builder renders uploaded image
Browser Preview renders uploaded image
Browser Preview sizing fixed
Build & Flash still works
P4 receives exported object
P4 placeholder position/size aligns with Builder/Preview
P4 shows placeholder/stub instead of blank white box
Export server not broken
Preset asset path left intact
```

## Known Gap

```text
Uploaded image artwork does not yet render on P4.
PNG/JPG/SVG to LVGL C conversion has not been built.
```

---

# Source Of Truth Rule

The Spine is the architecture authority.

If code, documentation, exports, or discussions disagree:

**The Spine wins.**

```
```
