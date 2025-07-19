import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, type ContactSchemaType } from "@/schema/contact-schema";
import { FeatureCard } from "@/components/cards";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { ErrorMessage, Spinner } from "@/components/common";
import { useState } from "react";
import { toast } from "sonner";

const features = [
  {
    id: 1,
    title: "ADDRESS",
    description: "IRAQ, BAGHDAD",
    icon: <MapPin />,
  },
  {
    id: 2,
    title: "CONTACT-US",
    description: "07700000010",
    icon: <Phone />,
  },
  {
    id: 3,
    title: "Email",
    description: "mafroush@gmail.com",
    icon: <Mail />,
  },
];

const inputForm = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "enter your name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "enter your email",
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "enter your message",
  },
];

export const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit: SubmitHandler<ContactSchemaType> = () => {
    setIsLoading(true);
    setTimeout(() => {
      toast.success(
        "Thank you for contacting us! We have received your message and will get back to you soon."
      );
      setIsLoading(false);
      reset();
    }, 700);
  };

  return (
    <>
      <div>
        <h4 className="text-xl md:text-[40px] font-medium mb-6 text-center">
          Contact Us
        </h4>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              center={true}
            />
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-8 md:flex-row md:mt-0"
      >
        <div className="flex gap-y-4 flex-col w-full bg-white md:w-[45%] order-1 md:-order-1 justify-center">
          {inputForm.map((i) => (
            <div key={i.id} className="flex flex-col gap-y-1">
              <Label htmlFor={i.id}>{i.label}</Label>
              {i.type === "textarea" ? (
                <Textarea
                  id={i.id}
                  placeholder={i.placeholder}
                  className="text-sm min-h-32"
                  {...register(i.id as keyof ContactSchemaType)}
                />
              ) : (
                <Input
                  id={i.id}
                  type={i.type}
                  placeholder={i.placeholder}
                  className="text-sm"
                  {...register(i.id as keyof ContactSchemaType)}
                />
              )}
              {errors[i.id as keyof typeof errors] && (
                <ErrorMessage>
                  {errors[i.id as keyof typeof errors]?.message as string}
                </ErrorMessage>
              )}
            </div>
          ))}

          <Button type="submit">
            {isLoading ? <Spinner size="sm" /> : "Send Message"}
          </Button>
        </div>

        <div style={{ flex: 1, width: "100%" }}>
          <iframe
            width="100%"
            height="400"
            className="rounded-md"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Iraq,%20Baghdad,%20Mansour,%20al%20amerat,609-41+(Mafroush%20commerce)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">
              Mafroush
            </a>
          </iframe>
        </div>
      </form>
    </>
  );
};
