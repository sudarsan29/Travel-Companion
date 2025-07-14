import { useEffect, useRef, useState } from "react";

export default function ScrollEndNotice() {
  const bottomRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 1.0 }
    );
    if (bottomRef.current) observer.observe(bottomRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={bottomRef} className="h-1" />
      {visible && (
        <div className="bg-green-100 text-green-800 p-3 text-center mt-4 rounded shadow">
          ✅ You’ve reached the end of the Travel Companion!
        </div>
      )}
    </>
  );
}
