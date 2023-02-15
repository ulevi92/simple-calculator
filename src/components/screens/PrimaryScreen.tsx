import { IonCol, IonRow, IonText } from "@ionic/react";
import "./PrimaryScreen.scss";

const PrimaryScreen = () => {
  return (
    <IonRow style={{ height: "52vh" }}>
      <IonCol style={{ width: "100%" }}>
        <IonText>{"input"}</IonText>
      </IonCol>
    </IonRow>
  );
};

export default PrimaryScreen;
