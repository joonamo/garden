import * as React from 'react'
import { appViewModel } from './AppViewModel'

export const NameEntry = () => {
  const textRef = React.useRef<HTMLInputElement>(null)
  const onClick = () => {
    appViewModel.setPlayerName(textRef.current?.value ?? '')
  }

  return <>
    <div className="dummy" />
    <div className="box">
      <label className="label is-large">Enter your name</label>
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" maxLength={15} placeholder="..." ref={textRef} />
        </div>
        <div className="control" onClick={onClick}>
          <button className="button is-info">
            OK!
          </button>
        </div>
      </div>
    </div>
    <div className="dummy" />
  </>
}