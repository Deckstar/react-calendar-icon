import React from 'react';
import PropTypes from 'prop-types';

import ContentIcon from './ContentIcon';
import { CalendarIconTheme } from '../config';

export interface CalendarOptions {
  locale?: Parameters<Date['toLocaleString']>[0];
  header?: Intl.DateTimeFormatOptions;
  value?: Intl.DateTimeFormatOptions;
  footer?: Intl.DateTimeFormatOptions;
}

export const defaultOptions: Required<CalendarOptions> = {
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
  return date.toLocaleDateString(locale, formatOptions);
};

export interface CalendarIconProps {
  date: Date;
  theme?: CalendarIconTheme;
  options?: CalendarOptions;
}

const CalendarIcon = ({ date, theme, options }: CalendarIconProps) => {
  const { locale, header, value, footer } = options || {};
  const {
    locale: defaultLocaleOption,
    header: defaultHeaderOption,
    value: defaultValueOption,
    footer: defaultFooterOption,
  } = defaultOptions;

  return (
    <ContentIcon
      theme={theme}
      header={formatDate(
        date,
        locale || defaultLocaleOption,
        header || defaultHeaderOption
      )}
      value={formatDate(
        date,
        locale || defaultLocaleOption,
        value || defaultValueOption
      )}
      footer={formatDate(
        date,
        locale || defaultLocaleOption,
        footer || defaultFooterOption
      )}
    />
  );
};

CalendarIcon.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarIcon;
