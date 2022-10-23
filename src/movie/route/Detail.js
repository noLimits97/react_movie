import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  return <h1>Details</h1>;
}

export default Detail;


/*
마지막으로 package.json에 homepage, deploy, predeploy를 입력
homepage는 말그대로 homepage의 url을, deploy는 build를 homepage에 upload한다.
predeploy에는 deploy를 하기 전에 실행될 코드를 입력한다.
여기서는 npm rum build
*/
