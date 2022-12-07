import { classNames } from "../utils/classNames";

const variants = ["red", "orange"] as const;

type Variant = typeof variants[number]; // union type of those string literals defined in the array above

const variantMaps: Record<Variant, string> = {
  red: "bg-red-100 text-red-800",
  orange: "bg-orange-100 text-orange-800",
};

const sizeMaps: Record<"small" | "medium" | "large", string> = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};

interface ButtonProps {
  variant: Variant;
  children: React.ReactNode;
  size: "small" | "medium" | "large";
}

export function Button({ variant, children, size }: ButtonProps) {
  return (
    <button
      className={classNames(
        "rounded-full p-4",
        variantMaps[variant],
        sizeMaps[size]
      )}
    >
      {children}
    </button>
  );
}
