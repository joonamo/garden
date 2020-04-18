import * as React from 'react'
import classNames from 'classnames'

export const ActionButton = (props: { action: () => void, text: string, disabled?: boolean }) => {
  return <div className="control">
    <button
      className={classNames(
        'button',
        'is-danger',
        'scaling-button',
        'is-marginless',
        'is-fullwidth',
        props.disabled ? 'is-loading' : null)}
      onClick={props.action}
      disabled={props.disabled}>
      {props.text}
    </button>
  </div>
}