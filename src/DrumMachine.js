import React, { useState, useEffect } from "react";

const DrumMachine = () => {
    const [display, setDisplay] = useState("");

    let audio = new Audio();
    let isPlaying = false;

    const handleClick = (e) => {
        try {
            if (audio) {
                audio.src = e.target.children[0].getAttribute("data-src");
                audio.pause();
                audio.currentTime = 0;
                audio.play();

                setDisplay(e.target.innerText)
            }
        } catch (error) {
            console.log(error)
        }
    };


    const handleKeyPress = (e) => {
        try {
            if (!e.repeat && ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].includes(e.key.toUpperCase())) {
                audio.src = document.getElementById(e.key.toUpperCase()).children[0].getAttribute("data-src");
                audio.pause();
                audio.currentTime = 0;
                audio.play();
                audio.onended = () => {
                    isPlaying = false;
                }
                setDisplay(e.key.toUpperCase())
            }
        } catch (error) {
            console.log(error)
        }
    };

    // document.addEventListener("keydown", handleKeyPress);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <div id="drum-machine">
            <h1>Drum Machine</h1>
            <div id="display">{display}</div>

            <div className="row">
                <div className="drum-pad" id="Q" onClick={handleClick}>
                    Q
                    <audio data-src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
                </div>
                <div className="drum-pad" id="W" onClick={handleClick}>
                    W
                    <audio data-src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>
                </div>
                <div className="drum-pad" id="E" onClick={handleClick}>
                    E
                    <audio data-src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>
                </div>
            </div>

            <div className="row">
                <div className="drum-pad" id="A" onClick={handleClick}>
                    A
                    <audio data-src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>
                </div>
                <div className="drum-pad" id="S" onClick={handleClick}>
                    S
                    <audio data-src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>
                </div>
                <div className="drum-pad" id="D" onClick={handleClick}>
                    D
                    <audio data-src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
                </div>
            </div>

            <div className="row">
                <div className="drum-pad" id="Z" onClick={handleClick}>
                    Z
                    <audio data-src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
                </div>
                <div className="drum-pad" id="X" onClick={handleClick}>
                    X
                    <audio data-src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>
                </div>
                <div className="drum-pad" id="C" onClick={handleClick}>
                    C
                    <audio data-src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>
                </div>
            </div>

        </div>
    );
};

export default DrumMachine;
