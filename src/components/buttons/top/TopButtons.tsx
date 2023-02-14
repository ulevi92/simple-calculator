import { IonButton, IonButtons, IonIcon, IonToolbar } from "@ionic/react";
import { onButtonTouch } from "../generalButton.helper";

import {
  backspaceOutline,
  backspaceSharp,
  timeOutline,
  timeSharp,
} from "ionicons/icons";

const TopButtons = () => {
  return (
    <IonToolbar>
      <IonButtons slot='end'>
        <IonButton
          shape='round'
          fill='clear'
          onTouchStart={onButtonTouch}
          class='ion-paddin-x-3'
        >
          <IonIcon
            color='primary'
            md={backspaceSharp}
            ios={backspaceOutline}
            size='large'
          />
        </IonButton>
      </IonButtons>

      <IonButtons slot='start'>
        <IonButton
          shape='round'
          fill='clear'
          onTouchStart={onButtonTouch}
          class='ion-paddin-x-3'
        >
          <IonIcon
            color='secondary'
            md={timeSharp}
            ios={timeOutline}
            size='large'
          />
        </IonButton>
      </IonButtons>
    </IonToolbar>
  );
};

export default TopButtons;
