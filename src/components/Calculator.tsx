import { IonGrid } from "@ionic/react";
import BottomLayout from "./buttons/bottom/BottomLayout";
import TopLayout from "./buttons/top/TopLayout";
import PrimaryScreen from "./screens/PrimaryScreen";
import SecondaryScreen from "./screens/SecondaryScreen";

export const Calculator = () => {
  return (
    <IonGrid>
      <PrimaryScreen />

      <SecondaryScreen />

      <TopLayout />

      <BottomLayout />
    </IonGrid>
  );
};

export default Calculator;
