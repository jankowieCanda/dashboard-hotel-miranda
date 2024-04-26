



export const TableTabs = (props) => {

        
    return(
        <div>
            {props.tabs.map((tab, i) => 
                <>
                    {tab.type ? 
                        <>
                            <label key={i} htmlFor={tab.label}></label>
                            <input key={tab.label} type="text" name={tab.label} id={tab.label} placeholder="Search by name..." /> 
                        </>
                        : 
                        <button key={i}>{tab.label}</button> 
                    }
                </>
            )}
        </div>
    );
}




                