type ButtonColor = "primary" | "warning" | "danger" | "success" | "white";
type ButtonBackground = "success";

type ButtonSign = "number" | string;

export interface ButtonArrangement {
  color: ButtonColor;
  sign: ButtonSign;
  background?: ButtonBackground;
}
