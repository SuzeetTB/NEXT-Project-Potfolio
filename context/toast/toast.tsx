import {createContext, useCallback, useContext} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastContextType {
  showSuccessMessage: (message: string) => void;
  showErrorMessage: (message: string) => void;
}

const initialValues: ToastContextType = {
  showSuccessMessage: () => {},
  showErrorMessage: () => {},
};

const ToastContext = createContext<ToastContextType>(initialValues);

export const ToastProvider: React.FC = ({children}) => {
  const showSuccessMessage = useCallback((message: string) => {
    toast.success(message);
  }, []);

  const showErrorMessage = useCallback((message: string) => {
    toast.error(message);
  }, []);

  return (
    <ToastContext.Provider
      value={{
        showSuccessMessage,
        showErrorMessage,
      }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("toast provider not found");
  }
  return context;
};
