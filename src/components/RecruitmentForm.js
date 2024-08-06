import React, { useState } from 'react';

const RecruitmentForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    introduction: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') 
      setFormData({...formData, [name]: checked});
    else
      setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // 서버 데이터 전송로직
    
  };

  return (
    <div>
      <h2>입사 지원</h2>
      <form onSubmit={handleSubmit}>
        <div className='inputBox'>
          <label htmlFor='name'>이름 : </label>
          <input 
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
        <div className='inputBox'>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputBox'>
          <label htmlFor="phone">전화번호:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputBox'>
          <label htmlFor="introduction">자기소개:</label>
          <textarea
            id="introduction"
            name="introduction"
            value={formData.introduction}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputBox'>
          <label htmlFor="agree">개인정보 수집 동의:</label>
          <input 
            type='checkbox'
            id='agree'
            name='agree'
            checked={formData.agree}
            onChange={handleChange}
            required
             />
        </div>
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default RecruitmentForm;