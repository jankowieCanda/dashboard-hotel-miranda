



export function Data_Table(props) {
    
    const displayRow = row => (
        <tr>
            {props.cols.map(col => 
                <td key={col.property}>
                    {col.display ? col.display(row) : row[col.property] }
                </td>
            )}
        </tr>
        
    )   
    return(
        <>
        <table>
            <thead>
                <tr>
                    {props.cols.map(col => <th key={col.property}>{col.property}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.data.map(displayRow)}
            </tbody>
        </table>
                 
        </>
    );
}