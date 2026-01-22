# Implementation Plan - Purchase Error Audit

The goal is to identify serious vulnerabilities or logic errors in the purchasing flow of `https://phongdogo.testflighty.com/login`.

## Proposed Testing Steps

### 1. Initial Reconnaissance
- Visit the website and explore the user interface.
- Understand the login/registration process.
- Identify how products are added to the cart and the checkout flow.

### 2. Purchasing Flow Analysis
- **Price Manipulation**: Attempt to modify the price of items in the cart or during the payment request using browser tools.
- **Quantity Manipulation**: Test for negative or extremely large quantities.
- **Voucher/Discount Logic**: Test for "stacking" bugs or bypassing minimum spend requirements.

### 3. Security Checks
- **Payment Bypass**: Investigate if the application relies solely on client-side confirmation for successful payments.
- **IDOR (Insecure Direct Object Reference)**: Check if I can view or modify other users' orders by changing order IDs in the URL or API requests.

## Verification Plan
- Any identified bug will be documented with steps to reproduce.
- A recording or screenshot of the exploit/error will be captured.
