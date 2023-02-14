import { IonCol, IonGrid, IonRow } from "@ionic/react";
import BottomButtons from "./buttons/bottom/BottomButtons";
import TopButtons from "./buttons/top/TopButtons";

export const Calculator = () => {
  return (
    <IonGrid>
      <IonRow style={{ height: "50vh" }}>top row</IonRow>

      <IonRow>
        <IonCol size='12'>
          <TopButtons />
        </IonCol>
      </IonRow>

      <IonRow>
        <BottomButtons />
      </IonRow>
    </IonGrid>
  );
};

export default Calculator;
