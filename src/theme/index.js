const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#2B3939',
    primary: 'hsl(180, 29%, 50%)',
    neutral: [
      'hsl(180, 52%, 96%)',
      'hsl(180, 31%, 95%)',
      'hsl(180, 8%, 52%)',
      'hsl(180, 14%, 20%)',
    ],
  },
  typography: {
    fontFamily: 'Spartan',
    fontWeight: {
      normal: '500',
      semiBold: '600',
      bold: '700',
    },
  },
  breakpoints: {
    sm: '@media (max-width: 640px)',
    md: '@media (max-width: 768px)',
    lg: '@media (max-width: 1024px)',
    xl: '@media (max-width: 1280px)',
  },
}

export default theme
