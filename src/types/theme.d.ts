import { type TypographyStyleOptions } from "@mui/material/styles/createTypography";
import { type CSSProperties } from "react";
interface CustomBackgroundColor {
  strong: string;
  muted: string;
  onSubtle: string;
  subtle: string;
  surface: string;
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    "hero-large": CSSProperties;
    "hero-medium": CSSProperties;

    "header-4x-large": CSSProperties;
    "header-3x-large": CSSProperties;
    "header-x-large": CSSProperties;
    "header-large": CSSProperties;
    "header-medium": CSSProperties;
    "header-small": CSSProperties;

    "body-large": CSSProperties;
    "body-medium": CSSProperties;
    "body-small": CSSProperties;
    "body-x-small": CSSProperties;
    "body-strong-large": CSSProperties;
    "body-strong-medium": CSSProperties;
    "body-strong-small": CSSProperties;
    "body-strong-2x-small": CSSProperties;
  }
  interface TypographyVariantsOptions {
    "hero-large": TypographyStyleOptions;
    "hero-medium": TypographyStyleOptions;

    "header-4x-large": TypographyStyleOptions;
    "header-3x-large": TypographyStyleOptions;
    "header-x-large": TypographyStyleOptions;
    "header-large": TypographyStyleOptions;
    "header-medium": TypographyStyleOptions;
    "header-small": TypographyStyleOptions;

    "body-large": TypographyStyleOptions;
    "body-medium": TypographyStyleOptions;
    "body-small": TypographyStyleOptions;
    "body-x-small": TypographyStyleOptions;
    "body-strong-large": TypographyStyleOptions;
    "body-strong-medium": TypographyStyleOptions;
    "body-strong-small": TypographyStyleOptions;
    "body-strong-2x-small": TypographyStyleOptions;
  }
  interface BreakpointOverrides {
    "2xs": true;
    "2xl": true;
    "3xl": true;
    tablet: true;
  }

  //content color interface
  interface TypeText {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    neutral: ContentColor;
    informative: ContentColor;
    positive: ContentColor;
    warning: ContentColor;
    negative: ContentColor;
    brand: ContentColor;
  }

  interface PaletteBackground {
    inverted: string;
    readonly: string;
  }

  interface CustomColor {
    "-4": string;
    "-3": string;
    "-2": string;
    "-1": string;
    "0": string;
    main: string;
    "+1": string;
    "+2": string;
    "+3": string;
    "+4": string;
    "+5": string;
    "+6": string;
    "+7": string;
    "+8": string;
  }

  type BorderActionColor = {
    strong: string;
    subtle: string;
  };

  type ContentColor = {
    primary: string;
    secondary: string;
  };

  interface CustomBorderColor {
    primary: string;
    secondary: string;
    disabled: string;
    neutral: BorderActionColor;
    informative: BorderActionColor;
    positive: BorderActionColor;
    warning: BorderActionColor;
    negative: BorderActionColor;
    brand: BorderActionColor;
  }

  interface CustomActionColor {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    neutral: ContentColor;
    informative: ContentColor;
    positive: ContentColor;
    warning: ContentColor;
    negative: ContentColor;
    brand: ContentColor;
  }

  interface CustomInteractionColor {
    normal: string;
    hover: string;
    active: string;
    selected?: string;
    subtleNormal: string;
    subtleHover: string;
    subtleActive: string;
    subtleSelected?: string;
  }

  interface Palette {
    brand: CustomColor;
    neutral: CustomColor;
    positive: CustomColor;
    warn: CustomColor;
    negative: CustomColor;
    border: CustomBorderColor;
    background: {
      default: string;
      inverted: string;
      readonly: string;
      neutral: CustomBackgroundColor;
      informative: CustomBackgroundColor;
      positive: CustomBackgroundColor;
      warning: CustomBackgroundColor;
      negative: CustomBackgroundColor;
      brand: CustomBackgroundColor;
    };
    interaction: {
      default: CustomInteractionColor;
      neutral: CustomInteractionColor;
      alert: CustomInteractionColor;
      disabled: CustomInteractionColor;
      border: {
        normal: string;
        hover: string;
        active: string;
        selected: string;
        neutralNormal: string;
        neutralHover: string;
        neutralActive: string;
        neutralSelected?: string;
        alert: string;
      };
    };
  }

  interface PaletteOptions {
    border: CustomBorderColor;
    background: {
      default: string;
      inverted: string;
      readonly: string;
      neutral: CustomBackgroundColor;
      informative: CustomBackgroundColor;
      positive: CustomBackgroundColor;
      warning: CustomBackgroundColor;
      negative: CustomBackgroundColor;
      brand: CustomBackgroundColor;
    };
    brand: CustomColor;
    neutral: CustomColor;
    positive: CustomColor;
    negative: CustomColor;
    warn: CustomColor;
    interaction: {
      default: CustomInteractionColor;
      neutral: CustomInteractionColor;
      alert: CustomInteractionColor;
      disabled: CustomInteractionColor;
      border: {
        normal: string;
        hover: string;
        active: string;
        selected: string;
        neutralNormal: string;
        neutralHover: string;
        neutralActive: string;
        neutralSelected?: string;
        alert: string;
      };
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "hero-large": true;
    "hero-medium": true;

    "header-4x-large": true;
    "header-3x-large": true;
    "header-x-large": true;
    "header-large": true;
    "header-medium": true;
    "header-small": true;

    "body-large": true;
    "body-medium": true;
    "body-small": true;
    "body-x-small": true;
    "body-strong-large": true;
    "body-strong-medium": true;
    "body-strong-small": true;
    "body-strong-2x-small": true;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    inverted: string;
    readonly: string;
    neutral: CustomBackgroundColor;
    informative: CustomBackgroundColor;
    positive: CustomBackgroundColor;
    warning: CustomBackgroundColor;
    negative: CustomBackgroundColor;
    brand: CustomBackgroundColor;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    brand: true;
    neutral: true;
    positive: true;
    negative: true;
    warn: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    brand: true;
    neutral: true;
    positive: true;
    warn: true;
    negative: true;
  }
}
