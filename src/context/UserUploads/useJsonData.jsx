import { useContext } from "react";
import { JsonDataContext } from "./JsonDataContext";

export const useJsonData = () => {
  const context = useContext(JsonDataContext);
  if (!context) {
    throw new Error("useJsonData must be used within a JsonDataProvider");
  }
  return context;
};
