
import { supabase } from "@/integrations/supabase/client";
import { RegistrationFormValues } from "@/schemas/registrationSchema";

export async function submitRegistration(data: RegistrationFormValues) {
  const { error } = await supabase
    .from('registrations')
    .insert([
      { 
        full_name: data.fullName,
        school: data.school,
        grade: data.grade,
        motivation: data.motivation,
        fun_ideas: data.funIdeas || null
      }
    ]);
  
  if (error) throw error;
  
  return { success: true };
}
