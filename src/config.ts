export interface CalendarIconTheme {
  calendarIcon: {
    textColor: string;
    primaryColor: string;
    backgroundColor: string;
  };
}

export const DEFAULT_CONFIG: CalendarIconTheme = {
  calendarIcon: {
    textColor: 'white', // text color of the header and footer
    primaryColor: '#e85650', // used as background of the header and footer
    backgroundColor: '#fafafa',
  },
};

export const themedConfig = (theme: CalendarIconTheme) => {
  const config = {
    ...DEFAULT_CONFIG.calendarIcon,
    ...(theme?.calendarIcon || {}),
  };
  return config;
};
