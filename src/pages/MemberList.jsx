// 회원 리스트 보기
import { useState, useEffect, useContext } from "react";
import AxiosApi from "../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Contatner";

const MembersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  height: 100vh;
  margin: auto;
  background-color: #f9aa06;
  justify-content: space-evenly;
`;

const MemberInfoWrapper = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 16px;
  border-radius: 8px;

  background-color: antiquewhite;
`;

const MemberId = styled.p`
  font-weight: bold;
`;

const MemberName = styled.p`
  font-style: italic;
`;

const MemberEmail = styled.p`
  color: #555;
`;

const MemberJoinDate = styled.p`
  font-size: 0.8rem;
  color: #777;
`;

const MemberList = () => {
  const navigate = useNavigate();
  const [memberList, setMemberList] = useState("");
  const isLogin = window.localStorage.getItem("isLogin");
  if (isLogin !== "TRUE") navigate("/");
  useEffect(() => {
    const memberList = async () => {
      try {
        const resp = await AxiosApi.memberList("ALL");
        if (resp.status === 200) setMemberList(resp.data);
        console.log(resp.data);
      } catch (e) {
        console.log(e);
      }
    };
    memberList();
  }, []);

  const onClickMember = (id) => {
    console.log("onClick memberid " + id);
  };

  return (
    <>
      <Container>
        {memberList &&
          memberList.map((member) => (
            <MemberInfoWrapper
              key={member.id}
              onClick={() => onClickMember(member.id)}
            >
              <MemberId>ID : {member.id} </MemberId>
              <MemberName>name {member.name}</MemberName>
              <MemberName>email {member.email}</MemberName>
              <MemberName>join {member.join}</MemberName>
            </MemberInfoWrapper>
          ))}
      </Container>
    </>
  );
};

export default MemberList;
