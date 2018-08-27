import React from 'react'
import { Image } from 'semantic-ui-react'

import mustache from '../../images/mr-mustache-white.svg'

const Logo = () => (
  <Image
    size="mini"
    src={mustache}
    style={{ marginRight: '1.5em' }}
    alt="Mustache Logo"
  />
)

export default Logo
