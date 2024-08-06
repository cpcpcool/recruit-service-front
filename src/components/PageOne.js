import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { useNavigate } from 'react-router-dom';

const PageOne = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  const handleNext = () => {
    if (!formData.name || !formData.name.trim() === "") {
      alert("값을 입력하시오.");
      return;
    }

    if (/\s/.test(formData.name)) {
      alert("공백을 넣을 수 없습니다.");
      return;
    }
    console.log('name: ', formData.name);
    navigate('/page2');
  };

  const resultButton = (e) => {
    navigate('/result');
  }

  return (
    <>
      <h1>입사 지원 1/3</h1>
      <div className='inputBox'>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          required
        />
        <button onClick={handleNext}>Next</button>
      </div>
      <button onClick={resultButton}>지원자 보기</button>
    </>
  );
};

export default PageOne;