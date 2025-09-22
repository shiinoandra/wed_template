// SwipeIndicator.tsx
import React from 'react';

type SwipeIndicatorProps = {
  direction: 'up' | 'horizontal';
  visible: boolean;
};

const SwipeIndicator: React.FC<SwipeIndicatorProps> = ({ direction, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={`swipe-indicator ${direction}`}>
      <div className="swipe-indicator-finger"></div>
    </div>
  );
};

export default SwipeIndicator;