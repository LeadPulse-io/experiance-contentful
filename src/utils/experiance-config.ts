// src/registeredComponents.ts

import { defineComponents } from '@contentful/experiences-sdk-react'
import { Button } from '../components/btn'

defineComponents([
  {
    component: Button,
    definition: {
      id: 'button',
      name: 'Button',
      category: 'Custom Components',
      variables: {
        text: {
          displayName: 'Text',
          type: 'Text',
          defaultValue: 'Click me!'
        }
      }
    }
  }
])
