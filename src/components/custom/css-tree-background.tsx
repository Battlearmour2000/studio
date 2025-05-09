import React from 'react';

export default function CssTreeBackground() {
  return (
    <>
      <div className="css-tree-background" aria-hidden="true">
        <div className="css-oak-tree">
          <div className="css-oak-trunk"></div>
          <div className="css-oak-foliage">
            <div className="css-oak-clump clump1"></div>
            <div className="css-oak-clump clump2"></div>
            <div className="css-oak-clump clump3"></div>
            <div className="css-oak-clump clump4"></div>
            <div className="css-oak-clump clump5"></div>
            <div className="css-oak-clump clump6"></div>
            <div className="css-oak-clump clump7"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .css-tree-background {
          position: absolute; /* Changed from fixed to be relative to parent */
          inset: 0;
          z-index: -1; /* Behind other hero content */
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          pointer-events: none;
        }

        .css-oak-tree {
          position: relative;
          width: 450px;
          height: 600px;
        }

        .css-oak-trunk {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 90px;
          height: 220px;
          background-color: hsl(var(--foreground));
          border-radius: 15px 15px 0 0;
        }

        .css-oak-foliage {
          position: absolute;
          bottom: 200px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 400px;
        }

        .css-oak-clump {
          position: absolute;
          border-radius: 50%;
          opacity: 0.95;
        }

        .css-oak-clump.clump1 {
          width: 200px;
          height: 180px;
          background-color: hsl(var(--primary));
          bottom: 60px;
          left: 50%;
          transform: translateX(-75%) translateY(10px) rotate(-20deg);
          z-index: 3;
        }

        .css-oak-clump.clump2 {
          width: 220px;
          height: 200px;
          background-color: hsl(120 39% 45%);
          bottom: 20px;
          left: 50%;
          transform: translateX(-25%) translateY(5px) rotate(15deg);
          z-index: 2;
        }

        .css-oak-clump.clump3 {
          width: 180px;
          height: 160px;
          background-color: hsl(var(--accent));
          bottom: 150px;
          left: 50%;
          transform: translateX(-50%) translateY(-20px) rotate(-8deg);
          z-index: 4;
        }

        .css-oak-clump.clump4 {
          width: 160px;
          height: 140px;
          background-color: hsl(120 39% 38%);
          bottom: 30px;
          left: 5%;
          transform: rotate(25deg) translateX(-10px);
          z-index: 1;
        }

        .css-oak-clump.clump5 {
          width: 210px;
          height: 190px;
          background-color: hsl(120 39% 42%);
          bottom: 70px;
          right: 2%;
          transform: rotate(-25deg) translateX(15px);
          z-index: 2;
        }

        .css-oak-clump.clump6 {
          width: 170px;
          height: 150px;
          background-color: hsl(var(--primary) / 0.9);
          bottom: 100px;
          left: 20%;
          transform: translateX(-50%) translateY(-5px) rotate(10deg);
          z-index: 3;
        }

        .css-oak-clump.clump7 {
          width: 190px;
          height: 170px;
          background-color: hsl(var(--accent) / 0.85);
          bottom: 130px;
          right: 15%;
          transform: translateX(50%) translateY(-15px) rotate(5deg);
          z-index: 4;
        }
      `}</style>
    </>
  );
}
