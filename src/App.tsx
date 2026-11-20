import './App.css'
import ExplorerPage from './components/ExplorerPage';
import MainNavbar from './components/MainNavbar'
import { ClapperboardIcon, CompassIcon, MapPinIcon, TreesIcon, UserIcon } from 'lucide-react';
import type { District } from './models/Interfaces';
import { useState } from 'react';
import BottomNavbar from './components/BottomNavbar';

function App() {
  const [selectedDistrictMenuIndex, setSelectedDistrictMenuIndex] = useState(0);
  const [selectedBottomNavbarMenuIndex, setSelectedBottomNavbarMenuIndex] = useState(0);
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
      <MainNavbar districts={districts} />

      {selectedBottomNavbarMenuIndex === 0 &&
        <ExplorerPage
          districts={districts}
          selectedDistrictMenuIndex={selectedDistrictMenuIndex}
          setSelectedDistrictMenuIndex={setSelectedDistrictMenuIndex}
        />
      }

      <BottomNavbar
        menus={[
          { icon: <CompassIcon />, name: "Keşfet" },
          { icon: <MapPinIcon />, name: "Yerler" },
          { icon: <ClapperboardIcon />, name: "Filmler" },
          { icon: <UserIcon />, name: "Profil" }
        ]}
        selectedMenuIndex={selectedBottomNavbarMenuIndex}
        setSelectedMenuIndex={setSelectedBottomNavbarMenuIndex}
      />
    </>
  )
}




export default App
