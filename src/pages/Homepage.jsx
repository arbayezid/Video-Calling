import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

    const [value, setValue] = useState()
    const navigate = useNavigate()

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)
    }, [navigate, value])

    return (
        <div>
            <input
                
                onChange={(e) => setValue(e.target.value)}
                type="text" placeholder="Enter Room ID" />
            <button onClick={handleJoinRoom}>Join</button>
        </div>
    );
};

export default Homepage;


















