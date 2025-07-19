import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";
import { useCheckoutStore } from "@/stores/checkout-store";
import { steps } from "@/config/steps-data";

export const Steps = ({ children }: { children: React.ReactNode }) => {
  const { currentStep, setStep } = useCheckoutStore();

  return (
    <div>
      <h2 className="mb-6 text-xl md:text-4xl font-medium">
        {steps[currentStep - 1].name ?? ""}
      </h2>
      <Stepper value={currentStep} onValueChange={setStep}>
        {steps.map(({ step }) => (
          <StepperItem key={step} step={step} className="not-last:flex-1">
            <StepperTrigger asChild>
              <StepperIndicator />
            </StepperTrigger>
            {step < steps.length && <StepperSeparator />}
          </StepperItem>
        ))}
      </Stepper>
      {children}
    </div>
  );
};
