import React from 'react'
import { Button } from './styles'
import { PropTypes } from 'prop-types'
export const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  )
}

SubmitButton.PropType = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.required
}
