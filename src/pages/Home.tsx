import { IonContent, IonPage } from "@ionic/react";
import { useEffect } from "react";
import Calculator from "../components/Calculator";
import { App } from "@capacitor/app";

const Home = () => {
  useEffect(() => {
    App.addListener("backButton", async () => await App.minimizeApp());
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <Calculator />
      </IonContent>
    </IonPage>
  );
};

export default Home;
