import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import { ApiPlugin } from 'promethean-plugin'

const handleSendMessage = async () => {
  console.log('handleSendMessage')

  let aaa = {
    value: 'test kelvin plugin'
  }

  let result = await ApiPlugin.echo(aaa);
  console.log('result :', result);

  let bbb = {
    latitude: 1,
    longitude: 2
  }

  let result2 = await ApiPlugin.openMap(bbb);
  console.log('result2 :', result2);
};

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonButton onClick={() => handleSendMessage()}> Send Message</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
