import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import { AuthLayout } from "@/layouts/auth-layout";
import { MainLayout } from "@/layouts/main-layout";
import { Home } from "@/pages/home";
import { SuspenseWrapper } from "@/components/common/suspense-wrapper";
import { ProtectedRoute } from "@/components/common/protected-route";

const Signup = lazy(() => import("@/pages/sign-up"));
const Signin = lazy(() => import("@/pages/sign-in"));
const NotFoundPage = lazy(() => import("@/pages/not-found-page"));
const Products = lazy(() => import("@/pages/products"));
const ProductDetails = lazy(() => import("@/pages/product-details"));
const AccountPage = lazy(() => import("@/pages/profile-page"));
const ContactUs = lazy(() => import("@/pages/contact-us"));
const WishlistPage = lazy(() => import("@/pages/wishlist"));
const CheckoutPage = lazy(() => import("@/pages/checkout"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <SuspenseWrapper>
        <NotFoundPage />
      </SuspenseWrapper>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: (
          <SuspenseWrapper>
            <Products />
          </SuspenseWrapper>
        ),
      },
      {
        path: "products/:id",
        element: (
          <SuspenseWrapper>
            <ProductDetails />
          </SuspenseWrapper>
        ),
      },
      {
        path: "contact-us",
        element: (
          <SuspenseWrapper>
            <ContactUs />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/profile/*",
        element: (
          <ProtectedRoute>
            <SuspenseWrapper>
              <AccountPage />
            </SuspenseWrapper>
          </ProtectedRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <SuspenseWrapper>
              <WishlistPage />
            </SuspenseWrapper>
          </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <SuspenseWrapper>
              <CheckoutPage />
            </SuspenseWrapper>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: (
      <SuspenseWrapper>
        <NotFoundPage />
      </SuspenseWrapper>
    ),
    children: [
      {
        path: "/sign-in/*",
        element: (
          <SuspenseWrapper>
            <Signin />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/sign-up/*",
        element: (
          <SuspenseWrapper>
            <Signup />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);
