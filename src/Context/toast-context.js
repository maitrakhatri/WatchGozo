import { createContext, useContext, useState, useEffect } from "react";

const ToastContext = createContext()

const ToastProvider = ({ children }) => {

    const [showToast, setShowToast] = useState(false)
    const [toastTitle, setToastTitle] = useState("")

    useEffect(() => {
        if (showToast) {
            setTimeout(() => {
                setShowToast(false)
            }, 2000);
        }
    }, [showToast])

    return <ToastContext.Provider value={{ showToast, setShowToast, toastTitle, setToastTitle }}>
        {children}
    </ToastContext.Provider>
}

const useToast = () => useContext(ToastContext)

export { useToast, ToastProvider }