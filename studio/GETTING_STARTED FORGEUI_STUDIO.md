# ForgeUI Studio — GETTING STARTED

---

# FORGEUI STUDIO

ForgeUI Studio is a visual embedded UI and HMI designer focused on:

- ESP32-P4
- LVGL workflows
- embedded touchscreen UI design
- coordinate-based UI editing
- hardware-first interface design
- future direct firmware deployment

Current hardware target:

- Waveshare ESP32-P4-WIFI6-Touch-LCD-7B

Current viewport:

- 1024x600

Current project status:

**ALIVE**  
**ACTIVE DEVELOPMENT**

ForgeUI Studio is evolving from:

- responsive web tooling

toward:

- embedded HMI editor
- LVGL visual designer
- ESP32-P4 deployment platform
- embedded UI IDE/toolchain

---

# IMPORTANT CURRENT TRUTH

ForgeUI Studio is **NOT** yet a standalone firmware generator.

Current workflow:

```text
ForgeUI Studio
    ->
Generated LVGL Export
    ->
ForgeUI-One Runtime
    ->
ESP32-P4 Hardware
```

ForgeUI-One currently acts as:

- LVGL runtime shell
- ESP-IDF firmware project
- hardware execution environment
- display/touch runtime
- generated UI execution target

---

# CURRENT DEV MODE ARCHITECTURE

Current Studio operation is DEV MODE based.

The current stack uses:

- React
- NextJS
- local Node.js servers
- export bridge runtime
- hidden launcher scripts

Current startup flow:

```text
START_FORGEUI_STUDIO_HIDDEN.vbs
    ->
Studio Dev Server
    ->
Export Bridge
    ->
Browser Launch
```

Current shutdown flow:

```text
STOP_FORGEUI_STUDIO.bat
```

This stops:

- Node servers
- export bridge
- hidden background processes

---

# WHAT YOU NEED INSTALLED

Required:

- Windows PC
- Node.js
- Git (recommended)

Recommended:

- Visual Studio Code
- ESP-IDF
- ESP32-P4 hardware

---

# 1. INSTALL NODE.JS

ForgeUI Studio requires Node.js.

Download:

https://nodejs.org/

Recommended:

- Node 20 LTS or newer

IMPORTANT:

After installation:
- reboot PC
OR
- restart terminal/command prompt

Verify install:

```bash
node -v
npm -v
```

---

# 2. INSTALL GIT (RECOMMENDED)

Download:

https://git-scm.com/

Git is recommended for:

- cloning the repo
- updating Studio
- commits
- version control
- future contribution workflow

---

# 3. INSTALL VISUAL STUDIO CODE (RECOMMENDED)

Download:

https://code.visualstudio.com/

Recommended extensions:

- ES7 React snippets
- Prettier
- ESLint
- GitHub Pull Requests
- ESP-IDF Extension

---

# 4. DOWNLOAD FORGEUI STUDIO

## OPTION A — GIT CLONE

Open terminal or command prompt:

```bash
git clone https://github.com/RTechAI/esp32p4-ui-studio.git
```

Recommended location:

```text
C:\ForgeUI\Projects\
```

Example final path:

```text
C:\ForgeUI\Projects\esp32p4-ui-studio
```

---

## OPTION B — DOWNLOAD ZIP

- Download ZIP from GitHub
- Extract somewhere safe

Recommended:

```text
C:\ForgeUI\Projects\
```

---

# 5. OPEN THE PROJECT

Open folder in:

- Visual Studio Code
OR
- Windows Explorer

Recommended root:

```text
C:\ForgeUI\Projects\esp32p4-ui-studio
```

---

# 6. INSTALL PROJECT DEPENDENCIES

FIRST RUN ONLY.

Open terminal inside:

```text
studio/
```

Run:

```bash
npm install
```

This installs:

- React packages
- NextJS/Vite tooling
- Chakra UI
- OpenChakra dependencies
- ForgeUI Studio dependencies

IMPORTANT:

