import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const Panel = ({
  children,
  title,
  align,
  styleHead,
  styleBody,
  withBorder,
}) => {
  const isPanelWithBorder = withBorder
    ? 'panel-heading-with-border'
    : 'panel-heading'
  const isPanelBlock = withBorder ? 'panel-block-with-border' : 'panel-block'

  return (
    <nav className={classNames(styles.panel, styles['is-reveal-box'])}>
      <p
        className={classNames(styles[isPanelWithBorder], {
          [styles[`has-text-${align}`]]: align,
        })}
        style={styleHead}
      >
        {title}
      </p>
      <div className={classNames(styles[isPanelBlock])} style={styleBody}>
        {children}
      </div>
    </nav>
  )
}

const Footer = ({ children, align, style }) => (
  <footer className={classNames(styles.footer)}>
    <div
      className={classNames(styles.content, {
        [styles[`has-text-${align}`]]: align,
      })}
      style={style}
    >
      {children}
    </div>
  </footer>
)

Panel.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  align: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  styleHead: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  styleBody: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  withBorder: PropTypes.bool,
  children: PropTypes.node,
}

Footer.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
}

export { Panel, Footer }
