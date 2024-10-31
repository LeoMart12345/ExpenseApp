export type ExpenseJSON = {
	
    id: number;
    amount: number;
    description: string;
    date: string;
    status: string;
    _links: {
      self: {
        href: string;
      },
      employee: {
        href: string;
      },
      category: {
        href: string;
      }
    };
  };