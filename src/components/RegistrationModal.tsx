
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RegistrationForm } from "./RegistrationForm";

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegistrationModal({ open, onOpenChange }: RegistrationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Register for CogniCamp</DialogTitle>
          <DialogDescription>
            Join our AI bootcamp and learn to build amazing projects! Please fill out the form below.
            All information provided will be kept confidential.
          </DialogDescription>
        </DialogHeader>
        <RegistrationForm onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}
