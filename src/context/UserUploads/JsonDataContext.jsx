import { createContext, useContext } from "react";

export const JsonDataContext = createContext();

export const useJsonDataContext = () => useContext(JsonDataContext);
