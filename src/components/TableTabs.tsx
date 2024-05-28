import { Props } from "../interfaces/PropsInterface";




export const TableTabs = (props: Props) => {
    
    return(
        <div>
            {props.tabs ? props.tabs.map((tab, i) => 
                <>
                    {tab.type ? 
                        <>
                            <label key={i} htmlFor={tab.label}></label>
                            <input key={tab.label} type="text" name={tab.label} id={tab.label} placeholder="Search by name..."/> 
                        </>
                        : 
                        <button key={i} onClick={() => tab.action}>{tab.label}</button> 
                    }
                </>
            ) : 'NoTabs'}
        </div>
    );
}




                