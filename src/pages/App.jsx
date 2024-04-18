import { Header } from "../components/Header";
import { KPIs } from "../components/KPIs";
import { SideNav } from "../components/SideNav";


function App() {
  

  return (
    <>
      <Header title={'Dashboard'}/>
      <SideNav/>
      <KPIs />
    </>
  )
}

export default App;
