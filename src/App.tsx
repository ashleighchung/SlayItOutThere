import React, { useEffect, useState, createContext } from 'react';
import { SmiteAPI } from './api/SmiteAPI';
import './App.css';

import GodsList from './components/GodsList';
import ItemsGrid from './components/ItemGrid';
import ContextTestComponent from './components/context-test-component';

import { GridRow, GridCol } from './components/Grid';
import './App.css';

// TO DO - source devID and apiKey from ENV vars
const context = createContext<SmiteAPI | null>(null);
export const SmiteApiProvider = context.Provider;
export const SmiteApiConsumer = context.Consumer;

function App() {

  const [smiteApi, setSmiteApi] = useState(
    new SmiteAPI('3549', '40E0A5348C974D8391B5B4AE6993B11B')
  );
  useEffect(() => {
    smiteApi.createSession();
  }, []);

  const sampleGods = [
    {
      name: 'Bellona',
      thumbnail: '/icons/bellona.jpg',
    },
    {
      name: 'Jing Wei',
      thumbnail: '/icons/jingwei.jpg',
    },
    {
      name: 'Ao Kuang',
      thumbnail: '/icons/aokuang.jpg',
    },
    {
      name: 'Mulan',
      thumbnail: '/icons/mulan.jpeg',
    },
  ];

  return (
    <SmiteApiProvider value={smiteApi}>
      <div className="App">
        <GridRow>
          <GridCol desktopSpan={3}>
            <GodsList godsList={sampleGods} />
          </GridCol>
          <GridCol desktopSpan={9}>
            <ItemsGrid />
          </GridCol>
        </GridRow>
        <ContextTestComponent></ContextTestComponent>
      </div>
    </SmiteApiProvider>
  );
}

export default App;
