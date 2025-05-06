
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { RegistrationFormValues } from "@/schemas/registrationSchema";

interface RegistrationFieldsProps {
  control: Control<RegistrationFormValues>;
}

export function RegistrationFields({ control }: RegistrationFieldsProps) {
  return (
    <>
      <FormField
        control={control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="school"
        render={({ field }) => (
          <FormItem>
            <FormLabel>School</FormLabel>
            <FormControl>
              <Input placeholder="Your school" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="grade"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Grade/Year</FormLabel>
            <FormControl>
              <Input placeholder="E.g. 10th grade, University freshman" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="motivation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What made you join this bootcamp?</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Share your reasons for joining..."
                className="min-h-[80px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="funIdeas"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What would make this bootcamp more fun for you? (Optional)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Share your ideas..."
                className="min-h-[80px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
