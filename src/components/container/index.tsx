import { ComponentDefinition } from '@contentful/experiences-sdk-react'

interface Props {
  slot: React.ReactNode
}

export default function Container(props: Props) {
  return <div style={{ width: '100vw', height: '200px' }}>{props.slot}</div>
}

export const ContainerDefinitaion: ComponentDefinition = {
  id: 'container',
  name: 'Container',
  category: 'Custom Component',
  builtInStyles: ['cfBackgroundColor'],
  children: true,
  slots: {
    slot: {
      displayName: 'Slot'
    }
  },
  variables: {}
}
