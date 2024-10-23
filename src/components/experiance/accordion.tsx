'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ComponentDefinition } from '@contentful/experiences-sdk-react'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

const Accordion = (props: any) => (
  <AccordionPrimitive.Root {...props} style={{ minHeight: '400px', minWidth: '100%' }}>
    {props.childrenSlot1}
  </AccordionPrimitive.Root>
)

const AccordionDefinition: ComponentDefinition = {
  id: 'Accordion',
  name: 'Accordion',
  children: true,
  builtInStyles: [],
  slots: {
    childrenSlot1: {
      displayName: 'Slot 1'
    }
  },
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

const AccordionItem = ({ className, childrenSlot2, ...props }: any) => (
  <AccordionPrimitive.Item className={cn('border-b', className)} {...props}>
    {childrenSlot2}
  </AccordionPrimitive.Item>
)

const AccordionItemDefinition: ComponentDefinition = {
  id: 'AccordionItem',
  name: 'Accordion Item',
  children: true,
  builtInStyles: [],
  tooltip: {
    // imageUrl: thumbnailUrl,
    description: 'Add a accordion item to the canvas'
  },
  slots: {
    childrenSlot2: {
      displayName: 'Slot 2'
    }
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

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, any>(({ className, childrenSlot2, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180', className)}
      {...props}
    >
      {childrenSlot2}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionTriggerDefinition: ComponentDefinition = {
  id: 'AccordionTrigger',
  name: 'Accordion Trigger',
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

function AccordionMain({ childrenSlot2 }: { title: string; content: string; childrenSlot2: any }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {childrenSlot2}
    </Accordion>
  )
}

const AccordionMainDefinition: ComponentDefinition = {
  id: 'AccordionMain',
  name: 'Accordion Main',
  builtInStyles: [],
  slots: {
    childrenSlot2: {
      displayName: 'Slot 1'
    }
  },
  variables: {
    // there are two types of variables, content variables and design variables
    title: {
      displayName: 'Title',
      type: 'Text',
      group: 'content', // Possible values: style, content,
      defaultValue: 'Default Title'
    },
    content: {
      displayName: 'Content',
      type: 'Text',
      group: 'content',
      defaultValue: 'Default Content'
    }
  }
}

function AccordionItemTest({ title, content }: { title: string; content: string; childrenSlot2: any }) {
  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  )
}

const AccordionItemTestDefinition: ComponentDefinition = {
  id: 'AccordionItemTest',
  name: 'Accordion ItemTest',
  builtInStyles: [],
  variables: {
    // there are two types of variables, content variables and design variables
    title: {
      displayName: 'Title',
      type: 'Text',
      group: 'content', // Possible values: style, content,
      defaultValue: 'Default Title'
    },
    content: {
      displayName: 'Content',
      type: 'Text',
      group: 'content',
      defaultValue: 'Default Content'
    }
  }
}

const AccordionContentDefinition: ComponentDefinition = {
  id: 'AccordionContent',
  name: 'Accordion Content',
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

export {
  AccordionMain,
  AccordionMainDefinition,
  Accordion,
  AccordionDefinition,
  AccordionItem,
  AccordionItemDefinition,
  AccordionTrigger,
  AccordionTriggerDefinition,
  AccordionContent,
  AccordionContentDefinition,
  AccordionItemTest,
  AccordionItemTestDefinition
}
