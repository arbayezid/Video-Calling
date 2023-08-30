import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import "../App.css"

const Roompage = () => {
    const { roomID } = useParams()

    const myMeeting = async (element) => {
        const appID = 315105672;
        const serverSecret = "69a685f6fd059679530430cf342bad80";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Bayezid")

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `http://localhost:5173/room/${roomID}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
            showScreenSharingButton: true,
        });
    };
    return (
        <div className="room">
            <div ref={myMeeting} />
        </div>
    );
};

export default Roompage;