'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ComponentDefinition } from '@contentful/experiences-sdk-react'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionDefinition: ComponentDefinition = {
  id: 'Accordion',
  name: 'Accordion',
  category: 'Components',
  children: true,
  builtInStyles: [],
  tooltip: {
    // imageUrl: thumbnailUrl,
    description: 'Add a accordion to the canvas'
  },
  variables: {
    // there are two types of variables, content variables and design variables
    collapsible: {
      displayName: 'Collapsible ',
      type: 'Boolean', //  'Text' | 'RichText' | 'Number' | 'Date' | 'Boolean' | 'Location' | 'Media' | 'Object' | 'Hyperlink' | 'Link' | 'Array';
      defaultValue: true,
      group: 'style'
    },
    type: {
      displayName: 'Type',
      type: 'Text',
      defaultValue: 'single',
      group: 'style', // Possible values: style, content
      validations: {
        in: [
          { value: 'single', displayName: 'Single' },
          { value: 'multiple', displayName: 'Multiple' }
        ]
      }
    }
  }
}

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(
  ({ className, ...props }, ref) => <AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
)
AccordionItem.displayName = 'AccordionItem'

const AccordionItemDefinition: ComponentDefinition = {
  id: 'AccordionItem',
  name: 'Accordion Item',
  category: 'Components',
  children: true,
  builtInStyles: [],
  tooltip: {
    // imageUrl: thumbnailUrl,
    description: 'Add a accordion item to the canvas'
  },
  variables: {
    // there are two types of variables, content variables and design variables
    type: {
      displayName: 'Value',
      type: 'Text',
      group: 'content' // Possible values: style, content
    }
  }
}

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180', className)}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionTriggerDefinition: ComponentDefinition = {
  id: 'AccordionTrigger',
  name: 'Accordion Trigger',
  category: 'Components',
  builtInStyles: [],
  tooltip: {
    // imageUrl: thumbnailUrl,
    description: 'Add a accordion trigger item to the canvas'
  },
  variables: {
    // there are two types of variables, content variables and design variables
    children: {
      displayName: 'Content',
      type: 'Text',
      group: 'content', // Possible values: style, content,
      defaultValue: 'Default Content'
    }
  }
}

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
)

AccordionContent.displayName = AccordionPrimitive.Content.displayName

const AccordionContentDefinition: ComponentDefinition = {
  id: 'AccordionContent',
  name: 'Accordion Content',
  category: 'Components',
  builtInStyles: [],
  tooltip: {
    // imageUrl: thumbnailUrl,
    description: 'Add a accordion trigger item to the canvas'
  },
  variables: {
    // there are two types of variables, content variables and design variables
    children: {
      displayName: 'Content',
      type: 'Text',
      group: 'content', // Possible values: style, content,
      defaultValue: 'Default Content'
    }
  }
}

export { Accordion, AccordionDefinition, AccordionItem, AccordionItemDefinition, AccordionTrigger, AccordionTriggerDefinition, AccordionContent, AccordionContentDefinition }
