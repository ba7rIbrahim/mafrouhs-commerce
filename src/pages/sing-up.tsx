import { AuthPageSkeleton } from "@/components/common";
import { SignUp } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";

const Signup = () => {
  const { isLoading } = useConvexAuth()
  if(isLoading) {
    return (
      <AuthPageSkeleton />
    )
  }
  return <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />;
};

export default Signup
