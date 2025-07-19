import { BreadCrumbs } from "@/components/common/breadcrumb";
import {
  ContactSection,
  ContactUsFeature,
  HeaderSection,
} from "@/components/sections/contact-us";

const breadcrumbsItems = [{ label: "Home", to: "/" }, { label: "Contact Us" }];

export const ContactUs = () => {
  return (
    <div className="container mt-4">
      <BreadCrumbs items={breadcrumbsItems} />
      <div className="space-y-12 ">
        <HeaderSection />
        <ContactUsFeature />
        <ContactSection />
      </div>
    </div>
  );
};

export default ContactUs;
