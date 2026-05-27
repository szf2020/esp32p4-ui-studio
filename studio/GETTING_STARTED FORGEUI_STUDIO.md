# ForgeUI Studio | Onboarding & Getting Started Guide

## Setup Your Visual LVGL v9 HMI Designer Toolchain

Welcome to **ForgeUI Studio** (internal project reference: **ForgeUI Studio**), a visual, low-code human-machine interface (HMI) designer engineered specifically for **Espressif ESP32-P4** microcontrollers running **LVGL v9**.

This onboarding guide covers local workspace deployment, installation dependencies, and the single-click build and flash initialization flow.

---

## ⚡ Technical Project Core & Current Truth

ForgeUI Studio is an actively maintained, hardware-aware visual layout builder that operates locally as an integrated development environment (IDE).

```text
Visual Layout Designer ➔ Transpiled C Code Exporter ➔ ForgeUI-One Firmware Core ➔ Physical ESP32-P4 Board
```

* **The Output Pipeline:** The React frontend parses visual layout JSON trees into native `90_Studio_Export.c` / `.h` assets.
* **The Firmware Runtime Shell:** The `/firmware/ForgeUI-One` directory contains the complete ESP-IDF development template, handling Board Support Packages (BSP), capacitive display drivers, and touch panel initialization registers out of the box.

---

## 🛠️ Required Hardware & Software Prerequisites

Before starting the setup toolchain, confirm that your host development environment has the following software packages installed:

### 1. Host Operating System & Engine Environment
* **Required Platform:** Windows 10 / 11 Desktop PC Environment.
* **Runtime Core:** [Node.js v20 LTS (or newer)](https://nodejs.org/). 
* *Post-Install Check:* Reboot your host terminal shell and verify your engine versions:
  ```bash
  node -v
  npm -v
  ```

### 2. Version Control & IDE Extensions (Highly Recommended)
* **Version System:** [Git Software Suite](https://git-scm.com/) for repository branch management and active system upgrades.
* **Code Editor:** [Visual Studio Code](https://code.visualstudio.com/) equipped with the following productivity extensions:
  - *Prettier* & *ESLint* (Style Formatting Linters)
  - *Espressif ESP-IDF Extension* (Native Microcontroller Debugging Tools)

### 3. Target Silicon Kit & SDK
* **Display Evaluation Board:** Waveshare ESP32-P4-WIFI6-Touch-LCD-7B (Pre-calibrated 1024x600 layout viewport bounds).
* **Firmware SDK:** [Espressif ESP-IDF Toolchain v5.5.4+](https://docs.espressif.com/projects/esp-idf/).

---

## 📦 System Installation & Environment Cloning

### Step 1: Clone the Local Workspace
Open your preferred terminal console window and run the standard git compilation download script:

```bash
git clone https://github.com/RTechAI/esp32p4-ui-studio.git
```

> ⚠️ **Directory Mapping Rule:** To ensure build automated paths resolve correctly, it is highly recommended to clone the project tree directly into the following local parent folder partition: `C:\ForgeUI\Projects\esp32p4-ui-studio`

### Step 2: Resolve Frontend Node Packages
Navigate explicitly into the visual interface module path and initiate the workspace installer script:

```bash
cd studio
npm install
```

*This process installs the core canvas dependencies, Chakra UI libraries, and the asset export parser. The process may take a few moments on the first execution cycle.*

---

## 🔄 Live System Execution & Process Control

ForgeUI Studio operates via local workspace background daemons to handle real-time file translation tasks seamlessly.

### Launching the Workspace Design Interface
Run the following background initialization asset script located inside the repository root directory:

```text
START_FORGEUI_STUDIO_HIDDEN.vbs
```

This background automation tool spins up your React design server, hooks the JSON compilation listener, and opens your default browser engine automatically at:

```text
http://localhost:3000
```

### Shutting Down the Background Server Daemons
When completing a design layout shift session, **do not close your browser panel manually while leaving services running**. Do not attempt to run the `.vbs` initialization link repeatedly.

To safely purge system threads, execute the following script from the root repository directory:

```text
STOP_FORGEUI_STUDIO.bat
```

*This execution instantly clears active `node.exe` system processes, frees up network socket ports, and stops the data export engine background threads safely.*

---

## 📂 Architecture Map & Monorepo Hierarchy

```text
esp32p4-ui-studio/
├── studio/                     # Drag-and-Drop Editor Canvas, Workspace Views, & LVGL C Code Gen
├── firmware/
│   └── ForgeUI-One/            # Base ESP-IDF Firmware Application Shell, Touch Register Modules, & Main BSP
├── tools/                      # Automated cross-compilers, flashing profiles, and hardware interfaces
├── docs/                       # Developer reference specs and architectural roadmap notes
├── START_FORGEUI_STUDIO.bat    # Windows foreground server console script
├── START_FORGEUI_STUDIO_HIDDEN.vbs # Background daemon initialization manager
└── STOP_FORGEUI_STUDIO.bat     # Active process kill helper utility
```

---

## 🚀 Active Feature Verification Matrix

The following structural visual features are confirmed functional on physical test setups:
* **Canvas Clamping Rules:** Strict 1024x600 fixed pixel boundary tracking mapped to the target Waveshare display size.
* **Component Manipulation:** Absolute X/Y coordinate tracking, drag-and-drop structural node rendering, and custom scaling resize handles.
* **Pipeline Synchronization:** Direct web code rendering to disk array, automatic build execution handles, and real-time screen theme deployment.

---

## 📜 Upstream Software Licensing and Open Source Attribution

ForgeUI Studio features an advanced design layout workspace forked from an upstream MIT-licensed core UI parsing toolchain created by **Premier Octet** (OpenChakra ecosystem). 

This platform completely pivots and updates that visualization architecture to target static embedded C layouts, peripheral display controller registers, and low-level **LVGL v9** memory structures. Original upstream copyright markers and framework acknowledgments remain intact inside this repository database directory.

---
**Core Platform Architect:** Scott Forster | ForgeUI Project  
**Source Repository Infrastructure:** [GitHub Portal](https://github.com/RTechAI/esp32p4-ui-studio)
