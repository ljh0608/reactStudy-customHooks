import { useEffect, MutableRefObject } from "react";
type Callback = () => void;
export function useOutSideClick(
  ref: MutableRefObject<HTMLElement | null>,
  callback: Callback
) {
  useEffect(() => {
    //이곳에 로직을 넣어주세요
  }, [ref, callback]);
}
