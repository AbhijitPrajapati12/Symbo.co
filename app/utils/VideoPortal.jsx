"use client";

import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { CloseArrow } from "../Icons/Icon";
import { createPortal } from "react-dom";

const VideoPortal = forwardRef(function VideoPortal({ }, ref) {
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
      <div style={{ height: '100%', width: '100%', zIndex: '-1', position: 'absolute', top: '0', left: '0' }}>
        {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GugCfna7oFo" title="Symbo | Embedded Insurance | How it works" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        <iframe
          src="https://www.youtube.com/embed/GugCfna7oFo"
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
      </div>
      <form method="dialog" style={{ position: 'absolute', top: '0', right: '-30px', }} >
        <button style={{ border: 'none', backgroundColor: 'transparent', color: 'white' }} onClick={() => dialog.current?.close()}>
          <CloseArrow />
        </button>
      </form>
    </dialog >,
    modalRoot
  );
});

export default VideoPortal;
