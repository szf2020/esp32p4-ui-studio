# Third-Party Open-Source Software Licenses & Attribution

This document preserves the required upstream open-source attributions, clarifies design boundaries, and details the core software components integrated within **ESP32-P4 UI Studio** (formerly *ForgeUI Studio*).

---

## 🎨 Core Layout Engine: OpenChakra

**ESP32-P4 UI Studio** is built directly on top of the OpenChakra editor engine workspace.

* **Upstream Project:** [OpenChakra GitHub Repository](https://github.com/premieroctet/openchakra)
* **Original Creator:** Premier Octet
* **License Model:** MIT License
* **Copyright Ledger:** Copyright (c) 2020 Premier Octet

### Integrated Core Framework Features
* Component-tree layout state managers and inspector control sheets.
* Absolute drag-and-drop boundary boxes and live preview element canvas renders.
* Local storage state sync layers and foundational export template architecture structures.

### Custom Embedded Engineering Extensions
The original engine has been explicitly refactored and augmented to transition away from responsive web paradigms into dedicated hardware workflows:
* **ESP32-P4 Device Tooling & Display Pipelines:** Fixed-viewport coordinate bounding for embedded screens.
* **LVGL Code Generation Translators:** Custom parsing layers that convert structural JSON trees into static C array elements.
* **HMI Kiosk Touchscreen Optimization:** Absolute pixel-coordinate element positioning replacing traditional web flexbox wrappers.

*The original MIT License requirements remain fully preserved inside the root `LICENSE` file.*

---

## 🛠️ Integrated Frontend Web Development Stack

The web-based visual layout workstation leverages the following core components under the **MIT License**:

### 1. Chakra UI
* **Project Ecosystem:** [Chakra UI Framework](https://chakra-ui.com/)
* **Implementation Profile:** Drives the editor workspace design framework, layout grids, prop editing panels, and inspector toolbars.

### 2. React
* **Project Ecosystem:** [React Documentation](https://react.dev/)
* **Implementation Profile:** Handles the virtual workspace core component tree lifecycle, front-end canvas states, and interaction listeners.

### 3. Next.js
* Project Ecosystem:** [Next.js Framework](https://nextjs.org/)
*Implementation Profile:** Provides the local development server, frontend build system, and workspace runtime environment.

### 4. React-RND
* **Project Ecosystem:** [React-RND Repository](https://github.com/bokuweb/react-rnd)
* **Implementation Profile:** Manages pixel-absolute resize interactions, real-time height/width grid transformations, and active layout handle elements.

---

## ⚙️ Custom Hardware Firmware Integration

The low-level compilation execution suite bundles the following core libraries under their respective open-source guidelines:

### 1. LVGL (Light and Versatile Graphics Library)
* **Project Ecosystem:** [LVGL Official Site](https://lvgl.io)
* **License Model:** MIT License
* **Implementation Profile:** The native embedded runtime graphics library engine processing the final generated layout outputs 

* **Implementation Profile:** Native embedded graphics runtime used to render generated LVGL user interfaces on ESP32-P4 hardware.

### 2. ESP-IDF (Espressif IoT Development Framework)
* **Project Ecosystem:** [Espressif ESP-IDF](https://github.com)
* **License Model:** Apache License 2.0
* **Implementation Profile:** Provides the base low-level compiler toolchain, Board Support Package (BSP) dependencies, MIPI-DSI peripheral controllers, 

* **Implementation Profile:** Provides the core embedded SDK, compiler toolchain, BSP integrations, peripheral drivers, and firmware build/flash environment.

---

## 🚀 Native Platform Rights & Maintenance Ledger

All custom software engineering layers, automated system orchestration files, and hardware bridging systems are written, managed, and maintained by:

### Custom Architectural Footprint
* Absolute bounding viewports mapped specifically to the **Waveshare ESP32-P4-WIFI6-Touch-LCD-7B** layout matrix.
* Generated LVGL C export files injected into the ESP-IDF runtime build pipeline.
* Local cross-origin bridge nodes running execution shells for automated background compilation scripts.

---

## ⚠️ Formal Project Notice

**ESP32-P4 UI Studio** is a completely independent derivative project. It is **NOT** officially affiliated with, endorsed by, or partnered with the upstream developers at Premier Octet or the maintainers of the original OpenChakra project repository. All upstream licenses remain the sole property of their respective creators and engineering contributors.


Developed By

Scott Forster | ForgeUI Project

📧 Contact:
forgeui.esp32@gmail.com