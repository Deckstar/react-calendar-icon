import React from 'react';
import PropTypes from 'prop-types';

import IconDiv from './IconDiv';
import HeaderDiv from './HeaderDiv';
import FooterDiv from './FooterDiv';
import ValueDiv from './ValueDiv';
import { FormatFunction } from './CalendarIcon';

export interface ContentIconProps {
  header: ReturnType<FormatFunction>;
  value: ReturnType<FormatFunction>;
  footer: ReturnType<FormatFunction>;
}

const ContentIcon = ({ header, value, footer }: ContentIconProps) => (
  <IconDiv>
    <HeaderDiv>{header}</HeaderDiv>
    <ValueDiv>{value}</ValueDiv>
    <FooterDiv>{footer}</FooterDiv>
  </IconDiv>
);

ContentIcon.propTypes = {
  header: PropTypes.any,
  footer: PropTypes.any,
  value: PropTypes.any,
};

export default ContentIcon;
