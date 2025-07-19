import { AuthPageSkeleton } from "@/components/common";
import { SignIn } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";

const Signin = () => {
  const { isLoading } = useConvexAuth()
  if(isLoading) {
    return (
      <AuthPageSkeleton />
    )
  }
  return <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />;
};


export default Signin