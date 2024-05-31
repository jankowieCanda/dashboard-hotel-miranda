import { ReactNode, useContext } from "react"
import styled from "styled-components"
import { ShowHideContext } from "./ShowHideContext";

let Body_Container = styled.div`
    width: 75%;
    margin-top: 10em;
    margin-left: 25%;
`

export const BodyContainer = ({children}: {children: ReactNode}) => {
    const showHideContext = useContext(ShowHideContext);
    if(showHideContext.isHide) {
        Body_Container = styled(Body_Container)`
            & {
                width: 100%;
                margin-left: 0;
            }
        `
    } else {
        Body_Container = styled(Body_Container)`
            & {
                width: 75%;
                margin-left: 25%;
            }
        `
    }

    return(
        <Body_Container>
            {children}
        </Body_Container>
    )
}