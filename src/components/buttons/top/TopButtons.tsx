import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import { FC, useState } from "react";
import { IconModifications } from "../types/ButtonTypes";

interface TopButtonsProps {
  history?: boolean;
  slot: "start" | "end";
  iconClass?: string;
  modifications: IconModifications;
  ios: string;
  md: string;
  onTouch: () => Promise<void>;
}

const TopButtons: FC<TopButtonsProps> = ({
  history,
  slot,
  iconClass,
  ios,
  md,
  modifications,
  onTouch,
}) => {
  const [open, setOpen] = useState<boolean>(false); // will be changed with context

  const onHistoryOpen = () => {
    onTouch();
    setOpen(true);
  };

  return (
    <IonButtons slot={slot}>
      <IonButton
        fill={modifications.fill}
        onTouchStart={history ? onHistoryOpen : onTouch}
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