First install may take several minutes.

---

# 7. START FORGEUI STUDIO

Current recommended launcher:

```text
START_FORGEUI_STUDIO_HIDDEN.vbs
```

This:

- starts Studio dev server
- starts export bridge
- opens browser automatically
- hides background console windows

---

# 8. OPEN THE STUDIO

Studio should open automatically.

If not:

open browser manually:

```text
http://localhost:3000
```

---

# 9. STOP FORGEUI STUDIO

IMPORTANT:

DO NOT repeatedly relaunch the hidden VBS launcher.

Current dev mode uses hidden background Node processes.

When finished using Studio:

Run:

```text
STOP_FORGEUI_STUDIO.bat
```

This cleans up:

- node.exe
- npm processes
- export bridge
- hidden runtime processes

---

# RECOMMENDED WORKSPACE LAYOUT

Recommended structure:

```text
C:\ForgeUI\
│
├── Projects\
│   └── esp32p4-ui-studio\
│
├── Exports\
│
├── Backups\
│
└── Firmware\
```

---

# MONOREPO STRUCTURE

Current repo layout:

```text
esp32p4-ui-studio/
│
├── studio/                     # Visual editor
│
├── firmware/
│   └── ForgeUI-One/            # ESP-IDF runtime firmware
│
├── tools/                      # Flash/build helper scripts
│
├── docs/                       # Documentation
│
├── START_FORGEUI_STUDIO.bat
├── START_FORGEUI_STUDIO_HIDDEN.vbs
├── STOP_FORGEUI_STUDIO.bat
│
├── README.md
├── LICENSE
└── 01_SPINE.md
```

---

# FORGEUI-ONE RUNTIME

ForgeUI-One currently owns:

- ESP-IDF runtime
- BSP startup
- display bring-up
- touch bring-up
- LVGL lifecycle
- execution of generated Studio exports

Current export flow:

```text
ForgeUI Studio
    ->
90_Studio_Export.c
    ->
ForgeUI-One runtime
    ->
ESP32-P4 hardware
```

---

# ESP-IDF (OPTIONAL CURRENTLY)

ESP-IDF is currently recommended for:

- ESP32-P4 firmware work
- runtime debugging
- flashing hardware
- LVGL runtime development
- BSP experimentation

Download:

https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/

---

# CURRENT KNOWN-WORKING FEATURES

Working:

- embedded viewport
- fixed 1024x600 P4 workspace
- drag/drop components
- coordinate positioning
- persistent x/y placement
- persistent resize
- resize handles
- wrapper-owned interaction layer
- embedded workbench architecture
- Studio-to-runtime export proof
- hardware popup proof
- flash panel proof
- export bridge proof
- hidden launcher workflow

---

# KNOWN LIMITATIONS

Current limitations:

- active development
- not yet packaged as standalone EXE
- requires Node.js
- local dev environment required
- direct LVGL generation incomplete
- widget coverage incomplete
- flashing workflow evolving
- hidden launcher currently DEV MODE only

---

# CURRENT DEVELOPMENT DIRECTION

Current focus areas:

- UI themes/background flavours
- inspector cleanup
- widget system expansion
- export pipeline cleanup
- LVGL component generation
- flash workflow integration
- embedded tooling workflow

---

# FUTURE DIRECTION

Planned future goals:

- full LVGL code generation
- direct firmware deployment
- one-click ESP32-P4 flashing
- serial monitor integration
- packaged desktop application
- Tauri/Wails/Electron runtime shell
- integrated process manager
- embedded preview runtime
- reusable widget ecosystem
- multi-screen/page support
- hardware profile system

---

# LICENSING

ForgeUI Studio includes upstream components and licenses.

Important upstream project:

OpenChakra
- Created by Premier Octet
- MIT Licensed

Please retain upstream license notices where required.

---

# CREATED BY

ForgeUI Studio  
Created by Scott Forster

GitHub:

https://github.com/RTechAI/esp32p4-ui-studio