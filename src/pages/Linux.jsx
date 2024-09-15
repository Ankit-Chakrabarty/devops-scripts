import React from 'react';
import faqs from "../data/faq.json";
import faqq from "../data/faqq.json";
import foq from "../data/foq.json";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Linux = () => {
  const renderAccordionItems = (items) => (
    items.map((item, index) => (
      <AccordionItem 
        key={index} 
        value={`item-${index + 1}`} 
        className="mb-4 border border-gray-300 rounded-lg"
      >
        <AccordionTrigger className="p-4 bg-blue-100 text-blue-800 font-semibold rounded-t-lg hover:bg-blue-200 transition-colors duration-300">
          {item.question}
        </AccordionTrigger>
        <AccordionContent className="p-4 bg-white text-gray-800 rounded-b-lg">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    ))
  );

  const imageSources = [
    '/images/l1.png.png',
    '/images/l2.png.png',
    '/images/l3.png.png',
    '/images/l4.png.png',
    '/images/l5.png.png',
    '/images/l6.png.png'
  ];
  const imageSourcess = [
    '/images/table1.png',
    '/images/ok.jpg',
    '/images/server1.png',
    '/images/server2.png',
  ];

  return (
    <>
      <section className="border-4 border-yellow-500 p-6 rounded-lg bg-gray-100 mb-8 shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 bg-yellow-300 p-4 rounded-md shadow-md">
          Linux
        </h1>
      </section>

      <main className="px-4 md:px-8">
        <section className="mb-8">
          <Accordion type="multiple" className="w-full">
            {renderAccordionItems(faqs)}
          </Accordion>
        </section>

        <section className="flex flex-wrap justify-center gap-4 mb-8">
          {imageSources.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`Description ${index + 1}`} 
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover rounded-lg shadow-md"
            />
          ))}
        </section>

        <section>
          <Accordion type="multiple" className="w-full">
            {renderAccordionItems(faqq)}
          </Accordion>
        </section>

        <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-8 mb-6 bg-gradient-to-r from-blue-200 to-blue-400 p-4 rounded-lg shadow-lg text-center border border-blue-300">
          "Connect AWS EC2 Instances"
        </h3>

        <section className="flex flex-wrap justify-center gap-4 mb-8">
          {imageSourcess.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`Description ${index + 1}`} 
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover rounded-lg shadow-md"
            />
          ))}
        </section>

        <section className="mb-8">
          <Accordion type="multiple" className="w-full">
            {renderAccordionItems(foq)}
          </Accordion>
        </section>
      </main>
    </>
  );
}

export default Linux;
