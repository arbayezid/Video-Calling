import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useEffect } from "react";

const App = () => {
  // useEffect(() => {
  //   const TOKEN = generatePrebuiltToken(2054736379, "4ea0ce885e4f8fcb5d0fbeb95905fc3d", 'room2', 'UserID-' + Math.random(), 'jack' + Math.random());

  //   const zp = ZegoUIKitPrebuilt.create(TOKEN);
  //   zp.joinRoom({
  //     container: document.querySelector("#root"),
  //   });
  // }, []);

  const myMeeting = async () => {
    const appID = 315105672;
    const serverSecret = "69a685f6fd059679530430cf342bad80";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, 'room2', 'UserID-' + Math.random(), 'jack' + Math.random())

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container: document.querySelector("#root"),
    });
};

  return (
    <html>
      <body>
        <div id="root" ref={myMeeting}></div>
        <script src="https://resource.zegocloud.com/prebuilt/crypto-js.js"></script>
        <script src="https://resource.zegocloud.com/prebuilt/prebuiltToken.js"></script>
        <script src="https://zegocloud.github.io/zegocloud_prebuilt_webrtc/ZegoPrebuilt/index.umd.js"></script>
      </body>
    </html>
  );
};

export default App;
