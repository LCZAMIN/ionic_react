import { IonContent, IonHeader, IonImg, IonButton, IonItem, IonPage, IonLabel, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import APICall from '../components/API';

const Home: React.FC = () => {

  const chamarAPI = () => {
    // Coloque o código que deseja executar ao pressionar o botão aqui
    console.log('Botão pressionado');
  };

  return (
    
      <IonPage>
        <IonItem>
          <IonLabel>
            <h1><b>Bem-vindo ao meu site</b></h1>
          </IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>
            <p>Este e um paragrafo de exemplo</p>
          </IonLabel>
        </IonItem>




        <IonItem>
          <IonLabel>

        
          <APICall />
        </IonLabel>
        </IonItem>




        <IonItem>
          <IonLabel>
            <h2><b>Seção Importante</b></h2>
          </IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>
            <p>Esta é uma seção com conteudo relevante</p>
          </IonLabel>
        </IonItem>

        <IonItem>
          <IonImg src="..\public\assets\marca.jpg" ></IonImg>
        </IonItem>
      </IonPage>
    
  );
};

export default Home;
