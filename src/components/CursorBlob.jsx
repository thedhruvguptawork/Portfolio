import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorBlob() {
  const [mousePosition, setMousePosition] = useState({
    x: -300,
    y: -300,
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 200,
      y: mousePosition.y - 200,
    },
  };

  return (
    <motion.div
      className="cursor-blob"
      variants={variants}
      animate="default"
      transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
    />
  );
}
