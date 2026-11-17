import './App.css'
import ExplorerPage from './components/ExplorerPage'
import Navbar from './components/Navbar'
import { TreesIcon } from 'lucide-react';
import type { District } from './models/Interfaces';
import { useState } from 'react';

function App() {
  const [selectedDistrictMenuIndex, setSelectedDistrictMenuIndex] = useState(0);
  const districts: District[] = [
    {
      name: "Macahel",
      icon: <TreesIcon />,
      coverImagePath: "locations/macahel.png"
    },
    {
      name: "Ardanuç",
      icon: <TreesIcon />,
      coverImagePath: "locations/ardanuc.png"
    },
    {
      name: "Arhavi",
      icon: <TreesIcon />,
      coverImagePath: "locations/arhavi.png"
    },
    {
      name: "Merkez",
      icon: <TreesIcon />,
      coverImagePath: "locations/artvin-merkez.png"
    },
    {
      name: "Borçka",
      icon: <TreesIcon />,
      coverImagePath: "locations/borcka.png"
    },
    {
      name: "Hopa",
      icon: <TreesIcon />,
      coverImagePath: "locations/hopa.png"
    },
    {
      name: "Kemalpaşa",
      icon: <TreesIcon />,
      coverImagePath: "locations/kemalpasa.png"
    },
    {
      name: "Murgul",
      icon: <TreesIcon />,
      coverImagePath: "locations/murgul.png"
    },
    {
      name: "Şavşat",
      icon: <TreesIcon />,
      coverImagePath: "locations/savsat.png"
    },
    {
      name: "Yusufeli",
      icon: <TreesIcon />,
      coverImagePath: "locations/yusufeli.png"
    },
  ]

  return (
    <>
      <Navbar districts={districts} />

      <ExplorerPage
        districts={districts}
        selectedDistrictMenuIndex={selectedDistrictMenuIndex}
        setSelectedDistrictMenuIndex={setSelectedDistrictMenuIndex}
      />
    </>
  )
}




export default App
