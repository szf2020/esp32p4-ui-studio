# 🚀 ForgeUI Studio | First-Time Setup & Getting Started Guide

### The Zero-Friction Visual Layout, Asset Compilation, and Toolchain Deployment Workflow for Espressif ESP32-P4 and LVGL v9.2.2.

This setup manual guides you through initializing, mounting, and compiling your development environment to transition visual drag-and-drop web layouts into optimized standalone firmware binaries.

---

## 🎨 Unified Architecture Streams

ForgeUI Studio couples asset configuration, interface styling, and structural logic into a centralized, single-source-of-truth pipeline:

### 1. Theme Management System (V2 Stack)
```text
  [ FG_PREVIEW_PALETTES ] ──► Base structural interface color schema arrays
             ↓
  [    Theme Manager    ] ──► Workspace selection engine (25+ preset layouts)
             ↓
  [  ForgeThemeContext ] ──► Unified runtime variable map
             ↓
  [    Canvas Builder   ] ──► Real-time edit vector bounding box layer
             ↓
  [   Browser Preview   ] ──► Zero-lag layout emulated rendering viewport
             ↓
  [  ForgeUILvglExport  ] ──► Pure C layout translation transformation
             ↓
  [   Generated LVGL    ] ──► Native framework component parameters
             ↓
  [    Physical ESP32-P4  ] ──► Hardware-accelerated screen draw passes (63 FPS)
```
*   **Centralized Configuration Matrix**: Adjusting parameters inside `studio/src/forgeui/preview/forgeThemeMap.ts` auto-populates selectors, maps browser previews, structures code generation arrays, and configures physical flash configurations simultaneously.

### 2. High-Speed Local Asset Conversion Engine
```text
Uploaded Asset (.png/.jpg/.svg) ──► Asset Manager ──► LVGLImage.py ──► ARGB8888 Binary Array 
                                                                                ↓
Physical Panel ◄── esptool.py flash ◄── CMake Injection ◄── firmware/main/assets/uploads/
```
*   **Hardware Acceleration Integration**: Mapped asset variables bypass runtime filesystem processing. They convert into pure source memory sheets (`.c` files), injecting automated `LV_IMAGE_DECLARE(...)` mappings and binding layout nodes via raw `lv_image_set_src(...)` hooks natively.

---

## 🛠️ Required Frameworks & Dependencies

Install these baseline dependencies to prevent compiler environment mismatches:

### 1. Runtimes & Version Source Control
*   **Node.js Runtime Platform**: Enforces **Node.js v20 LTS (or newer)**. Verify tracking variables via console tools:
    ```bash
    node -v
    npm -v
    ```
*   **Git Source Control SCM**: Essential for version branches and dependency pulls. Verify version loops:
    ```bash
    git --version
    ```

### 2. IDE Workspace Configuration
*   **Code Editor**: **Visual Studio Code (VS Code)**.
*   **Core System Extensions**: Install **ESLint**, **Prettier**, and the official **Espressif ESP-IDF Extension** layout tool.

### 3. Native Embedded Toolchain Framework
*   **Development Framework**: **ESP-IDF v5.5.4 Stable Core**.
*   **Compilation Target Processor**: **ESP32-P4**.
*   **System Python Packages**: The local ARGB8888 canvas asset converter (`tools/lvgl/LVGLImage.py`) requires native Python 3.11 bindings. Install compressed compilation dependencies directly:
    ```powershell
    pip install pypng lz4
    ```

---

## 📦 Local Workspace Installation Steps

Follow this precise structural alignment path to preserve background script lookup boundaries:

### 1. Clone Source Repository
To ensure automated execution script paths function without internal parameter drift, map your target branch directly into this folder structure:
```bash
# Create base directories and pull project repository sources
mkdir -p C:\ForgeUI\Projects\
cd C:\ForgeUI\Projects\
git clone <your-repository-url> esp32p4-ui-studio
```
*   **Verified Path Target**: `C:\ForgeUI\Projects\esp32p4-ui-studio`

### 2. Run Studio Interface Installation
Initialize local ecosystem dependency modules natively from your workspace directory tree:
```bash
cd C:\ForgeUI\Projects\esp32p4-ui-studio\studio
npm install
```
*   **Ecosystem Components Added**: Configures Next.js compilation layers, React engines, Chakra UI layout frames, and `react-dropzone` components safely.

---

## 🚀 Workspace Process Execution Controls

The environment includes automated task orchestration runners to manage local servers, file system configuration watchers, and browser routing links:

