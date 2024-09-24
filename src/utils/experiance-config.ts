// src/registeredComponents.ts

import { defineComponents } from '@contentful/experiences-sdk-react'
import { Button, buttonDefinition } from '../components/btn'

defineComponents([
  {
    component: Button,
    definition: buttonDefinition
  }
])
