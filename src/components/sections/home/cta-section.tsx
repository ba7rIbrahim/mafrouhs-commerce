import { ShinyButton } from "@/components/magicui/shiny-button";
import { Link } from "react-router";

export const CallToActionSection = () => {
  return (
    <section>
      <div className="px-6 mx-auto max-w-screen-xl md:px-8 lg:px-12">
        <div className="relative px-6 py-8 text-center rounded-2xl border shadow lg:py-12 bg-section">
          <p className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
            Join Our Newsletter
          </p>
          <p className="mx-auto prose lg:prose-lg xl:prose-2xl">
            Sign up for deals, new product and promotions
          </p>
          <div className="absolute -bottom-6 left-1/2 -ml-6 w-12 h-12 border-r border-b transform rotate-45 border-t-transparent bg-section border-l-transparent border-border">
            &nbsp;
          </div>
        </div>
        <div className="pt-10 text-center lg:pt-10">
          <Link to="/contact-us">
            <ShinyButton>Sign with your email</ShinyButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
