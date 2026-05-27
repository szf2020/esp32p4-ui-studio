# ESP32-P4 UI Studio Architecture Spine

## 1. Project Overview & Product Core

### Core System Identity
* **Project Official Name:** ESP32-P4 UI Studio
* **Internal Framework Branding:** ForgeUI Studio
* **Monorepo Repository Name:** `esp32p4-ui-studio`
* **Theme System Status:** THEME PIPELINE V1 PROVEN ON PHYSICAL ESP32-P4 DISPLAY HARDWARE.
* **Theme Direction:** Synchronized token contract system unifying Browser Preview, native LVGL C export, and the flashed firmware runtime layer.
* **Active Architectural Save Point:** `FORGEUI_STUDIO_WIDGET_EXPORT_PIPELINE_PROVEN__PREVIEW_TO_P4_PARITY_V1__TEXTURE_THEME_SYSTEM_NEXT__2026-05-27`

### Technical Project Mission
* **Definition:** Low-code visual HMI designer, WYSIWYG layout builder, and automated firmware deployment toolchain.
* **Target Hardware:** Espressif RISC-V ESP32-P4 series MCUs driving high-resolution capacitive touchscreen panels.
* **Core Technical Stack:** Dynamic React visual layout canvas ➔ Static LVGL v9 C code exporter ➔ Local ESP-IDF compilation scripts.
* **Embedded Runtime Target:** `ForgeUI-One` standalone ESP-IDF firmware application framework shell.
* **Developer User Story:** Launch Local Studio ➔ Visually Compose HMI UI ➔ Execute Build & Flash ➔ View Live Graphics Rendering on Target LCD.

### System Boundaries & Constraints
* **What It IS:** Fixed-viewport screen editors, industrial display HMIs, automation dashboards, smart kiosk interfaces, and tactile control panels.
* **What It IS NOT:** Responsive web page builders, generic CSS frameworks, React runtime executors inside firmware, or a packaged cross-platform desktop binary.
* **Current Software Distribution Model:** Browser-managed local Node.js development server. Desktop wrappers (Wails, Tauri, Electron) are deferred.

---

## 2. Monorepo Architecture & File Directory Map

### Workspace Structural Tree

```text
esp32p4-ui-studio/
├── studio/                             # Visual IDE Frontend & LVGL Code Generation Workspace (React / Next.js)
├── firmware/
│   └── ForgeUI-One/                    # Production-ready ESP-IDF Firmware Application Shell & Driver Runtime
├── tools/                              # Automation scripts, compilation helpers, and hardware flashing utilities
├── docs/                               # Developer documentation and markdown system specs
│   └── history/                        # Version migration logs and legacy architectural records
├── START_FORGEUI_STUDIO.bat            # Windows foreground runtime service launcher
├── START_FORGEUI_STUDIO_HIDDEN.vbs     # Hidden background daemon developer initialization tool
├── STOP_FORGEUI_STUDIO.bat             # Graceful local developer workspace server shutdown utility
├── README.md                           # Main developer onboarding guide & SEO landing documentation
├── LICENSE                             # Primary open-source software license agreement
├── THIRD_PARTY_LICENSES.md             # Core upstream software dependency attributions
└── 01_SPINE.md                         # Structural Architecture Spine (This File)
```

### Strict Area Ownership & Separation Protocols
* **The Studio Subsystem (`/studio`) Owns:** Drag-and-drop workspace UI components, absolute canvas X/Y coordinate tracking, inspector parameters, and automated LVGL C asset parsing.
* **The Firmware Subsystem (`/firmware`) Owns:** Native C compilation context, Board Support Package (BSP) definitions, hardware touch/display panel peripheral configuration drivers, and the core LVGL life-cycle rendering loop.
* **The Tooling Subsystem (`/tools`) Owns:** Platform automation setups, cross-compilation pipeline triggers, USB flashing interfaces, and filesystem workspace bridge monitors.

---

## 3. Technology Stack & Target Environment Parameters

### IDE Development Stack
* **Frontend Technologies:** React, Next.js App Router, and Chakra UI component definitions.
* **Open-Source Heritage:** Forked from a mature, MIT-licensed visual editor engine originally developed by Premier Octet.
* **Extension Standard Operating Procedure:** All custom platform-specific modifications must be isolated directly inside `studio/src/forgeui/`.

### Target Hardware Specifications
* **Primary Target Evaluation Kit:** Waveshare ESP32-P4-WIFI6-Touch-LCD-7B
* **Physical Graphics Viewport Size:** 1024x600 fixed pixel bounding box.
* **Low-Level UI Framework:** LVGL v9 core embedded graphics layer compiled via the official Espressif ESP32-P4 BSP.

