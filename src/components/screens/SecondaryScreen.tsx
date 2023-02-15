import { IonCol, IonRow, IonText } from "@ionic/react";

const SecondaryScreen = () => {
  return (
    <IonRow style={{ height: "3vh" }}>
      <IonCol>
        <IonText>will show calculation results before entering =</IonText>
      </IonCol>
    </IonRow>
  );
};

export default SecondaryScreen;
