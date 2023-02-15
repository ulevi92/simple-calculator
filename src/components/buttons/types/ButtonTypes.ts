import { IonColors } from "../../../types/GlobalTypes";

type ButtonColor = IonColors;
type ButtonBackground = "success";

type ButtonSign = "number" | string;

export interface ButtonsArrangement {
  color: ButtonColor;
  sign: ButtonSign;
  background?: ButtonBackground;
  fill?: "outline";
}

export interface IconModifications {
  shape: "round";
  fill: "default" | "outline" | "clear" | "solid";
  size: "small" | "large";
  color: IonColors;
}
