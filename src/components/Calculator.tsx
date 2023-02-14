import { IonGrid, IonRow } from "@ionic/react";
import BottomButtons from "./buttons/bottom/BottomButtons";

export const Calculator = () => {
  return (
    <IonGrid>
      <IonRow>top row</IonRow>

      <IonRow>middle row</IonRow>

      <IonRow>
        <BottomButtons />
      </IonRow>
    </IonGrid>
  );
};

export default Calculator;
