import *  as Tone from "tone";

export default function Toner() {

    // JS HERE 
    const playBTN = document.getElementById("play-btn");
    const synth = new Tone.Synth().toDestination() ;

    playBTN?.addEventListener("click", async () => {
        if(Tone.getContext().state !== "running"){
            await Tone.start();
        }
        synth.triggerAttackRelease("A5", "8n");
    });

    // JS HERE
console.log(Tone.context.state);
    // HTML HERE
    return (
        <>
            <h1 style={{color: "blue"}}>
                Tone JS
            </h1>
            <button id="play-btn">Play</button>
        </>
    )
    // HTML HERE
}