### 1. Launch the ForgeUI Workspace Environment
From the root repository path (`C:\ForgeUI\Projects\esp32p4-ui-studio`), trigger the automated hidden Windows Script background file:
```text
START_FORGEUI_STUDIO_HIDDEN.vbs
```
*   **Automated Action Results**: Spins up the hidden Node backend server, initializes Next.js rendering threads, sets up hot-reloading asset trackers, and automatically opens your browser window directly to the active workspace address:
    ```text
    http://localhost:3000
    ```

### 2. Shutdown the Workspace Servers
When development sessions are complete, release operational port locks and close monitoring handlers cleanly using the root stop script file:
```text
STOP_FORGEUI_STUDIO.bat
```
*   **System Processes Cleared**: Disconnects active Node system processes, frees up network port entries, stops active project file watchers, and gracefully shuts down running local server contexts.

---

## 💾 Workspace Directory Mapping

```text
C:\ForgeUI\Projects\esp32p4-ui-studio/
├── studio/                     # React / Next.js Canvas Builder UI environment
│   ├── src/                    # Component canvas logic and asset source maps
│   ├── public/                 # Static graphical visual items
│   └── export-server.js        # Local WebUSB/WebSerial local bridge routing logic
├── firmware/ForgeUI-One/       # Native ESP-IDF Standalone Export Project Template
│   ├── main/                   # Peripheral drivers (Audio, WIFI, RTC, SD) & UI logic
│   └── partitions.csv          # Custom 16MB flash memory division map
├── tools/lvgl/LVGLImage.py     # Local offline ARGB8888 image array compiler script
├── docs/history/               # System state logs and architectural milestones
├── START_FORGEUI_STUDIO.bat    # Foreground local developer server terminal script
├── START_FORGEUI_STUDIO_HIDDEN.vbs # Background server hidden orchestration script
└── STOP_FORGEUI_STUDIO.bat     # Server teardown process cleanup script
```

---

## 📍 Environment Save Point & Milestones

### Current Active Fingerprint
```text
FORGEUI_FULLSCREEN_THEME_BACKGROUNDS_V1__P4_HERO_RENDERING_PROVEN__SINGLE_THEME_ARCHITECTURE_STABLE__2026
```

### Mapped Engineering Verification Points
*   **`✓ PROVEN` Visual Integrity**: Full theme preview validations running across 25+ distinct UI setups (Nordic Ice, Graphite, Carbon Fiber, Test Purple, Quantum Hex).
*   **`✓ PROVEN` Toolchain Flashing**: Direct WebSerial flashing, isolated system builds, and complete cache restorations (`Clean Build & Flash`).
*   **`✓ PROVEN` Native Performance**: Real-world hardware outputs lock perfectly onto the physical panel at **63 FPS** with near **2.5% CPU load** and fixed **5ms drawing windows** `[63 FPS, 2.5% CPU | 5ms (5|0)]`.
*   **`✓ PROVEN` Code Portability**: Complete standalone project export operations decoupling directly into pristine standalone CMake structures for immediate VS Code integration.

### Upcoming Milestones
```text
Texture Pack V1 ──► Additional Built-In Textures ──► Background Playground ──► Theme Categories ──► Custom Theme Creation ──► Theme Import/Export ──► Desktop Wrapper
```


---
name: 🐛 Bug Report
about: Create a report to help optimize the ESP32-P4 Studio toolchain
title: "[BUG]: "
labels: bug
assignees: ''
---

**Describe the bug**
A clear and concise description of what the toolchain issue is.

**Verified Toolchain Context**
* **Host OS**: [e.g., Windows 11]
* **Node.js Version**: [e.g., v20.11.0]
* **ESP-IDF Version**: [e.g., v5.5.4]
* **Target Hardware**: [e.g., Waveshare ESP32-P4-WiFi6-Touch-LCD-7B]

**Console Logging Output**
Please paste the exact runtime error signature from your `START_FORGEUI_STUDIO.bat` log or your VS Code `idf.py build` terminal trace:
\`\`\`text
[PASTE LOG DATA HERE]
\`\`\`


🏆 Project Release Wrap-UpYour software ecosystem is completely verified and documented across all phases:Visual Drag & Drop Layer: React/Next.js workspace logic.Local Transformation Engines: Automated offline Python image conversions (LVGLImage.py).Firmware Decoupling: Pristine standalone CMake/Ninja setups.Hardware Validation: Flawless, raw 63 FPS bare-metal rendering performance.Your files are optimized, structural lock-ins have been eliminated, and your storefront is configured to attract the attention and repository stars it deserves.Propose your next milestone whenever you are ready! Would you like to design a structured Contributing Guide (CONTRIBUTING.md) for managing pull requests, or start mapping out the Texture Pack V1 Background Playground layout code structures?