import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import Spinner from "./feedback/spinner";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      toast.error("Please log in to access this page");
      navigate("/");
    }
  }, [isSignedIn, isLoaded, navigate]);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-272px)]">
        <Spinner size="icon" />
      </div>
    );
  }
  
  if (!isSignedIn) {
    return null;
  }
  return <>{children}</>;
};
