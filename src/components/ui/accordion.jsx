import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Copy } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-b border-gray-200 bg-white shadow-sm rounded-lg",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide popup after 2 seconds
  };

  return (
    <AccordionPrimitive.Header className="relative flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between p-4 font-semibold text-blue-300 transition-transform duration-300 ease-in-out rounded-lg",
          "data-state=open:bg-gray-200",
          className
        )}
        {...props}
      >
        <div className="flex items-center">
          {children}
          <CopyToClipboard text={children} onCopy={handleCopy}>
            <div className="ml-4 flex items-center text-blue-800 cursor-pointer">
              <Copy className="h-5 w-5" />
              <span className="ml-2 text-sm">Copy</span>
            </div>
          </CopyToClipboard>
        </div>
        <ChevronDown className="h-5 w-5 transition-transform duration-300 ease-in-out" />
        {copied && (
          <div className="absolute top-full right-0 mt-2 bg-gray-800 text-white text-xs rounded-lg p-2">
            Copied!
          </div>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("p-4 bg-blue-500", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
