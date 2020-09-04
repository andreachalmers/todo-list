import React, { useState } from 'react'
import { Radio } from 'semantic-ui-react'
import styled from 'styled-components'

export const CustomRadio = ({ label }) => {
  const [checked, setChecked] = useState(false)

  const toggle = () => {
    checked ? setChecked(false) : setChecked(true)
  }

  return (
    <Radio
      label={label}
      onChange={toggle}
      checked={checked}
      onClick={toggle}
    />
  )
}

export default styled(CustomRadio)`
  && {display: inline-block;}
`;