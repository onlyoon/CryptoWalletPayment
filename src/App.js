import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import {QRCodeSVG} from 'qrcode.react';
import NangNang from './images/NangNang.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <QRCodeSVG value= "00001,C언어 입문자를위한 강의,20000,Zeroyoon" //보내야할 값 : 1:주문번호, 2:상품명, 3. 상품가격, 4. 플랫폼명
          size={128}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={false}
          imageSettings={{
            src: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/52602742-9a54-4c75-a419-d3ee8bc34cba/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230323T103404Z&X-Amz-Expires=86400&X-Amz-Signature=3b2b851b7f538316bcef2a274e2468a062260487d4657d7b2ad4f00b6600163a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.jpeg%22&x-id=GetObject",
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
          }} />
      </header>
    </div>
  );
}


//{JSON.stringify({
//   name: "abc",
//   expiry: "aaa",
//   manufacturer: "abcvc"
// })
export default App;
