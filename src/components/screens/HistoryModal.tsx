import { IonButton, IonButtons, IonModal, IonToolbar } from "@ionic/react";
import { FC } from "react";
import { onButtonTouch } from "../buttons/generalButton.helper";

interface HistoryProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>; // will be changed with context
}

const History: FC<HistoryProps> = ({ open, setOpen }) => {
  const onExit = () => {
    onButtonTouch();

    setOpen(false);
  };

  return (
    <IonModal isOpen={open}>
      <IonToolbar>
        <IonButtons slot='end'>
          <IonButton fill='solid' shape='round' onTouchStart={onExit}>
            X
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonModal>
  );
};

export default History;
