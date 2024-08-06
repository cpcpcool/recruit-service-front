import React, { createContext, useState, useEffect } from 'react'

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  // sessionStorage에서 초기 데이터 가져오기
  const [formData, setFormData] = useState(() => {
    const savedData = sessionStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {
      name: '',
      email: '',
      phone: '',
      introduction: '',
      agree: false,
    };
  });
  
  // formData가 변경될 때마다 sessionStorage에 저장하기
  useEffect(() => {
    sessionStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}
