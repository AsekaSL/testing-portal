import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(false)
    const [role, setRole] = useState(false)

    const isLogged = async () => {
        try {

            axios.defaults.withCredentials = true;
            
            const {data} = await axios.post(backendUrl + '/auth/is-auth')

            if(data.success) {
                setIsLoggedIn(true)
                setRole(data.role)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    const value = {
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData, setUserData,
        isLogged,
        role, setRole
    }

    

    return(
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )

}