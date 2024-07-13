import { useEffect, useState } from "react"

const useSticky = () => {
    const [sticky,setSticky] = useState(false);

    useEffect(() => {
        
        const stickyNavbar = () => {
            if(window.scrollY > 80){
                setSticky(true)
            }
            else{
                setSticky(false)
            }
            
        // return () =>  stickyNavbar()
        }
    
     window.addEventListener('scroll',stickyNavbar)
    },[]);

    return {
        sticky,
    }
}

export default useSticky;