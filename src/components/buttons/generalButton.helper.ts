import { Haptics, ImpactStyle } from "@capacitor/haptics";

export const onButtonTouch = async () => {
  await Haptics.impact({ style: ImpactStyle.Heavy });
};
