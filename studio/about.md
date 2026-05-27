# About ForgeUI Studio

## Visual LVGL UI Builder & Embedded Deployment Platform for ESP32-P4

ForgeUI Studio is a visual embedded UI builder designed for ESP32-P4 touchscreen hardware running LVGL and ESP-IDF.

The project bridges browser-based UI design with native embedded hardware deployment by allowing developers to:

* Visually design touchscreen interfaces
* Preview layouts in the browser
* Generate native LVGL C code
* Build and flash directly to ESP32-P4 hardware

ForgeUI Studio focuses on:

* Industrial HMIs
* Embedded dashboards
* Touchscreen control systems
* Kiosk interfaces
* Machine displays
* ESP32-P4 UI workflows

---

## Core Workflow

Visual Design  
↓  
Browser Preview  
↓  
LVGL C Export  
↓  
ESP-IDF Build  
↓  
ESP32-P4 Flash  
↓  
Live Hardware Rendering

---

## Current Features

* Browser Preview V1
* Preview-to-P4 widget parity workflow
* Native LVGL export generation
* ESP-IDF flashing pipeline
* Shared embedded theme system
* Theme-aware widgets
* Real ESP32-P4 hardware validation
* Interactive widgets running on hardware

---

## Supported Widget Types

* Text
* Button
* Input
* Textarea
* Switch
* Checkbox
* Radio
* Slider
* Progress
* CircularProgress
* NumberInput
* Select
* Box
* Image placeholders

---

## Theme System V1

ForgeUI Studio includes a shared theme contract system powering:

* Browser Preview
* Generated LVGL
* ESP32-P4 hardware runtime

### Shared Theme Tokens

* bg
* surface
* surface2
* border
* text
* accent

### Proven Theme Packs

* Reactor Dark
* Graphite
* Nordic Blue
* Military Green
* Cyber Teal
* Forge Orange
* Nebula Purple
* OLED Black
* Matrix Green
* Carbon Red
* Arctic Ice
* Industrial Steel
* Lava Core
* Blueprint
* Toxic Lime

---

## Hardware Target

Primary hardware target:

Waveshare ESP32-P4-WIFI6-Touch-LCD-7B  
1024x600  
LVGL v9  
ESP-IDF v5.5+

---

## Project Direction

ForgeUI Studio aims to reduce the complexity of embedded LVGL development by combining:

* Visual editing
* Preview workflows
* Native LVGL generation
* Embedded firmware deployment
* Real hardware validation

into a single coordinated workflow platform.

---

## Open Source Attribution

ForgeUI Studio builds on an upstream MIT-licensed editor engine originally developed by Premier Octet.

This project expands and pivots that engine toward embedded touchscreen workflows, ESP32-P4 hardware deployment, and LVGL application generation.

Original upstream licensing and attribution remain preserved within this repository.

---

## Created By

Scott Forster  
ForgeUI Project

forgeui.esp32@gmail.com