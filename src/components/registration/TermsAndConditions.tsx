
import { FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Control } from "react-hook-form";
import { RegistrationFormValues } from "@/schemas/registrationSchema";

interface TermsAndConditionsProps {
  control: Control<RegistrationFormValues>;
}

export function TermsAndConditions({ control }: TermsAndConditionsProps) {
  return (
    <FormField
      control={control}
      name="termsAccepted"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              I accept the terms and conditions
            </FormLabel>
            <p className="text-sm text-muted-foreground">
              By checking this box, I acknowledge that my information will only be used for bootcamp administration and will not be shared with third parties. Students under 18 should have parental consent.
            </p>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
