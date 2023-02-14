import { IonButton, IonCol } from "@ionic/react";
import { useMemo } from "react";
import { buttonArrangement } from "./bottomButtons.Helper";
import { onButtonTouch } from "../generalButton.helper";

const BottomButtons = () => {
  const renderButtons = useMemo(
    () =>
      buttonArrangement.map(({ sign, color, fill }, index) => (
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

  return <>{renderButtons}</>;
};

export default BottomButtons;
