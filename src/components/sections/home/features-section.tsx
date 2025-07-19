import { Delivery, Money, Phone, Security } from "@/assets/svgs";
import { FeatureCard } from "@/components/cards/feature-card";

const features = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Order above $200",
    icon: <Delivery />,
  },
  {
    id: 2,
    title: "Money-back",
    description: "30 days guarantee",
    icon: <Money />,
  },
  {
    id: 3,
    title: "Secure Payments",
    description: "Secured by Stripe",
    icon: <Security />,
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Phone and Email support",
    icon: <Phone />,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="marginBetweenSections">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            center={false}
          />
        ))}
      </div>
    </section>
  );
};
