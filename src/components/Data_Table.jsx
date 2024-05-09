import styled from "styled-components";
import { TableTabs } from "./TableTabs";

const Table_Wrapper = styled.div`
    width: 70%;
    margin-left: 30%;
    margin-top: 7.6em;
`;

export function Data_Table(props) {
    
    const displayRow = (row, i) => (
        <tr key={i}>
            {props.cols.map(col => 
                <td key={col.property}>
                    {col.display ? col.display(row) : row[col.property] }
                </td>
            )}
        </tr>
        
    )   
    return(
        <>
            <Table_Wrapper>
                {props.tabs ? <TableTabs tabs={props.tabs}/> : <></>}
                <table>
                    <thead>
                        <tr>
                            {props.cols.map(col => <th key={col.property}>{col.property}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {props.orderedList? props.orderedList.map(displayRow) : props.data.map(displayRow)}
                    </tbody>
                </table>
            </Table_Wrapper>
        </>
    );
}