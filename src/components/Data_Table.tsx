import styled from "styled-components";
import { TableTabs } from "./TableTabs";
import { Props } from "../interfaces/PropsInterface";
import { ReactElement } from "react";

const Table_Wrapper = styled.div`
    width: 70%;
    margin-left: 30%;
    margin-top: 7.6em;
`;

export function Data_Table(props: Props) {
    
    const displayRow = (row: any, i: number): ReactElement => (
        <tr key={i}>
            {props.cols?.map(col => 
                <td key={col.property}>
                    {col.display ? col.display(row) : row[col.property] }
                </td>
            )}
        </tr>
        
    );

    return(
        <>
            <Table_Wrapper>
                {props.tabs ? <TableTabs tabs={props.tabs}/> : <></>}
                <table>
                    <thead>
                        <tr>
                            {props.cols?.map(col => <th key={col.property}>{col.property}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data ? props.data.map(displayRow) : props.orderedList?.map(displayRow)}
                    </tbody>
                </table>
            </Table_Wrapper>
        </>
    );
}