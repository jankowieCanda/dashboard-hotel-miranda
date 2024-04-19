import { Header } from "../components/Header";
import { KPIs } from "../components/KPIs";
import { Reviews } from "../components/Reviews";
import { SideNav } from "../components/SideNav";

export const Dashboard = () => {

    return (
        <>
          <Header title={'Dashboard'}/>
          <SideNav/>
          <KPIs />
          <Reviews />
        </>
    )
}