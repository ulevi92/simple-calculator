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
      <IonButtons slot='end' class='ion-paddin-x-3'>
        <IonButton shape='round' fill='clear' onTouchStart={onButtonTouch}>
          <IonIcon
            name='backspace'
            color='primary'
            md={backspaceSharp}
            ios={backspaceOutline}
          />
        </IonButton>
      </IonButtons>

      <IonButtons slot='start' class='ion-padding-x-3'>
        <IonButton shape='round' fill='clear' onTouchStart={onButtonTouch}>
          <IonIcon
            name='history'
            color='secondary'
            md={timeSharp}
            ios={timeOutline}
          />
        </IonButton>
      </IonButtons>
    </IonToolbar>
  );
};

export default TopButtons;