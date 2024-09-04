# Comparison of Database Tables and CRUD Components

This document compares the tables in the database with the available CRUD components in the frontend.

## Database Tables

1. alternative
2. outcome_framing
3. solution_detail
4. problem_framing
5. FAQ
6. CustomerTypes
7. sqlite_sequence (system table, not relevant for CRUD operations)
8. ServiceTypes
9. Heros
10. Testimonials
11. Offerings
12. Customers
13. Addresses
14. PriceRanges
15. Projects
16. ProjectImages
17. customer_type (seems to be a duplicate of CustomerTypes)
18. service_type (seems to be a duplicate of ServiceTypes)

## Available CRUD Components

1. AlternativesCRUD.js
2. CustomerTypesCRUD.js
3. FAQCRUD.js
4. OutcomeFramingsCRUD.js
5. ServiceTypesCRUD.js

## Missing CRUD Components

The following tables do not have corresponding CRUD components in the frontend:

1. solution_detail
2. problem_framing
3. Heros
4. Testimonials
5. Offerings
6. Customers
7. Addresses
8. PriceRanges
9. Projects
10. ProjectImages

## Notes

1. The 'alternative' table is covered by AlternativesCRUD.js
2. The 'outcome_framing' table is covered by OutcomeFramingsCRUD.js
3. The 'FAQ' table is covered by FAQCRUD.js
4. The 'CustomerTypes' table is covered by CustomerTypesCRUD.js
5. The 'ServiceTypes' table is covered by ServiceTypesCRUD.js
6. The 'sqlite_sequence' table is a system table and doesn't require a CRUD component
7. The 'customer_type' and 'service_type' tables appear to be duplicates of 'CustomerTypes' and 'ServiceTypes' respectively, so they don't need separate CRUD components

To complete the CRUD functionality for the entire database, consider creating CRUD components for the missing tables, especially for core entities like Customers, Projects, and Offerings.