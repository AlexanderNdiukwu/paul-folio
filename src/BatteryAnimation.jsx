import React, { useEffect, useRef } from "react";

const BatteryAnimation = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let direction = 1;
    let percent = 100;
    let raf;
    function animate() {
      percent += direction * 0.7;
      if (percent >= 100) {
        direction = -1;
        percent = 100;
      }
      if (percent <= 10) {
        direction = 1;
        percent = 10;
      }
      if (barRef.current) {
        barRef.current.style.height = `${percent}%`;
      }
      raf = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="w-12 h-32 bg-gray-200 rounded-lg border-2 border-gray-400 flex flex-col items-center justify-end relative overflow-hidden">
      {/* Battery tip */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-2 bg-gray-400 rounded-t"></div>
      {/* Animated charge bar */}
      <div
        ref={barRef}
        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-400 via-yellow-300 to-green-500 transition-all duration-300 rounded-b"
        style={{ height: "100%" }}
      />
      {/* Battery outline */}
      <div className="absolute inset-0 border-2 border-gray-400 rounded-lg pointer-events-none"></div>
    </div>
  );
};

export default BatteryAnimation;