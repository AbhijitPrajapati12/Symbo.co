"use client";

import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { createPortal } from "react-dom";

const VideoPortal = forwardRef(function VideoPortal({ children }, ref) {
  const dialog = useRef();
  const [mounted, setMounted] = useState(false);
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    setMounted(true);
    setModalRoot(document.getElementById("modal"));
  }, []);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
    },
  }));

  if (!mounted || !modalRoot) return null;

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      <iframe
        src={`https://www.youtube.com/embed/GugCfna7oFo`}
        title="YouTube video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "8px",
        }}
      ></iframe>
      {/* <div
        style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}
      >
        <iframe
          src={`https://www.youtube.com/embed/GugCfna7oFo`}
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "8px",
          }}
        ></iframe>
      </div> */}
      <form method="dialog">
        <button style={{ zIndex: "100" }}>Close</button>
      </form>
    </dialog>,
    modalRoot
  );
});

export default VideoPortal;
