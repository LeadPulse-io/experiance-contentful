'use client'

import { ComponentDefinition } from '@contentful/experiences-sdk-react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

import { Chip } from '@nextui-org/react'
import Link from 'next/link'

export interface Props extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVars> {
  label: string
  listText: any[]
  sideEffect?: 'alertMe' | 'consoleLog'
  className?: string
  url?: string
  random: any
}

export function Button({ label, className, sideEffect, random, url, listText, variant = 'primary', ...ctflProps }: Props) {
  const handleClick = () => {
    if (sideEffect === 'alertMe') {
      alert('You clicked on me')
    } else {
      console.log('You clicked on me but ama log this')
    }
  }

  if (url) {
    return (
      <Link href={url}>
        <div className={cx(className, buttonVars({ variant }))}>{label}</div>
      </Link>
    )
  }

  return (
    <button onClick={handleClick} className={cx(className, buttonVars({ variant }))} {...ctflProps}>
      hello
      {listText &&
        listText?.map((txt, txidx) => {
          return <Chip key={txidx}>Chip</Chip>
        })}
      {label}
    </button>
  )
}

const buttonVars = cva('base-btn ', {
  variants: {
    variant: {
      primary: 'btn-primary',
      secondary: 'btn-secondary'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

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
      displayName: 'Font-Family', //dropdown name
      type: 'Text',
      defaultValue: 'font-roboto',
      group: 'style', // Possible values: style, content
      validations: {
        //dropdown values
        in: [
          { value: 'font-roboto', displayName: 'Roboto' },
          { value: 'font-sans', displayName: 'Sans' },
          { value: 'font-open-sans', displayName: 'Open Sans' },
          { value: 'font-halvetica', displayName: 'Halvatica' }
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
