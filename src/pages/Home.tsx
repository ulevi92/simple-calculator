import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Calculator from "../components/Calculator";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Calculator />
      </IonContent>
    </IonPage>
  );
};

export default Home;
