import { IonToolbar } from "@ionic/react";
import { onButtonTouch } from "../generalButton.helper";

import {
  backspaceOutline,
  backspaceSharp,
  timeOutline,
  timeSharp,
} from "ionicons/icons";
import TopButtons from "./TopButtons";

const TopLayout = () => {
  return (
    <IonToolbar>
      <TopButtons
        slot='end'
        iconClass={"ion-padding-vertical"}
        ios={backspaceOutline}
        md={backspaceSharp}
        modifications={{
          color: "primary",
          shape: "round",
          size: "large",
          fill: "clear",
        }}
        onTouch={onButtonTouch}
      />

      <TopButtons
        slot='start'
        iconClass={"ion-padding-vertical"}
        ios={timeOutline}
        md={timeSharp}
        modifications={{
          color: "primary",
          shape: "round",
          size: "large",
          fill: "clear",
        }}
        onTouch={onButtonTouch}
      />
    </IonToolbar>
  );
};

export default TopLayout;
