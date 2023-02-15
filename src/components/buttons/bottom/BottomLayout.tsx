import { IonButton, IonCol, IonRow } from "@ionic/react";
import { useMemo } from "react";
import { buttonsArrangement } from "./bottomLayout.Helper";
import { onButtonTouch } from "../generalButton.helper";

const BottomLayout = () => {
  const renderButtons = useMemo(
    () =>
      buttonsArrangement.map(({ sign, color, fill }, index) => (
        <IonCol size='3' key={index}>
          <IonButton
            color={color}
            onTouchStart={onButtonTouch}
            expand='full'
            shape='round'
            fill={`${fill === "outline" ? "outline" : "solid"}`}
          >
            {sign}
          </IonButton>
        </IonCol>
      )),
    []
  );

  return <IonRow>{renderButtons}</IonRow>;
};

export default BottomLayout;
