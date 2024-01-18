import React from 'react';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

const Page = () => {
  return (
    <div className="w-full">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers', active: true },
        ]}
      />
    </div>
  );
};

export default Page;
