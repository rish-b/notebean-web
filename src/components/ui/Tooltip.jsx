import { useState } from 'react';

const Tooltip = ({ text, position = 'top', children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 -mt-1',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-1',
    left: 'left-full top-1/2 -translate-y-1/2 -ml-1',
    right: 'right-full top-1/2 -translate-y-1/2 -mr-1',
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={() => setIsVisible(!isVisible)}
    >
      {children}
      {isVisible && text && (
        <div className={`absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-xl whitespace-nowrap transition-all duration-200 animate-in fade-in zoom-in-95 ${positionClasses[position]}`}>
          {text}
          <div className={`absolute w-2 h-2 bg-gray-900/90 rotate-45 ${arrowClasses[position]}`} />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
