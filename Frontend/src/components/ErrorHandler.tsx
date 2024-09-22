import { GoAlert } from "react-icons/go";

export interface ErrorHandlerProps {
  error: string;
  className?: string;
}

export const ErrorHandler = (props: ErrorHandlerProps) => {
  const { error, className } = props;

  return (
    <div className={`flex flex-row gap-1 ${className || ""}`}>
      <GoAlert className="h-5 w-5 text-red-500" />
      <p className={`text-red-500`}>{error}</p>
    </div>
  );
};
