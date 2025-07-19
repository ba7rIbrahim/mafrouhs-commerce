interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
  center: boolean;
}

export const FeatureCard = ({ title, description, icon, center }: FeatureCardProps) => {
  return (
    <div className={`${center ? "flex flex-col items-center text-center" : "text-left"} p-4 space-y-4 rounded-md shadow-md bg-section`}>
      <div>{icon}</div>
      <div className="space-y-2">
        <h6 className="text-sm font-medium md:text-xl text-link">{title}</h6>
        <p className="text-sm text-gray">{description}</p>
      </div>
    </div>
  );
};
