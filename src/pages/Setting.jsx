// 설정 페이지
import { useContext } from "react";
import { UserContext } from "../context/UserStore";
import { ButtonContainer, TransBtn } from "../components/ButtonContainer";

const Setting = () => {
  const context = useContext(UserContext);
  const { setColor } = context;
  return (
    <>
      <ButtonContainer>
        <TransBtn>Theme Setting</TransBtn>
      </ButtonContainer>
      <ButtonContainer>
        <TransBtn color="orange" onClick={() => setColor("orange")}>
          orange
        </TransBtn>
        <TransBtn color="green" onClick={() => setColor("green")}>
          green
        </TransBtn>
        <TransBtn color="darkgrey" onClick={() => setColor("darkgrey")}>
          darkgrey
        </TransBtn>
        <TransBtn color="royalblue" onClick={() => setColor("royalblue")}>
          royalblue
        </TransBtn>
      </ButtonContainer>
    </>
  );
};
export default Setting;
