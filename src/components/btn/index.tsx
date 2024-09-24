import { ComponentDefinition } from '@contentful/experiences-sdk-react'

interface Props {
  text: string
}

export function Button({ text }: Props) {
  return <button>{text}</button>
}

const thumbnailUrl = 'https://images.ctfassets.net/drya7kvck7n6/7wrYr53XFL9jeOOwLvh0Sq/49d80dc701b46848be1a57157a460436/image.png'

export const buttonDefinition: ComponentDefinition = {
  id: 'button',
  name: 'Button',
  category: 'Base',
  thumbnailUrl: thumbnailUrl,
  builtInStyles: ['cfBackgroundColor'],
  tooltip: {
    // imageUrl: thumbnailUrl,
    description: 'Add a button to the canvas'
  },
  variables: {
    // there are two types of variables, content variables and design variables
    label: {
      displayName: 'Label',
      type: 'Text', //  'Text' | 'RichText' | 'Number' | 'Date' | 'Boolean' | 'Location' | 'Media' | 'Object' | 'Hyperlink' | 'Link' | 'Array';
      defaultValue: 'Click Here',
      group: 'content'
    },
    variant: {
      displayName: 'Variant',
      type: 'Text',
      defaultValue: 'primary',
      group: 'style', // Possible values: style, content
      validations: {
        in: [
          { value: 'primary', displayName: 'Primary' },
          { value: 'secondary', displayName: 'Secondary' },
          { value: 'dark', displayName: 'Dark' },
          { value: 'accent', displayName: 'Accent' }
        ]
      }
    },
    url: {
      displayName: 'URL',
      type: 'Hyperlink',
      defaultValue: '/',
      hyperlinkPattern: '/{locale}/experience/{entry.fields.slug}'
    },

    random: {
      displayName: 'Random Array Example',
      type: 'Array',
      items: {
        type: 'Link',
        validations: [
          {
            linkContentType: ['duplexSection', 'heroBanner', 'demoHero']
          }
        ],
        linkType: 'Entry'
      }
    },
    sideEffect: {
      displayName: 'Side Effect',
      type: 'Text',
      defaultValue: 'alertMe',
      group: 'style',
      validations: {
        in: [
          { value: 'alertMe', displayName: 'Open Alert' },
          { value: 'consoleLog', displayName: 'Log to console' }
        ]
      }
    },
    // bind to a string list
    listText: {
      displayName: 'List Text',
      type: 'Array'
    },
    // bind to an entry reference
    entryReference: {
      displayName: 'Entry Reference',
      type: 'Link'
    },
    // bind to a list of entries
    listReference: {
      displayName: 'List Entry Reference',
      type: 'Array'
    }
  }
}
