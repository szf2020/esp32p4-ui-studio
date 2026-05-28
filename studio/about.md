# About ForgeUI Studio

## Open-Source Visual LVGL v9 GUI Builder & Embedded Display Platform

**ForgeUI Studio** is a low-code visual HMI layout engine and automated firmware deployment platform engineered specifically for **Espressif ESP32-P4** touchscreen hardware running **LVGL v9** and **ESP-IDF**.

The platform eliminates the guesswork from embedded graphics programming. It bridges browser-based UI prototyping with production-grade microcontroller hardware deployment, empowering systems engineers, IoT developers, and UX designers to:

* **Design Visually:** Build responsive touchscreen user interfaces via a drag-and-drop web builder canvas.
* **Preview Accurately:** Validate layout proportions, scaling, and interactive states in real time.
* **Generate Native Code:** Export clean, production-ready static LVGL v9 C files automatically.
* **Flash Instantly:** Compile and flash binaries directly onto your physical ESP32-P4 development board with one click.

### High-Value Embedded Application Focus
ForgeUI Studio is highly optimized for developing mission-critical hardware interfaces, including:
* **Industrial HMI Panels** & Machine Automation Displays
* **IoT Embedded Dashboards** & Smart Home Controllers
* **Medical Device UIs** & Laboratory Monitors
* **Interactive Kiosk Interfaces** & Retail Vending Screens
* **Automotive Digital Cluster** Prototyping

---

## The Coordinated Toolchain Workflow

ForgeUI Studio accelerates the traditional embedded development loop by establishing a unified visual pipeline:

```text
Visual UI Designer ➔ Real-Time Preview ➔ Clean LVGL C Export ➔ Automated ESP-IDF Build ➔ Native USB Flashing ➔ Physical LCD Rendering
``



## Standalone ESP-IDF Export Pipeline V1

ForgeUI Studio now supports exporting fully standalone ESP-IDF firmware projects directly from the visual editor environment.

This allows generated projects to:
* build independently from ForgeUI Studio
* open directly in Visual Studio Code with the ESP-IDF extension
* rebuild from a clean state
* flash independently to ESP32-P4 hardware
* function as portable/shareable firmware projects

### Proven Runtime Export Flow

```text
ForgeUI Studio
  ↓
Generate Native LVGL Runtime
  ↓
Export Standalone ESP-IDF Project
  ↓
Open Independently In VS Code
  ↓
ESP-IDF Reconfigure
  ↓
Full Clean Build
  ↓
Flash
  ↓
Boot Successfully On Physical ESP32-P4 Hardware
```

### Export Architecture Separation

ForgeUI Studio intentionally separates:
* visual UI generation
* preview rendering
* export orchestration

from:
* BSP ownership
* hardware runtime ownership
* LVGL lifecycle management
* ESP-IDF infrastructure

Generated projects inject only:
```text
90_Studio_Export.c
90_Studio_Export.h
```

into the ForgeUI-One runtime shell.

This architecture keeps exports:
* lightweight
* portable
* reproducible
* hardware-focused
* stable across rebuilds
---

## Core Technical Features

* **WYSIWYG Browser Preview V1:** Real-time layout testing before running heavy local compiler chains.
* **Preview-to-P4 Pixel Parity:** Drastically minimizes visual discrepancies between the web preview canvas and target LCD panels.
* **Automated C Code Generator:** Outputs structural layout code and UI states into highly performant static assets.
* **Integrated Flashing Utilities:** Native command-line scripts compile and upload build artifacts directly through the local server backend.
* **Hardware-Aware Theme System:** Syncs unified color tokens across development, simulation, and bare-metal runtimes.
* **Interactive Touch Execution:** Visualized elements respond immediately to touch telemetry inputs upon hardware deployment.

---

## Fully Mapped LVGL v9 Core Components

The following UI widgets are structurally mapped across the entire layout compiler stack (**Canvas ➔ Preview ➔ C Artifacts ➔ ESP32-P4 Hardware**):

* **Typography & Containers:** Text Fields, Box Components, Image Placeholders
* **Actionable Controls:** Interactive Buttons, Responsive Sliders, Toggle Switches, Checkboxes, Radio Nodes
* **Data Input UI:** Textarea Blocks, NumberInput Adjusters, Dropdown Select Lists
* **Status Monitors:** Progress Bars, Circular Progress Loaders

---

## Synchronized Embedded Theme System

ForgeUI Studio utilizes a shared structural theme contract system to maintain color-palette continuity between environments using unified tokens: `bg`, `surface`, `surface2`, `border`, `text`, and `accent`.

### Out-of-the-Box Aesthetic Profiles
The studio features 15 pre-configured embedded display style packs:

* *Matrix Green (System Default)*, Reactor Dark, Graphite, Nordic Blue, Military Green, Cyber Teal, Forge Orange, Nebula Purple, OLED Black, Carbon Red, Arctic Ice, Industrial Steel, Lava Core, Blueprint, and Toxic Lime.

---

## Primary Hardware Target Specifications

Out-of-the-box configuration files are pre-calibrated to deliver immediate compatibility with mainstream high-end evaluation kits:

* **Target Microcontroller:** Espressif ESP32-P4 (High-Performance Dual-Core RISC-V SoC)
* **Development Hardware:** Waveshare ESP32-P4-WIFI6-Touch-LCD-7B
* **Physical Display Panel:** 1024x600 high-resolution capacitive touch panel
* **Embedded Graphics Framework:** LVGL v9 Graphics Stack
* **Microcontroller SDK:** Espressif ESP-IDF v5.5.4 (or newer)

### Proven Export Validation Baseline
* **ESP-IDF Version:** `v5.5.4`
* **Target MCU:** `esp32p4`
* **UART/JTAG Mode:** `UART`
* **Validation Method:** `Full Clean → Build → Flash`
* **Standalone Export Build Status:** VERIFIED
---

## Vision and Project Direction

Traditional embedded user interface workflows require slow, code-heavy iterations—manually tweaking coordinate matrices, compiling, flashing, and re-testing. ForgeUI Studio removes this complexity. 

By unifying **visual asset management**, **hardware-aware layout canvas checks**, **clean LVGL C transpiling**, and **direct embedded deployment script triggers** into a singular IDE platform, we make prototyping next-generation ESP32-P4 visual displays lightning-fast and accessible.

---

## Open Source Licensing and Attribution

**ForgeUI Studio** is an advanced, hardware-adapted fork of the open-source editor engine originally created by *Premier Octet*. 

This project completely refactors and pivots the core visual canvas mechanics to serve embedded touchscreen layouts, low-level ESP32-P4 hardware register workflows, and optimized static LVGL component generation. The upstream MIT license models and author attributions are strictly maintained inside this workspace repository.

---

### Project Maintainer
**Scott Forster** | ForgeUI Project  
📧 Email: [forgeui.esp32@gmail.com](mailto:forgeui.esp32@gmail.com)
