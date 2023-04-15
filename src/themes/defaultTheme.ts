const defaultTheme = {
  breakpoints: {
    xl: '1199px',
    lg: '991px',
    md: '767px',
    sm: '576px',
    xs: '321px'
  },
  border: {
    radius: {
      none: '0px',
      sm: '4px',
      huge: '10px',
      pill: '500px',
      circular: '50%'
    },
    width: {
      none: '0px',
      thin: '1px',
      medium: '2px',
      thick: '4px'
    }
  },
  colors: {
    brand: {
      primary: {
        pure: '#063EF9',
        ultraLight: '',
        light: '',
        dark: '',
        darker: '#1F2044',
        darkest: ''
      },
      secondary: {
        pure: '#FAB805',
        ultraLight: '',
        light: '#FFE885',
        dark: '',
        darker: '',
        darkest: ''
      },
      tertiary: {
        pure: '#FF9442',
        ultraLight: '',
        light: '#FFA464',
        dark: '#F67922',
        darker: '',
        darkest: ''
      }
    },
    neutral: {
      low: {
        pure: '#4A4A4A',
        light: '#959EA3',
        medium: '#707070',
        dark: '#363636',
        darkest: '#08081C'
      },
      high: {
        pure: '#FCFCFC',
        light: '#F1F3F6',
        medium: '#EFF0F6',
        dark: '#A6B6CC',
        darker: '#7C90AA'
      }
    },
    feedback: {
      active: {
        pure: '#30B47A',
        ultraLight: '#BAE6D3',
        light: '#35CF8B',
        medium: '#227C55'
      },
      problem: {
        pure: '#FC3C2B',
        ultraLight: '',
        light: '#F16A5E',
        medium: '#DA4336'
      },
      cancelled: {
        pure: '#CDD8DF',
        light: '#F6F6F9',
        medium: '#A6B6CC',
        dark: '#7C90AA'
      }
    },
    special: {}
  },
  font: {
    weights: {
      bold: 700,
      medium: 500,
      regular: 400
    }
  },
  transitions: {
    durations: {
      fast: '100ms',
      default: '200ms',
      slow: '400ms'
    },
    easings: {
      out: 'ease-in-out',
      in: 'ease-in',
      elastic: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)'
    }
  }
} as const;

export default defaultTheme;
