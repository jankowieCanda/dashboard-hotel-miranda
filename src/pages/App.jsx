import { Header } from "../components/Header";
import { KPIs } from "../components/KPIs";
import { Reviews } from "../components/Reviews";
import { SideNav } from "../components/SideNav";


function App() {
  

  return (
    <>
      <Header title={'Dashboard'}/>
      <SideNav/>
      <KPIs />
      <Reviews />
    </>
  )
}

export default App;
