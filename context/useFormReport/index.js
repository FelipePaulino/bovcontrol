import React, { createContext, useReducer, useState } from "react";

export const FormReportContext = createContext(
    undefined
  );

export const GlobalProvider = ({ children }) => {
    const [checklistData, setChecklistData] = useState()
    const [updateChecklists, setUpdateChecklists] = useState(false)
    const value = { checklistData, setChecklistData, updateChecklists, setUpdateChecklists};
  
    return (
      <FormReportContext.Provider value={value}>
        {children}
      </FormReportContext.Provider>
    );
  };