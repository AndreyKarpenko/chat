import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';
import {Button as BaseButton} from 'antd';

import './Button.scss';

const Button = (props) => <BaseButton
  className={classNames('button', props.className, {'button--large': props.size === 'large'})} {...props}/>;

Button.propTypes = {
  className: Proptypes.string
};

export default Button;
