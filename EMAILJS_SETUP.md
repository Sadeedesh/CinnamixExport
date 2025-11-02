# EmailJS Setup Instructions

## 1. Install EmailJS
Run this command in your project directory:
```bash
npm install @emailjs/browser
```

## 2. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Create a new service (Gmail)
4. Create a new email template
5. Get your public key from the integration page

## 3. Configure EmailJS
Replace these values in Contact.tsx:
- `service_cinnemon` - Your EmailJS service ID
- `template_contact` - Your EmailJS template ID  
- `your_public_key` - Your EmailJS public key

## 4. Email Template Variables
Use these variables in your EmailJS template:
- {{from_name}} - Sender's name
- {{from_email}} - Sender's email
- {{message}} - Message content
- {{to_email}} - Your email (nevindisadeera@gmail.com)

## 5. Alternative: Simple mailto fallback
If you prefer a simpler solution, the form can use mailto links instead.