import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-7xl font-bold">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mb-8">
          Sorry, the page you're looking for doesn&apos;t exist or has been moved
        </p>
        <div className="flex flex-col gap-4 justify-center sm:flex-row">
          <Button onClick={() => navigate(-1)} variant="outline">
            Go Back
          </Button>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
