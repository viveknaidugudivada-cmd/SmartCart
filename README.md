# 🛒 SmartCart – Full Stack E-Commerce Platform

SmartCart is a production-style e-commerce web application built using Flask, MySQL, and Razorpay. The platform enables secure online shopping, payment processing, inventory management, order tracking, invoice generation, and multi-level administration.

The project demonstrates full-stack development skills including authentication, authorization, payment gateway integration, database design, file handling, email automation, and secure application architecture.

---

# 🚀 Project Highlights

### Customer Experience

* User Registration & Authentication
* Secure Login System
* Product Search & Category Filtering
* Shopping Cart Management
* Buy Now Functionality
* Razorpay Payment Integration
* Order Tracking
* Order History
* Reorder Previous Purchases
* PDF Invoice Download
* Profile Management

### Administration Portal

* Admin Registration with OTP Verification
* Admin Approval Workflow
* Product Management (CRUD)
* Inventory Management
* Order Management
* Revenue Dashboard
* Profile Management

### Super Admin Controls

* Admin Approval & Rejection
* Access Control Management
* Administrator Lifecycle Management

---

# 🏗️ System Architecture

```text
                    ┌───────────────────┐
                    │       Users       │
                    └─────────┬─────────┘
                              │
                              ▼
                   ┌────────────────────┐
                   │   Flask Backend    │
                   └─────────┬──────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
 Authentication      Product Module      Order Module
        │                    │                    │
        ▼                    ▼                    ▼
 Session Mgmt      Inventory Control    Payment System
        │                    │                    │
        └────────────────────┼────────────────────┘
                             │
                             ▼
                      MySQL Database
                             │
             ┌───────────────┴───────────────┐
             ▼                               ▼
      Razorpay API                    Email Service
```

---

# 🎯 Business Problem Solved

Traditional e-commerce systems require:

* Secure user authentication
* Product inventory management
* Online payment processing
* Order management
* Customer communication
* Administrative control

SmartCart provides an integrated solution covering the complete e-commerce lifecycle from product browsing to successful order fulfillment.

---

# ✨ Core Features

## User Module

### Authentication

* User Registration
* User Login
* Password Reset
* Secure Session Management

### Shopping Experience

* Product Listing
* Product Search
* Category Filtering
* Product Details View
* Add to Cart
* Cart Quantity Management
* Buy Now Workflow

### Order Management

* Place Orders
* View Order History
* Track Orders
* Reorder Previous Purchases
* Download Invoices

### User Profile

* Profile Updates
* Profile Image Upload
* Address Management

---

## Admin Module

### Authentication

* OTP Verification
* Email Validation
* Admin Approval Workflow

### Product Management

* Add Products
* Update Products
* Delete Products
* View Products
* Manage Inventory

### Dashboard

* Product Statistics
* Revenue Tracking
* User Metrics
* Recent Orders

### Order Management

* View Orders
* Update Order Status
* Monitor Transactions

---

## Super Admin Module

### Administrative Control

* Approve Admin Requests
* Reject Admin Requests
* Manage Access Permissions

---

# 🔒 Security Implementation

Security was a major focus while developing SmartCart.

### Authentication Security

* Bcrypt Password Hashing
* Session-Based Authentication
* OTP Verification
* Secure Password Reset Links

### Authorization Security

* Role-Based Access Control (RBAC)
* Protected Routes
* Admin Approval Workflow

### Payment Security

* Razorpay Signature Verification
* Secure Order Processing

### File Security

* Secure Filename Handling
* UUID-Based File Naming
* Protected Upload Storage

---

# 💳 Payment Integration

SmartCart integrates Razorpay for secure online payments.

### Payment Flow

```text
Product Selection
        │
        ▼
Add To Cart
        │
        ▼
Checkout
        │
        ▼
Create Razorpay Order
        │
        ▼
Payment Processing
        │
        ▼
Signature Verification
        │
        ▼
Order Creation
        │
        ▼
Invoice Generation
```

### Features

* Payment Verification
* Transaction Tracking
* Automatic Order Creation
* Secure Checkout Process

---

# 📄 Invoice Generation

The system automatically generates downloadable PDF invoices after successful purchases.

Invoice includes:

* Customer Information
* Order Details
* Product Information
* Quantity & Pricing
* Total Amount

---

# 📧 Email Automation

The application uses Flask-Mail for automated communications.

### Email Events

* Admin OTP Verification
* Password Reset Links
* Admin Approval Notification
* Admin Rejection Notification

---

# 🗄️ Database Design

## Main Tables

### users

Stores customer information and authentication data.

### admin

Stores administrator accounts, roles, and approval status.

### products

Stores product catalog and inventory information.

### cart

Stores user shopping cart data.

### orders

Stores completed order information.

### order_items

Stores products associated with each order.

---

# ⚙️ Technology Stack

## Backend

* Python
* Flask

## Database

* MySQL

## Frontend

* HTML5
* CSS3
* Bootstrap
* JavaScript

## Authentication & Security

* Bcrypt
* ItsDangerous

## Payment Gateway

* Razorpay

## Email Service

* Flask-Mail

## File Handling

* Werkzeug

## PDF Generation

* Custom PDF Generator

---

# 📂 Project Structure

```text
SmartCart/
│
├── app.py
├── config.py
│
├── static/
│   ├── uploads/
│   │   ├── product_images/
│   │   ├── admin_profiles/
│   │   └── profile/
│
├── templates/
│   ├── admin/
│   ├── user/
│   └── home.html
│
├── utils/
│   └── pdf_generator.py
│
├── requirements.txt
├── README.md
│
└── database.sql
```

---

# 🔧 Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/SmartCart.git

cd SmartCart
```

## Create Virtual Environment

```bash
python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Configure Database

Create a MySQL database:

```sql
CREATE DATABASE smartcart;
```

Update database credentials in:

```python
config.py
```

## Configure Email Service

```python
MAIL_SERVER = "smtp.gmail.com"
MAIL_PORT = 587
MAIL_USE_TLS = True
MAIL_USERNAME = "your_email@gmail.com"
MAIL_PASSWORD = "your_app_password"
```

## Configure Razorpay

```python
RAZORPAY_KEY_ID = "your_key_id"
RAZORPAY_KEY_SECRET = "your_secret_key"
```

## Run Application

```bash
python app.py
```

Application URL:

```text
http://127.0.0.1:5000
```

---

# 📸 Screenshots

Add screenshots here before uploading to GitHub:

* Home Page
* Product Listing
* Product Details
* Shopping Cart
* Checkout Page
* Admin Dashboard
* Order Tracking
* Invoice Download

---

# 🎓 Technical Skills Demonstrated

* Full Stack Development
* Python Development
* Flask Framework
* MySQL Database Design
* Authentication & Authorization
* Payment Gateway Integration
* Session Management
* Email Automation
* PDF Generation
* File Upload Handling
* Security Best Practices
* Role-Based Access Control
* CRUD Operations
* RESTful Design Principles
* Production-Oriented Architecture

---

# 🚀 Future Enhancements

* Product Reviews & Ratings
* Wishlist System
* Coupon Management
* AI-Based Product Recommendations
* Multi-Vendor Marketplace
* REST API Development
* Docker Deployment
* Cloud Deployment (AWS/Azure)
* Analytics Dashboard

---

# 👨‍💻 Author

**Gudivada Vivek Naidu**

Full Stack Python Developer

GitHub: https://github.com/viveknaidugudivada-cmd

LinkedIn: https://www.linkedin.com/in/vivek-naidu-gudivada/

---

# 📜 License

This project is intended for educational, portfolio, and professional showcase purposes.
