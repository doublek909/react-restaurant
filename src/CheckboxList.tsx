import Checkbox from "./shared/Checkbox";

type CheckboxListProps = {
  className?: string;
  children: React.ReactNode;
  label: string;
};

export default function CheckboxList({
  children,
  className = "",
  label,
}: CheckboxListProps) {
  return (
    <fieldset className={className}>
      <legend>{label}</legend>
      {children}
    </fieldset>
  );
}
