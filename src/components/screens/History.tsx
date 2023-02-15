import { IonModal, IonToolbar } from "@ionic/react";
import { FC, useState } from "react";

interface HistoryProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const History: FC<HistoryProps> = ({ open, setOpen }) => {
  const onExit = () => setOpen(false);

  return (
    <IonModal isOpen={open}>
      <IonToolbar></IonToolbar>
    </IonModal>
  );
};

export default History;
