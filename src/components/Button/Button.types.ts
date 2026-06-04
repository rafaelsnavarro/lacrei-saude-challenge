export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  ariaLabel?: string;
  disabled?: boolean;
}