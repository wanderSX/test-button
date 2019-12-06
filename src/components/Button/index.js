import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './Button.module.css'

const cx = classnames.bind(styles);

const Button = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    color,
    component,
    disabled,
    variant,
    ...rest
  } = props
  let Component = component
  if (Component === 'button' && rest.href) Component = 'a'
  return (
    <Component
      {...rest}
      className={cx(
        styles.main,
        styles[variant],
        {
          [styles[`${variant}-${color}`]]: color !== 'default',
          [styles.disabled]: disabled,
        },
        className
      )}
      ref={ref}
    >
      {children}
    </Component>
  );
})

Button.propTypes = {
  component: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  variant: PropTypes.oneOf(['default', 'outline', 'text']),
}

Button.defaultProps = {
  onClick: () => {},
  variant: 'default',
  component: 'button',
  color: 'default'
}

export default Button