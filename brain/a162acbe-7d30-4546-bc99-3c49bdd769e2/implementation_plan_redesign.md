# Rebranding to KD-Sora2 & Neon UI Redesign

This plan covers renaming the application to **KD-Sora2** and implementing a modern, futuristic UI with neon glows, 7-color gradients, and advanced button effects.

## User Review Required

> [!IMPORTANT]
> This change strictly affects the visual branding and aesthetics. No core functionality will be altered.

## Proposed Changes

### [Component] Rebranding (FastSora -> KD-Sora2)

- **[MODIFY] [_index.js](file:///D:/original_129_unpacked/out/main/_index.js)**: Update title logs and version-related metadata.
- **[MODIFY] [index.html](file:///D:/original_129_unpacked/out/renderer/index.html)**: Update the page title `<title>KD-Sora2</title>`.
- **[MODIFY] [index-patched.js](file:///D:/original_129_unpacked/out/renderer/assets/index-patched.js)**: Replace all UI labels, logs, and toasts.

### [Component] Neon Futurism UI

- **[MODIFY] [index.css](file:///D:/original_129_unpacked/out/renderer/assets/index-YvBX1aLr.css)** (or injected styles):
  - Define a 7-color neon gradient (Violet, Indigo, Blue, Green, Yellow, Orange, Red).
  - Implement `.neon-glow` utilities for text and boxes.
  - Implement `.future-btn` with scaling and pulsing glow effects.
  - Add a dynamic mesh/starry background with neon particles.

- **[MODIFY] [index-patched.js](file:///D:/original_129_unpacked/out/renderer/assets/index-patched.js)**:
  - Inject a custom `<style>` block at the top if CSS editing is restricted.
  - Apply new classes to main buttons and containers.

## Verification Plan

### Manual Verification
1. Launch the app and verify the title bar and UI text reflects **KD-Sora2**.
2. Verify visual effects:
   - Check if buttons have glowing neon borders.
   - Verify hover effects animate with a "future" feel (glow expansion).
   - Ensure the 7-color gradient is visible in headers or backgrounds.
