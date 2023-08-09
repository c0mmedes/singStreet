import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/httpService";
import "../../css/ent/EntApplicants.css";
import applicantlogo from "../../assets/asdf.png";
const EntApplicants = ({ myEntList, userInfo }) => {
  // axios 인스턴스
  const apiInstance = api();
  // 라우터 파라미터에서 가져올 entId 변수
  const { entId, entMasterId } = useParams();
  // 화면을 다른 화면으로 넘겨줄때 필요한
  const navigate = useNavigate();
  // 상태관리
  const [applicantList, setApplicantList] = useState([]);
  const [isAccepted, setIsAccepted] = useState();

  useEffect(() => {
    // 원하는 조건을 확인하고 이전 화면으로 돌아가기
    if(parseInt(userInfo.userId) !== parseInt(entMasterId)){
      // 이전 화면으로 이동
      navigate(-1);
    }
    getEntApplicantList();
  }, []);

  // 유저 목록을 불러오는
  const getEntApplicantList = async () => {
    try {
      const accessToken = sessionStorage.getItem("accessToken");
      const res = await apiInstance.get(`ent/apply/${entId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Bearer 토큰 포함
        },
      });
      /*
            res.data
            [
                {
                  "applId": 0,
                  "createAt": "2023-08-07T07:34:01.357Z",
                  "nickname": "string",
                  "userId": 0
                }
            ] 
            */
      setApplicantList(res.data);
    } catch {
      alert("지원자 목록 불러오기 실패!");
    }
  };

  // 지원자 수락
  const onClickAcceptApplicant = async (appId) => {
    try{
      const accessToken = sessionStorage.getItem("accessToken");
      setIsAccepted(true);
      const res = await apiInstance.post(`/ent/member/${appId}/${isAccepted}`,{
        headers: {
          Authorization: `Bearer ${accessToken}`, // Bearer 토큰 포함
        },
      })
      if(res.status === "200") {
        alert("수락 성공!") 
        // 지원자 거부가 성공하면 지원자 목록을 다시 불러옴
        getEntApplicantList();
      } 
    } catch {
      alert("수락 오류!");
    }
  };

  // 지원자 거부
  const onClickRefuseApplicant = async (appId) => {
    try{
      const accessToken = sessionStorage.getItem("accessToken");
      setIsAccepted(false);
      const res = await apiInstance.post(`/ent/member/${appId}/${isAccepted}`,{
        headers: {
          Authorization: `Bearer ${accessToken}`, // Bearer 토큰 포함
        },
      })
      if(res.status === "200"){
        alert("거부 성공!") 
        // 지원자 거부가 성공하면 지원자 목록을 다시 불러옴
        getEntApplicantList();
      } 
    } catch {
      alert("거부 오류!");
    }
  };

  return (
    <div>
      <div className="entApplicantsContainer">
        <div className="entApplicantsRight">
          <div className="applicantHeader">
            <h1>지원자 목록 </h1>
            <img
              src={applicantlogo}
              className="applicantHeaderImg"
              alt="지원자로고"
            />
          </div>

          <ol className="applicantOl">
            <div className="applicantHeaderTable">
              <div>No. 이름</div>
              <div className="aht2">신청날짜</div>
              <div className="aht3">승인</div>
            </div>
            {applicantList.map((applicant) => (
              <li key={applicant.appId} className="applicantItem">
                <div className="applicantItem1">{applicant.nickname}</div>
                <div className="applicantItem2">
                  {new Date(applicant.createAt).toLocaleDateString()}
                </div>
                <div className="applicantItemBtn">
                  <input value={"수락"} onClick={onClickAcceptApplicant(applicant.appId)}></input>
                  <input value={"거절"} onClick={onClickRefuseApplicant(applicant.appId)}></input>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EntApplicants;
