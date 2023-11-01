import React, { useState } from 'react';
import axios from 'axios';
import { IonButton,IonItem,IonLabel } from '@ionic/react';

const APICall = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao chamar a API:', error);
    }
  };

  return (
    <div>


          

        
          <IonButton onClick={fetchData}>Chamar API</IonButton>
       
      
      {data && (
        <div>
          <h2>Resultado da API:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default APICall;
