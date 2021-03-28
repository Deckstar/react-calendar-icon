import React from 'react';
import PropTypes from 'prop-types';

import ContentIcon from './ContentIcon';
import { CalendarIconTheme } from '../config';

export interface CalendarOptions {
  locale: Parameters<Date['toLocaleString']>[0];
  header: Intl.DateTimeFormatOptions;
  value: Intl.DateTimeFormatOptions;
  footer: Intl.DateTimeFormatOptions;
}

export const defaultOptions: CalendarOptions = {
  header: { weekday: 'long' },
  footer: { month: 'long' },
  value: { day: '2-digit' },
  locale: [],
};

export type FormatFunction = (
  date: Date,
  locale: CalendarOptions['locale'],
  formatOptions: Intl.DateTimeFormatOptions
) => string;

const formatDate: FormatFunction = (date, locale, formatOptions) => {
  const d = new Date();
  const a = d.toLocaleString();
  return date.toLocaleDateString(locale, formatOptions);
};

export interface CalendarIconProps {
  date: Date;
  theme: CalendarIconTheme;
  options: CalendarOptions;
}

const CalendarIcon = ({ date, theme, options }) => (
  <ContentIcon
    header={
      options
        ? formatDate(date, options.locale, options.header)
        : formatDate(date, defaultOptions.locale, defaultOptions.header)
    }
    value={
      options
        ? formatDate(date, options.locale, options.value)
        : formatDate(date, defaultOptions.locale, defaultOptions.value)
    }
    footer={
      options
        ? formatDate(date, options.locale, options.footer)
        : formatDate(date, defaultOptions.locale, defaultOptions.footer)
    }
  />
);

CalendarIcon.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  theme: PropTypes.object,
  options: PropTypes.object,
};

export default CalendarIcon;
