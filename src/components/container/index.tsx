import { ComponentDefinition } from '@contentful/experiences-sdk-react'

interface Props {
  slot: React.ReactNode
  direction: 'row' | 'column'
}

export default function Container(props: Props) {
  return <div style={{ width: '100vw', height: '200px', display: 'flex', flexFlow: props.direction }}>{props.slot}</div>
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
  variables: {
    direction: {
      displayName: 'Direction', //dropdown name
      type: 'Text',
      defaultValue: 'column',
      group: 'style', // Possible values: style, content
      validations: {
        //dropdown values
        in: [
          { value: 'row', displayName: 'Row' },
          { value: 'column', displayName: 'column' }
        ]
      }
    }
  }
}
