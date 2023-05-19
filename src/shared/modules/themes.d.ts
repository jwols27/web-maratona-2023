import {
    Palette,
    PaletteOptions,
    Breakpoint,
    PaletteColor,
    SimplePaletteColorOptions
} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        tertiary: Palette['primary'];
    }

    interface PaletteOptions {
        tertiary: PaletteOptions['primary'];
    }

    interface PaletteColor {
        darker?: string;
    }

    interface SimplePaletteColorOptions {
        darker?: string;
    }

    interface Breakpoint {}
}
