import * as React from 'react'
import classNames from 'classnames'

export const ActionButton = (props: {
  action: () => void
  text: string
  disabled?: boolean
  loading?: boolean
  styleOverride?: string
}) => {
  return <div className="control">
    <button
      className={classNames(
        'button',
        props.styleOverride ?? 'is-danger',
        'scaling-button',
        'is-marginless',
        'is-fullwidth',
        props.loading ? 'is-loading' : null)}
      onClick={props.action}
      disabled={props.disabled}>
      {props.text}
    </button>
  </div>
}