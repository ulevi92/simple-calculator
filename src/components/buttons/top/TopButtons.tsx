import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import {
  backspaceOutline,
  backspaceSharp,
  timeOutline,
  timeSharp,
} from "ionicons/icons";
import { FC } from "react";
import { IconModifications } from "../types/ButtonTypes";

interface TopButtonsProps {
  slot: "start" | "end";
  iconClass?: string;
  modifications: IconModifications;
  ios: string;
  md: string;
  onTouch: () => Promise<void>;
}

const TopButtons: FC<TopButtonsProps> = ({
  slot,
  iconClass,
  ios,
  md,
  modifications,
  onTouch,
}) => {
  return (
    <IonButtons slot={slot}>
      <IonButton
        fill={modifications.fill}
        onTouchStart={onTouch}
        shape={modifications.shape}
      >
        <IonIcon
          md={md}
          ios={ios}
          color={modifications.color}
          class={iconClass}
          size={modifications.size}
        />
      </IonButton>
    </IonButtons>
  );
};

export default TopButtons;
