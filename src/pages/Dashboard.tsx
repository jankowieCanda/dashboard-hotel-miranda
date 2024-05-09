import { Header } from "../components/Header";
import { KPIs } from "../components/KPIs";
import { Reviews } from "../components/Reviews";
import { SideNav } from "../components/SideNav";

export const Dashboard = (props: any) => {

    return (
        <>
          <Header title={'Dashboard'} setAuth={props.setAuth}/>
          <SideNav/>
          <KPIs />
          <Reviews />
        </>
    )
}