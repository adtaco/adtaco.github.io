import React from 'react';

export function AccordionItem({ children }): JSX.Element {
  return (
    <div className="accordion-item rounded-t-lg">
      {children}
    </div>
  );
}

export default AccordionItem;
