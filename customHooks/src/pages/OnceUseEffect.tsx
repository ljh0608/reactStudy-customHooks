import { useState, useEffect } from "react";

const OnceUseEffect = () => {
  const [data, setData] = useState<number>(0);

  useEffect(() => {
    console.log("normal Effect", { data });
  }, [data]);

  //변경할 부분
  useEffect(() => {
    console.log("Triggered only once", { data });
  }, []);

  return (
    <div>
      <p> console을 열어 확인해보세요</p>
      <button onClick={() => setData(Date.now())}> Updata data</button>
    </div>
  );
};

export default OnceUseEffect;
