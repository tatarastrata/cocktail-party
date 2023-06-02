import { Theme, extendTheme } from '@chakra-ui/react';
import { styleOverrides, colors } from 'styles';

const blockPadding = '2rem';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme: Partial<Theme> = extendTheme({
  config,
  styleOverrides,
  colors,
  styles: {
    global: {
      body: {
        backgroundColor: colors.blue[600],
        // color: colors.purple[100],
        color: colors.cyan[100],
        fontSize: '12px',
        height: '100%',
        width: '100%',
      },
      'div#root': {
        height: '100%',
        width: '100%',
      },
      header: {
        padding: blockPadding,
        // backgroundColor: colors.blue[50],
      },
      main: {
        // backgroundColor: colors.blue[100],
        padding: blockPadding,
        minHeight: '100%',
        width: '100%',
      },
      footer: {
        padding: blockPadding,
        // backgroundColor: colors.blue[50],
        position: 'fixed',
        bottom: 0,
      },
      section: {
        paddingBottom: '2rem',
        width: '100%',
      },
    },
  },
  fonts: {
    body: "'Roboto Mono', monospace",
    text: "'Roboto Mono', monospace",
    button: "'Roboto Mono', monospace",
    heading: "'Roboto Mono', monospace",
  },

  components: {
    HStack: {
      baseStyle: {
        flexWrap: 'wrap',
      },
    },
    Heading: {
      baseStyle: {
        flexGrow: 1,
      },
      variants: {
        h1: {
          fontSize: '3rem',
        },
        h2: {
          fontSize: '2.5rem',
        },
        h3: {
          fontSize: '2rem',
        },
        h4: {
          fontSize: '1.5rem',
        },
        h5: {
          fontSize: '1rem',
        },
        h6: {
          fontSize: '1rem',
        },
      },
    },
    // Drawer: {
    //   variants: {
    //     permanent: {
    //       dialog: {
    //         pointerEvents: 'auto',
    //       },
    //       dialogContainer: {
    //         pointerEvents: 'none',
    //       },
    //     },
    //     baseStyle: {
    //       backgroundColor: colors.white,
    //     },
    //   },
    // },
    // DrawerBody: {
    //   overrides: {
    //     backgroundColor: colors.white,
    //   },
    //   baseStyles: {
    //     color: colors.blue[900],
    //     backgroundColor: colors.white,
    //   },
    // },
  },
});
