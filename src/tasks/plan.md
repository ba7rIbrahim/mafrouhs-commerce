# 🛠️ Full-Stack Furniture E-commerce Development Plan

Using: **React + TailwindCSS + Convex**

---

## 🧩 Phase 1: Project Setup & Environment

### ✅ Initial Setup
- [X] Create a React project (`bun create react` or `vite`)
- [X] Install and configure **TailwindCSS**
- [X] Install and set up **shadcn/ui**
- [X] Install libraries: `zustand`, `react-hook-form`, `zod`, `react-hot-toast`
- [X] Set up **Clerk** (create account & initialize)
- [X] Create a 404 Not Found page
- [X] Create folder structure

### ✅ Base Layout
- [X] Create `MainLayout` 
- [X] Create `AuthLayout` 
- [X] Set up routing (React Router)
- [X] Make layout fully responsive

---

## 🧑‍💼 Phase 2: Authentication (Clerk)

### ✅ Clerk Setup
- [X] Create project on Clerk
- [X] Enable Sign In / Sign Up flows
- [X] Enable OAuth (Google / Gmail)
- [X] Wrap app with `ClerkProvider`
- [X] Create `ProtectedRoute` component
- [X] Build Sign In page
- [X] Build Sign Up page
- [X] (Optional) Build Profile page
- [X] Customize Clerk design 

---

## 🛍️ Phase 3: Core Pages

### ✅ Home Page
- [X] Hero section
- [X] Categories products section
- [X] New Arrivals section
- [X] Featured products section
- [X] Articles/blog section
- [X] Call to Action section
- [X] Customize Footer

### ✅ Shop / Products Page
- [X] Product filters (category, price, color)
- [X] Product grid layout
- [X] Add to wishlist and cart buttons
- [X] Pagination or infinite scroll

### ✅ Single Product Page
- [X] Product image gallery
- [X] Title, price, description, reviews
- [X] Options (color, size, quantity)
- [X] Add to cart
- [X] Related products section

### ✅ Contact Us Page
- [X] Contact form with `react-hook-form + zod`
- [X] Validate inputs
- [X] Send to Convex (mock function)
- [X] Show toast messages for success/error

### ✅ Wishlist Page
- [X] Display user's saved products
- [X] Add to cart / remove from wishlist

---

## 🛒 Phase 4: Cart & Checkout

### ✅ Cart
- [X] Flyout cart
- [X] Full cart page with editable items
- [X] Subtotal / total calculation
- [X] Checkout button

### ✅ Checkout
- [X] Shipping information form
- [X] Order summary
- [X] Confirm order button
- [X] Submit order to backend (Convex)
- [X] Success page

---

## 💾 Phase 5: Backend with Convex

### ✅ Initial Convex Setup
- [X] Create Convex project
- [X] Connect frontend to Convex
- [X] Define schema: products, users, orders, wishlist
- [X] Write `schema.ts`
- [X] Deploy to development

### ✅ Convex API Functions
- [X] Get all products
- [X] Get product by ID
- [X] Add to wishlist
- [X] Remove from wishlist
- [X] Create new order
- [X] Get user's wishlist
- [X] Submit contact form

---

## 🌐 Phase 6: Responsiveness & Performance

### ✅ Responsive Design
- [X] Mobile, tablet, and desktop layouts
- [X] UX testing across devices

### ✅ Performance Optimization
- [X] Optimize image loading
- [X] Lazy load components
- [X] Skeletons / loading states

---

## 🧪 Phase 7: UX Testing

### ✅ End-to-End Flow
- [X] Register new user
- [X] Log in
- [X] Add items to cart
- [X] Add items to wishlist
- [X] Checkout flow
- [X] Submit contact form
- [X] Page navigation and transitions

---

## 🚀 Phase 8: Deployment & Launch

- [X] Set up production (Clerk + Convex)
- [X] Assign custom domain
- [X] Deploy to Vercel
- [X] Run Lighthouse test

