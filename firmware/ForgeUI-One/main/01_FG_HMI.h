#pragma once

#ifdef __cplusplus
extern "C" {
#endif

// ============================================================
// ForgeUI One HMI
// ============================================================
//
// File:
// 01_FG_HMI.h
//
// Created by:
// Scott Forster
//
// Purpose:
// Lightweight single-screen LVGL shell.
//
// Responsibilities:
// - root screen ownership
// - global screen styling
// - optional header layer
// - launch Home screen
//
// Rules:
// - no tabs
// - no routing
// - no workflow ownership
// - no hardware ownership
//
// Global system ownership belongs in:
//
//   00_ForgeUI_Config.h
//
// ============================================================

// ============================================================
// HMI Init
// ============================================================

void fg_hmi_init(void);

#ifdef __cplusplus
}
#endif