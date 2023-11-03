// Home 화면
import { useNavigate } from "react-router-dom";
import { ButtonContainer, TransBtn } from "../components/ButtonContainer";
import imgBtn from "../images/nedbank_s.png";

const Home = () => {
  const navigate = useNavigate();
  const onClickBtn = (num) => {
    switch (num) {
      case 1:
        navigate("/memberlist");
        break;
      case 2:
        break;
      case 3:
        navigate("/profile");
        break;
      case 4:
        navigate("/setting");
        break;
      default:
    }
  };
  return (
    <>
      <div>
        <ButtonContainer>
          <TransBtn onClick={() => onClickBtn(1)}>MemberList</TransBtn>
          <TransBtn onClick={() => onClickBtn(2)}>News</TransBtn>
          <TransBtn onClick={() => onClickBtn(3)}>Profile</TransBtn>
          <TransBtn onClick={() => onClickBtn(4)}>Setting</TransBtn>
        </ButtonContainer>
      </div>
      <div className="bglogo">
        <img src={imgBtn} alt="" />
      </div>
    </>
  );
};
export default Home;
