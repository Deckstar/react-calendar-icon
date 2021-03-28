import React from 'react';

import IconDiv from './IconDiv';
import HeaderDiv from './HeaderDiv';
import FooterDiv from './FooterDiv';
import ValueDiv from './ValueDiv';
import { CalendarIconProps, FormatFunction } from './CalendarIcon';

export interface ContentIconProps {
  theme: CalendarIconProps['theme'];
  header: ReturnType<FormatFunction>;
  value: ReturnType<FormatFunction>;
  footer: ReturnType<FormatFunction>;
}

const ContentIcon = ({ theme, header, value, footer }: ContentIconProps) => (
  <IconDiv theme={theme}>
    <HeaderDiv theme={theme}>{header}</HeaderDiv>
    <ValueDiv>{value}</ValueDiv>
    <FooterDiv theme={theme}>{footer}</FooterDiv>
  </IconDiv>
);

export default ContentIcon;
