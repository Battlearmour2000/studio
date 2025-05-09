import React from 'react';

export default function CssTreeBackground() {
  return (
    <div className="css-tree-background" aria-hidden="true">
      <div className="css-oak-tree"> {/* Renamed from css-tree to css-oak-tree */}
        <div className="css-oak-trunk"></div>
        <div className="css-oak-foliage">
          <div className="css-oak-clump clump1"></div>
          <div className="css-oak-clump clump2"></div>
          <div className="css-oak-clump clump3"></div>
          <div className="css-oak-clump clump4"></div>
          <div className="css-oak-clump clump5"></div>
          <div className="css-oak-clump clump6"></div> {/* New clump */}
          <div className="css-oak-clump clump7"></div> {/* New clump */}
        </div>
      </div>
    </div>
  );
}