### Local Workspace Directory Paths
* **Absolute Core Project Root:** `C:\ForgeUI\Projects\esp32p4-ui-studio`
* **Local Studio Source Path:** `studio/`
* **Local Firmware Build Path:** `firmware/ForgeUI-One/`
* **Automation Utilities Path:** `tools/`
* **Target Serial Flashing Script:** `tools/flash-p4.bat`

---

## 4. Compilation Pipelines & Runtime System Contracts

### Hardware Deployment Pipeline Flow
1. Run `START_FORGEUI_STUDIO_HIDDEN.vbs` to trigger the local multi-process backend service.
2. The Node.js local studio dev server boots up alongside the real-time file exporter bridge. The design canvas launches locally at `http://localhost:3000`.
3. The developer manipulates elements on the visual canvas using absolute X/Y constraints and hits **Export UI to Device** / **Build & Flash**.
4. The studio code generator translates JSON nodes into static C headers, overwriting existing workspace destination targets.
5. The automation layer invokes the local ESP-IDF cross-compiler backend and updates the target MCU over USB-C interface instantly.

### Target Generated Artifact Contract
* **Output Code Injections:** `90_Studio_Export.c` and `90_Studio_Export.h` files.
* **Firmware Runtime Hook Location:** `ForgeUI-One/main/01_FG_Runtime.c`.
* **Execution Call Handle:** `fg_studio_export_create(scr);`.
* **Immutability Contract:** Generated C files are volatile build artifacts. Never make manual code edits inside these outputs; changes must occur on the visual design canvas.

### Widget Export Pipeline V1 Matrix
* **Status:** CONFIRMED FUNCTIONAL ON PHYSICAL ESP32-P4 HARDWARE.
* **Data Flow Trace:** Studio Workspace Canvas ➔ Web Browser Preview ➔ Transpiled Native LVGL C ➔ Local ESP-IDF Firmware Build ➔ Real LCD Panel Execution.

#### Hardware-Validated Core UI Components
* Action Controls: `Button`, `Slider`, `Switch`, `Checkbox`, `Radio`
* Text Content: `Text` (Labels), `Input` (Single-line), `Textarea` (Multi-line text blocks), `NumberInput`
* Visual Structures: `Box` (Container), `Select` (Dropdown menus), `Image` (Static placeholder asset state)
* Status Indicators: `Progress` (Linear display), `CircularProgress` (Gauge loop status monitor)

---

## 5. Browser Preview V1 & Shared Theme System

### Architecture Simulation Layer
* **Status:** OPERATIONAL / SYSTEM-WIDE PIXEL PARITY VERIFIED / SHARED COLOR CONTRAST PROVEN.
* **Core Objective:** Provide real-time layout testing to prevent unnecessary ESP-IDF compilation cycles and identify scaling mismatches early.
* **Frontend Controller Context:** `Header.tsx` controls the overlay visibility state toggles.
* **Component Path Map:**
  - Simulation Interface: `studio/src/forgeui/preview/DevicePreview.tsx`
  - Graphics Transpilation Engine: `studio/src/forgeui/preview/forgePreviewRenderer.tsx`
  - Style Transformation Dictionary: `studio/src/forgeui/preview/forgeThemeMap.ts`
  - Global Hardware State: `studio/src/forgeui/ForgeUIDeviceConfig.ts`

### Simulation Integrity Rules
* Browser Preview is a structural approximation; final physical hardware execution remains the absolute source of truth.
* The preview component tree must ingest the exact same node component graph as the static LVGL C exporter engine. Separate mock schemas are forbidden.
* All parsing logic must remain isolated within `studio/src/forgeui/preview/`.

### Synchronized Theme Engine Contract
The visual workspace web canvas, simulation overlay, and native C layout engine share a strict, unified theme contract profile built on six global core style tokens:

```json
{
  "tokens": ["bg", "surface", "surface2", "border", "text", "accent"]
}
```

#### Hardware-Validated Production Palettes
15 matching profiles are integrated out-of-the-box for instant branding:
* *Matrix Green (System Default)*, Reactor Dark, Graphite, Nordic Blue, Military Green, Cyber Teal, Forge Orange, Nebula Purple, OLED Black, Carbon Red, Arctic Ice, Industrial Steel, Lava Core, Blueprint, and Toxic Lime.

---

## 6. Known Development Limits & Immediate Pipeline Roadmap

### Structural Restrictions & Design Challenges
* **Automation Portability:** System execution scripts (`.bat` / `.vbs`) rely on Windows host paths; Linux/macOS build script profiles are pending.
* **Layout Mechanics:** Flexbox and Grid structural wrappers are in discovery; strict alignment parity is currently dependent on absolute positioning parameters.
* **Asset Pipeline:** Image compilation is limited to bounding placeholder vectors. A dedicated binary image array converter (BIN/RAW) for LVGL v9 flash partitions is deferred.
