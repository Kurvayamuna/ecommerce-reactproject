FashionStore – React E-Commerce Website
Project Documentation
1. Project Overview
FashionStore is a modern E-Commerce clothing website built using React.js.
The website allows users to browse products, add them to a cart, update quantities, and view total price in Indian Rupees (₹).
The project demonstrates frontend development, API integration, responsive UI design, and cart management.

2. Technologies Used
Technology
Purpose
React.js
Frontend framework
HTML5
Page structure
CSS3
Styling
JavaScript (ES6)
Logic and functionality
React Router
Page navigation
FakeStore API
Product data
Canva
Product images and UI design


3. Project Features
🏠 Home Page
Modern Hero Section
Product Categories
Featured Products
Email Subscribe Section
Footer with links

🛒 Shop Page
Fetch products using API
Category filters:
Women Clothing
Men Clothing
Jewelry
Accessories
Add products to cart
Quantity control
API used:
https://fakestoreapi.com/products


🛍️ Cart Page
Cart system includes:
✔ Add products
✔ Increase quantity (+)
✔ Decrease quantity (-)
✔ Remove product
✔ Cart counter in navbar
✔ Automatic price calculation
✔ Dollar converted to Indian Rupees
Example conversion:
$49 → ₹4067


📧 Subscribe Section
Users can subscribe to receive 10% discount offers by entering their email address.
Features:
Email validation
Success notification

📞 Contact Page
Contact form with fields:
Name
Email
Phone Number
Message
Includes form validation.

4. Website Pages
Page
URL
Home
/
Shop
/shop
Contact
/contact
Cart
/cart

Server runs on:
http://localhost:3000/


5. Folder Structure
fashionstore-app
│
├── public
│
├── src
│   ├── assets
│   │   ├── Linen Dress.png
│   │   ├── Casual Jacket.jpg
│   │   ├── Stylish Handbag.jpg
│   │   └── Classic Sneakers.jpg
│
│   ├── components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Categories.js
│   │   ├── FeaturedProducts.js
│   │   └── Subscribe.js
│
│   ├── pages
│   │   ├── Home.js
│   │   ├── Shop.js
│   │   ├── Cart.js
│   │   └── Contact.js
│
│   ├── App.js
│   └── index.js


6. Cart System Logic
Cart is managed using React State.
Example structure:
cart = [
{
id:1,
title:"Linen Dress",
price:49,
quantity:2
}
]

Functions used:
addToCart()
increaseQty()
decreaseQty()
removeItem()


7. Currency Conversion
Prices from API are in USD ($).
They are converted into Indian Rupees (₹) using:
1 USD = 83 INR

Example:
const priceINR = product.price * 83


8. Responsive Design
Website is responsive for:
Desktop
Tablet
Mobile
CSS media queries used.
Example breakpoint:
@media(max-width:768px)


9. Installation & Setup
Step 1
Install Node.js
Step 2
Create React project
npx create-react-app fashionstore-app

Step 3
Install router
npm install react-router-dom

Step 4
Run project
npm start

Website will run on:
http://localhost:3000


10. Future Improvements
Possible enhancements:
Product search
User authentication
Checkout page
Payment gateway integration
Wishlist feature
Admin dashboard

11. Conclusion
The FashionStore E-Commerce Website demonstrates how to build a modern shopping website using React.js with API integration and cart functionality.
This project helps developers understand:
React component architecture
State management
API fetching
Routing
Responsive design

✅ Project Status: Completed (Frontend)



