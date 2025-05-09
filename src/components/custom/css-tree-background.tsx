import React from 'react';

export default function CssTreeBackground() {
  return (
    <div className="css-tree-background" aria-hidden="true">
      <div className="css-tree">
        <div className="css-tree-trunk"></div>
        <div className="css-tree-foliage foliage-layer1"></div>
        <div className="css-tree-foliage foliage-layer2"></div>
        <div className="css-tree-foliage foliage-layer3"></div>
      </div>
    </div>
  );
}
