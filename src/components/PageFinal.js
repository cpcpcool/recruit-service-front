import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { FormContext } from '../context/FormContext';

const PageFinal = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData, 
      [name]: type === 'checkbox' ? checked : value });
  }

  const  handleSubmit = async (e) => {
    e.preventDefault();
    
    // 체크할 필드 목록
    const requiredFields = ['phone', 'introduction'];
  
    for (const field of requiredFields) {
      const value = formData[field];
      
      // 필드가 비어 있거나 공백만 포함된 경우
      if (!value || value.trim() === "") {
        alert(`"${field}" 값을 입력하시오.`);
        return;
      }
  
      // 필드에 공백이 포함된 경우
      if (/\s/.test(value)) {
        alert(`"${field}" 공백을 넣을 수 없습니다.`);
        return;
      }
    }
    if (document.getElementById('agree').checked === false) {
      alert('개인정보 수집 약관에 동의해주세요.');
      return;
    }
    
    // API 요청
    try {
      const response = await axios.post('http://localhost:8080/api/recruitment', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('[front]success : ', response.data);
      navigate('/'); 
    }catch (error) {
      console.error('error : ', error);
      alert('서버 에러가 발생했습니다. 다시 시도해 주세요.');
      console.log('[front] formData: ', formData);
    }
  }

  return (
    <>
      <h1>입사지원 3/3</h1>
      <div>
      <form onSubmit={handleSubmit}>
        <div className='inputBox'>
          <label>휴대전화: </label>
          <input
            type="text"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
          />
        </div>
        <div className='inputBox'>
          <label>자기소개: </label>
          <textarea
            name="introduction"
            value={formData.introduction || ""}
            onChange={handleChange}
            />
        </div>
        <div className='inputBox'>
          <label>개인정보 수집 동의: </label>
          <input
            type="checkbox"
            id='agree'
            name="agree"
            checked={formData.agree || false}
            onChange={handleChange}
            />
        </div>
        <button type="submit">제출</button>
      </form>
      </div>
    </>
  );
};

export default PageFinal;