import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
    const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            console.log('Calling video.play()');
            ref.current.play();
        } else {
            console.log('Calling video.pause()');
            ref.current.pause();
        }
    }, [isPlaying]);

    return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    );
}

/** 
 * 1] Some components need to synchronize with external systems. For example, you might want to control 
 * a non-React component based on the React state, set up a server connection, or send an analytics 
 * log when a component appears on the screen. Effects let you run some code after rendering so that 
 * you can synchronize your component with some system outside of React.
 * 2] Effects let you specify side effects that are caused by rendering itself, rather than by a particular event.
 * eg. after rendering we get 'ref' handle to video element.
 * eg. after rendering chat component, it should connect to chat server.
 * 3] Sending a message in the chat is an event because it is directly caused by the user clicking a specific button. However, 
 * setting up a server connection is an Effect because it should happen no matter which interaction caused the component to appear. 
 * Effects run at the end of a commit after the screen updates. This is a good time to synchronize the React components with some 
 * external system (like network or a third-party library).
 * 4] Every time your component renders, React will update the screen and then run the code inside useEffect. In other words, 
 * useEffect “delays” a piece of code from running until that render is reflected on the screen.
 * 5] When your VideoPlayer component renders (either the first time or if it re-renders), a few things will happen. First, React will
 *  update the screen, ensuring the <video> tag is in the DOM with the right props. Then React will run your Effect. Finally, your
 *  Effect will call play() or pause() depending on the value of isPlaying.
    Press Play/Pause multiple times and see how the video player stays synchronized to the isPlaying value:
 * 6] synchronizing react state with extrenal non react system/widget.
 *  eg. synchronizing react state 'isPlaying', with non react <video/> tag.
*/
