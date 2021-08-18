import { useEffect, useState } from 'react';


// import { SideBar } from './components/SideBar';
import { Content } from './components/Content';


import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';

interface SelectedGenreIdProps {
  callback: number,
  prevState: null
}


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const myCallBack = (callback: SelectedGenreIdProps ) => {
        setSelectedGenreId(callback);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      
      <SideBar callback={myCallBack}/>

      <Content selectedGenreId={selectedGenreId} />
      
    </div>
  )
}