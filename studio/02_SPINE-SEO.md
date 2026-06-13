# ForgeUI Studio for ESP32-P4
> **Tagline:** The Open-Source Visual UI Studio & Code Generation Matrix for 1024x600 MIPI-DSI Displays running LVGL v9.

[![Hardware Baseline](https://shields.io)](https://github.com)
[![LVGL Version](https://shields.io)](https://github.com)
[![Toolchain](https://shields.io)](https://github.com)

ForgeUI Studio is a specialized, production-ready design workspace and firmware compilation engine built specifically for high-performance Espressif **ESP32-P4** multimedia microcontrollers. It bridges the gap between browser-based vector layouts and bare-metal hardware execution, delivering 1-click asset conversion, theme engine generation, and direct serial compilation paths over UART/OTG.

---

## 🛠 Target Hardware Core Specification
* **MCU:** Espressif ESP32-P4 (High-performance RISC-V dual-core pipeline)
* **Display Interface:** Native High-Speed MIPI-DSI
* **Resolution Panel:** 1024x600 7-Inch (Waveshare ESP32-P4-WIFI6-Touch-LCD-7B)
* **Touch Controller Component:** GT911 Capacitive Touch Layer
* **Graphics Library Stack:** Native LVGL v9 Execution Layer

---

## 🚀 Core Engine Capabilities

### 1. End-to-End Asset Pipeline & Compiler Matrix
Bypasses manual cloud asset conversion workflows using a local, decoupled, automated compilation toolchain.
* **Format Parser:** Ingests local `.png`, `.jpg`, and `.svg` image assets via integrated drag-and-drop mechanics.
* **Offline Conversion Engine:** Utilizes local asset automation utilities (`tools/lvgl/LVGLImage.py`) powered by `pypng` and `lz4`.
* **Output Format Processing:** Automatically bakes images down to hardware-optimized **ARGB8888** uncompressed byte streams.
* **Auto-Linker Architecture:** Dynamically handles generation of `.c` asset files, `LV_IMAGE_DECLARE(...)` mappings, `CMakeLists.txt` structural updates, and automated code injects for `lv_image_set_src(...)`.

### 2. Single Source of Truth Theme Engine
Eliminates interface rendering drift between the editor viewport and external microcontroller targets by moving theme mapping to an exclusive single-pipeline module.
* **Unified Pipeline:** Core layouts use a universal theme definition model (`studio/src/forgeui/preview/forgeThemeMap.ts`) mapping to the central `FG_PREVIEW_PALETTES` layout database.
* **Downstream Alignment:** Eliminates layout discrepancy by routing the exact same data variables straight from **Theme Manager ➔ Context Layout ➔ Viewport Builder ➔ LVGL Export Module ➔ Hardware C Target**.
* **Pre-Baked Themes Included:** Carbon Graphite (with native texture backing), Matrix Green, Cyber Teal, Nordic Ice, Forge Orange, and Test Purple profiles.

---

## 📊 Proven Architecture Flowchart

### Data Layer: Image Ingestion & Code Generation Path
```text
[Local Image Upload] ➔ [Asset Registry Manager] ➔ [Local Python Asset Parser (LVGLImage.py)]
                                                                  │
[Physical ESP32-P4 Canvas Screen] ◄── [Serial Flash via UART] ◄── [ESP-IDF Compiler Workspace]
                                                                  ▲
                                                                  │
[CMake Assembly Injection] ◄── [Automated C Variable Injects] ◄── [LVGL Image Descriptor Arrays]
```

### Logical Layer: Synchronized Theme Distribution
```text
[Theme Selection Matrix] ➔ [Universal Theme State Context] ➔ [Viewport Builder Editor]
                                                                     │
[Hardware Display Screen] ◄── [Native Target Build] ◄── [C Code Translation Engine]
```

---

## 📂 Project Repository Tree

```text
forgeui-p4-studio/
├── studio/
│   └── src/
│       └── forgeui/
│           ├── preview/
│           │   └── forgeThemeMap.ts      <-- Universal Palette Mappings (Single Truth Source)
│           └── ForgeUILvglExport.ts      <-- Decoupled Clean ESP-IDF Source Code Generator
├── tools/
│   └── lvgl/
│       └── LVGLImage.py                  <-- Local/Offline Binary Image Transpiler Engine
└── docs/
    └── history/                          <-- Precompiled Asset Packs & UI Hardware Verification
```

---

## ⚡ Direct Workspace Initialization

### Initializing the Software Dependencies
To spin up the local graphical environment and link the offline binary asset compiler modules, run the following commands in your terminal terminal:

```bash
# Clone the repository workspace
git clone https://github.com.git
cd esp32p4-ui-studio

# Spin up the frontend graphical studio environment
cd studio
npm install
npm run dev

# Provision Python automation pipelines for offline graphic compilation
pip install pypng lz4
```

### Compiling and Injecting Code to Bare-Metal Hardware
1. Connect your **Waveshare ESP32-P4 7B** screen directly to your workspace machine via the dedicated **USB-UART** serial debugging terminal.
2. Select or drop your theme pack directly onto the visual UI Workspace.
3. Execute **Build & Flash** from the Studio dashboard layout. The visual workspace automatically calls underlying toolchain files to convert vector layouts into standard C matrices, verify partitions, compile dependencies inside the project tree, and flash target memory addresses cleanly.

---

## 🎯 Verification Records & Bench Proofs
* **Theme Stability Profile:** Eliminates palette synchronization lag completely across all target profiles (`Carbon Graphite`, `Cyber Teal`, `Matrix Green`).
* **Complex Assets Pipeline Proven:** 1024x600 high-definition Sci-Fi UI textures successfully processed, injected into compilation scripts, and accurately rendered on target LCD modules over MIPI-DSI data lines without resource limit overlaps.
* **Firmware Reliability Target:** Stable builds compiled natively with official Espressif **ESP-IDF v5.x** framework guidelines.
