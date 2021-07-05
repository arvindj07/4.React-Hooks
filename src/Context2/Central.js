import React,{useState} from 'react'
import ThemeContext from './ThemeContext'
import Navbar from './Navbar'
function Central() {
    const [ntheme,setnTheme] =useState('Light')
    return (
            <div>
                {/* Pass state-prop and its update func as value-Object in Context  */}
                <ThemeContext.Provider value={{theme:ntheme,chfn:setnTheme}}>
                <Navbar/>
                </ThemeContext.Provider>
             
            </div>
        
    )
}

export default Central
