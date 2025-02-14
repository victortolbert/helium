---
title: Design
---


# { $doc.title }

<!-- CARD Sort  -->

- Alpha
- Aspect Ratio
- Background
- Balance
- Border
- Brightness
- Color
- Container
- Tabs
- Tabs Header
- Callout
- Button
- Safety Bar
- Navigation
- Columns
- Table
- Formulary
- Video
- Text
- Contrast
- Font
- Font Weight
- Gradient
- Grid
- Hue
- Iconography
- Image
- Kerning
- Leading
- Lightness
- Line-Height
- Saturation
- Scale
- Scale
- Shade
- Texture
- Tint
- Tone
- Stroke
- Fill
- Drop Shadow
- Inner Shadow
- Layer Blur
- Background Blur
- Typeface
- Typography

## Color Tokens

```js
color: {
  primary: {
    main: "#007AFF", // Example: A vibrant blue
    contrast: "#FFFFFF", // Text color that works well on primary
    50: "#E3F2FD", // Lighter shade for backgrounds, hovers, etc.
    100: "#BBDEFB",
    200: "#90CAF9",
    // ... other shades up to 900
  },
  secondary: {
    main: "#FFC107",  // Example: A golden yellow
    contrast: "#000000", // Text color for secondary
    50: "#FFF9C4",
    // ... other shades
  },
  accent: {  // Or tertiary, if you have a third main color
    main: "#4CAF50", // Example: A green
    contrast: "#FFFFFF",
    // ... shades
  },
  neutral: { // For grays and off-whites
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    // ... up to 900 for dark grays
  },
  error: "#FF0000", // Or a more specific error color
  success: "#4CAF50", // Or a more specific success color
  warning: "#FF9800", // Or a more specific warning color
  info: "#2196F3", // Or a more specific info color
  background: "#FFFFFF", // Default background color
  surface: "#FAFAFA", // Slightly different surface color for cards, modals, etc.
  text: {
    primary: "#212121", // Dark text for most cases
    secondary: "#757575", // Lighter text for captions, etc.
    disabled: "#BDBDBD", // Grayed-out text
  },
  // ... any other semantic color names you need (e.g., "link," "border")
}
```

**Key Improvements for Color:**

- **Semantic Names:**  Using names like `primary`, `secondary`, `error`, `success` makes the colors' purpose clear.
- **Shade Variations:**  Providing a range of shades (50-900) for each color allows for flexibility in different UI states (hover, active, disabled, etc.).
- **Contrast Colors:**  Including `contrast` values makes it easy to ensure accessible text on different backgrounds.  This is *crucial* for accessibility.
- **Categorization:** Grouping colors into categories (primary, neutral, etc.) improves organization.
- **Figma Integration:**  These names can be directly mirrored in your Figma styles.  Use Figma plugins to help sync or export these values.

**Typography Tokens:**

```js
const data = {
  typography: {
    fontFamily: {
      base: "Roboto, sans-serif", // Your primary font stack
      heading: "Montserrat, sans-serif", // Example: A different font for headings
      mono: "Courier New, monospace", // For code or preformatted text
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      h1: "32px",
      h2: "24px",
      h3: "20px",
      // ... other sizes
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
    },
    lineHeight: {
      base: "1.5", // Or specific values for different font sizes
      heading: "1.2",
    },
    letterSpacing: { // Kerning
      normal: "0",
      tight: "-0.02em",
      wide: "0.05em",
    },
    // ... other typography properties (e.g., textDecoration, textTransform)
  }
}
```

**Key Improvements for Typography:**

- **Font Families:**  Define font stacks for different purposes (base, headings, code).
- **Font Sizes:**  Use a scale (xs, sm, base, lg, xl) or semantic names (h1, h2, etc.) for font sizes.  This is *much* better than arbitrary pixel values.
- **Font Weights:**  Use named weights (regular, medium, bold) instead of numeric values directly in your CSS.
- **Line Height and Letter Spacing:**  Provide values for these essential properties.
- **Figma Integration:**  Again, mirror these names and values in your Figma text styles.  Plugins can help with syncing.

**General Best Practices for Tokens:**

- **Single Source of Truth:** Figma should be your single source of truth for design tokens.  Use plugins or scripts to export these tokens in a format your code can use (JSON, JavaScript, etc.).
- **Version Control:** Treat your design tokens like code.  Use version control (Git) to track changes.
- **Automated Updates:**  Set up a process to automatically update your code with the latest tokens from Figma.  This will prevent design-dev mismatches.
- **Documentation:**  Clearly document all your design tokens, including their purpose and usage.  Your design documentation site is the perfect place for this!
- **Naming Conventions:**  Use consistent and descriptive names for your tokens.  A well-defined naming convention is essential for maintainability.
