import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { useNavigate } from 'react-router-dom';

const PageTwo = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  const handleNext = () => {
    if (!formData.email || !formData.email.trim() === "") {
      alert("이메일을 입력하시오.");
      return;
    }
    if (/\s/.test(formData.email)) {
      alert("공백을 넣을 수 없습니다.");
      return;
    }
    console.log('email: ', formData.email);
    console.log('formData: ', formData);
    navigate('/page3');
  };

  return (
    <>
      <h1>입사지원 2/3</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
        />
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default PageTwo;
