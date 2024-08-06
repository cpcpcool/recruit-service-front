import React, { useState, useEffect } from 'react';
import axios from 'axios'


const ResultPage = () => {

  const [applicants, setApplicants] = useState([]);
  
  useEffect(() => {
    //api요청
      axios.get('http://localhost:8080/api/recruitList')
        .then(response => {
          setApplicants(response.data);
          console.log('response.data: ' + JSON.stringify(response.data));
        })
        .catch(error => console.log(error));
  }, []);

  return (
    <div>

      <h1>지원자 리스트</h1>

        {applicants.length > 0 ? (
          applicants.map(applicant => (
            <div key={applicant.id}>
              <h2>{applicant.name}</h2>
              <p>{applicant.email}</p>
              <p>{applicant.phone}</p>
              <p>{applicant.introduction}</p>
              <p>{applicant.agree ? 1 : 0}</p>
            </div>
          ))
        ) : (
          <p>지원자가 없습니다.</p>
        )}

     </div>
  );
};

export default ResultPage;