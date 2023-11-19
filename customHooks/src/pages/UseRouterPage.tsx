import styled from "styled-components";
import { useRouter } from "../hooks/useRouter";
const UseRouterPage = () => {
  const { routeTo } = useRouter();

  return (
    <UseRouterPageWrapper>
      <RouterBtn onClick={() => routeTo("/onceUseEffect")}>
        go to onceUseEffect
      </RouterBtn>
      <RouterBtn onClick={() => routeTo("/useOutSideClick")}>
        go to useOutSideClick
      </RouterBtn>
      <RouterBtn onClick={() => routeTo("/useDebounce")}>useDebounce</RouterBtn>
    </UseRouterPageWrapper>
  );
};

const UseRouterPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RouterBtn = styled.button`
  border: 1px solid yellow;
  border-radius: 7px;
  color: yellow;ß
`;
export default UseRouterPage;
