import { IonCol, IonGrid, IonRow } from "@ionic/react";
import BottomButtons from "./buttons/bottom/BottomButtons";
import TopButtons from "./buttons/top/TopButtons";
import PrimaryScreen from "./PrimaryScreen";
import SecondaryScreen from "./SecondaryScreen";

export const Calculator = () => {
  return (
    <IonGrid>
      <PrimaryScreen />

      <SecondaryScreen />

      <TopButtons />

      <BottomButtons />
    </IonGrid>
  );
};

export default Calculator;
