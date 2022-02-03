import { lHome, lInvoiceData } from "../Interface/lData";

import faker from "@faker-js/faker";

export function getInvoices() {
  return invoices;
}

const invoices: lInvoiceData[] = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998",
  },
];

export function getInvoiceNum(number: number) {
  return invoices.find((invoice) => invoice.number === number);
}

export const HomeData: lHome[] = [
  {
    id: 1,
    video: faker.image.people(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 1,
  },
  {
    id: 2,
    video: faker.image.cats(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 2,
  },
  {
    id: 3,
    video: faker.image.food(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 3,
  },
  {
    id: 4,
    video: faker.image.transport(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 4,
  },
  {
    id: 5,
    video: faker.image.fashion(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 5,
  },
  {
    id: 6,
    video: faker.image.animals(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 6,
  },
  {
    id: 7,
    video: faker.image.city(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 7,
  },
  {
    id: 8,
    video: faker.image.food(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 8,
  },
];
