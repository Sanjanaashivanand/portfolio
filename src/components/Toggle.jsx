import React from 'react'
import './Toggle.css'

export const Toggle = ({handleChange, isChecked}) => {
  return (
    <div className='toggle-container'>
 <input
    type="checkbox"
    id="check"
    className="toggle-input"
    onChange={handleChange}
    checked={isChecked}
 />
 <label htmlFor="check" className="toggle-label">
    {isChecked ? "" : ""}
 </label>
</div>
  )
}
