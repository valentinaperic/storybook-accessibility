import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * <h3 class="overview-title">Accessibility Overview</h3>
 * - background color must pass contrast testing. a tool to use: https://webaim.org/resources/contrastchecker/
 * - hover and active states must pass contrast testing.
 * - an onClick must have an equivalent keypress handler
 * - tabindex="0" helps the button be reachable by keyboard
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      tabIndex="0"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use? Must pass color contrast testing.
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents. if icon is used, then a meaningful label needs to be attached to it.
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler. If click handler is used, an equivalent keyboard handler must be used as well.
   */
  onClick: PropTypes.func,
  /**
   * Optional keyboard handler. 
   */
  onKeyDown: PropTypes.func

};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  onKeyDown: undefined
};
