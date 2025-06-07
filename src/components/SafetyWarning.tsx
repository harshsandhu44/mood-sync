import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export const SafetyWarning = () => {
  return (
    <Alert variant="destructive" className="mb-6">
      <AlertCircleIcon className="size-4" />
      <AlertTitle>Warning</AlertTitle>

      <AlertDescription>
        Individuals with light sensitivity or a history of seizures/epilepsy
        should NOT use brainwave entrainment. Consult a healthcare professional
        before use.
      </AlertDescription>
    </Alert>
  );
};
