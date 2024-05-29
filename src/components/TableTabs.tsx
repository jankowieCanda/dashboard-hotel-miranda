import { Props } from "../interfaces/PropsInterface";




export const TableTabs = (props: Props) => {
    
    return(
        <div>
            {props.tabs ? props.tabs.map((tab, i) => 
                <>
                    {tab.type ? 
                        <>
                            <label key={tab.label} htmlFor={tab.label}></label>
                            <input type="text" name={tab.label} id={tab.label} placeholder="Search by name..."/> 
                        </>
                        : 
                        <button key={tab.label} onClick={() => tab.action}>{tab.label}</button> 
                    }
                </>
            ) : 'NoTabs'}
        </div>
    );
}




                