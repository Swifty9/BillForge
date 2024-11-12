# BillForge

BillForge is a simple invoice generator for freelancers and small businesses. It is a self hostable web application that can be used to generate invoices and download PDFs. It is built using MERN stack.

## Features

1. Create and manage invoice
1. Download invoice as PDF
1. Send invoice as email

## System overview

```mermaid
flowchart TD
  User[User] -->|Accesses as| GuestUser[Guest User]
  User -->|Accesses as| RegisteredUser[Registered User]

  subgraph GuestUser
    direction TB
    GU_CreateInvoice[Create Invoice] --> GU_DownloadPDF[Download Invoice as PDF]
    GU_DownloadPDF --> GU_StoreLocal[Store in Browser Local Storage]
  end

  subgraph RegisteredUser
    direction TB
    RU_CreateInvoice[Create Invoice] --> RU_SaveInvoice[Save Invoice]
    RU_SaveInvoice --> RU_DownloadPDF[Download Invoice as PDF]
    RU_SaveInvoice --> RU_StoreDatabase[Store in Database]
    RU_SaveInvoice --> RU_SendEmail[Send Invoice as Email]
    RU_SaveInvoice --> RU_ViewInvoices[View All Past Invoices]
    RU_SaveInvoice --> RU_SaveDetails[Save Payment & Company Details for Future Use]
  end
```

There will be 2 types of users:

1. As a guest user
1. As a registered user

### Guest User

1. Guest users can create invoices without signing up.
1. They can download the invoice as PDF.
1. The invoice will be stored in the browser's local storage.

### Registered User

1. Registered users can create invoices and save them.
1. They can download the invoice as PDF.
1. The invoice will be stored in the database.
1. They can save their payment details, company details, etc for future use.
1. They can also send the invoice as an email.
1. They can access all the invoices they have created in the past.
1. They can upload their logo which will be displayed in the invoice.

## Types of Invoices

Currently the application supports 2 types of invoices:

1. Time based invoice
1. Product based invoice

### Time based invoice

This type of invoice is used when the user wants to charge the client based on the time spent on the project. The user can add multiple time entries and the application will calculate the total amount based on the hourly rate.

### Product based invoice

This type of invoice is used when the user wants to charge the client based on the products/services provided. The user can add multiple products/services and the application will calculate the total amount based on the price of the product/service.

## Tech Stack
1. Mongo DB
2. React JS
3. Node JS
4. Express JS

## Setup
1. Fork the repo and clone it locally
2. `cd backend` and `npm install`
3. In new terminal, `cd frontend` and `npm install`

## Run the project
1. `cd frontend` and `npm run dev`
2. In new terminal, `cd backend` and `npm run dev`

<!-- ## Contributing -->

<!-- Take a look at the [contributing guidelines](CONTRIBUTING.md) for this project. -->