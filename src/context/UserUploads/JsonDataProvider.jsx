import React, { useState } from "react";
import { JsonDataContext } from "./JsonDataContext";

const getLocalStorageData = (key, defaultValue) => {
  const localData = localStorage.getItem(key);
  return localData ? JSON.parse(localData) : defaultValue;
};

const setLocalStorageData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const JsonDataProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    age: "",
    sex: "",
    heightFeet: "",
    heightInches: "",
    weight: "",
    job: "",
  });

  const [jsonData, setJsonData] = useState(() =>
    getLocalStorageData("jsonData", null)
  );
  const [jsonDataHealthPredisposition, setJsonDataHealthPredisposition] =
    useState(() => getLocalStorageData("jsonDataHealthPredisposition", null));
  const [jsonDataPharmacogenetics, setJsonDataPharmacogenetics] = useState(() =>
    getLocalStorageData("jsonDataPharmacogenetics", null)
  );
  const [jsonDataBloodPanel, setJsonDataBloodPanel] = useState(() =>
    getLocalStorageData("jsonDataBloodPanel", null)
  );
  const [userInfoForm, setUserInfoForm] = useState(() =>
    getLocalStorageData("UserInfoForm", null)
  );

  const handleFileChange = (key, setData, data) => {
    setLocalStorageData(key, data);
    setData(data);
  };

  return (
    <JsonDataContext.Provider
      value={{
        formState,
        setFormState,
        jsonData,
        handleFileChange: (data) =>
          handleFileChange("jsonData", setJsonData, data),
        jsonDataHealthPredisposition,
        handleFileChangeHealthPredisposition: (data) =>
          handleFileChange(
            "jsonDataHealthPredisposition",
            setJsonDataHealthPredisposition,
            data
          ),
        jsonDataPharmacogenetics,
        handleFileChangePharmacogenetics: (data) =>
          handleFileChange(
            "jsonDataPharmacogenetics",
            setJsonDataPharmacogenetics,
            data
          ),
        jsonDataBloodPanel,
        handleFileChangeBloodPanel: (data) =>
          handleFileChange("jsonDataBloodPanel", setJsonDataBloodPanel, data),
        userInfoForm,
        setUserInfoForm: (data) =>
          handleFileChange("UserInfoForm", setUserInfoForm, data),
      }}
    >
      {children}
    </JsonDataContext.Provider>
  );
};
