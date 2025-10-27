import React, { useState } from 'react';

export const DEV_CONFIG = {
  SIMULATE_LOADING_TIME: 0
};

function DevSettings({ devSettings, setDevSettings }) {
  const [showDevPanel, setShowDevPanel] = useState(false);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-0 sm:w-[350px] w-full left-0 right-0 bg-slate-800 text-white p-4 z-50">
      <button
        onClick={() => setShowDevPanel(!showDevPanel)}
        className="w-full text-left flex items-center justify-between mb-2"
      >
        <span className="font-semibold">Loading Simulator</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${showDevPanel ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {showDevPanel && (
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <span className="mr-2">Loading Time (ms):</span>
              <input
                type="number"
                value={devSettings.SIMULATE_LOADING_TIME}
                onChange={(e) => setDevSettings({
                  SIMULATE_LOADING_TIME: parseInt(e.target.value) || 0
                })}
                className="bg-slate-700 rounded px-2 py-1 w-24 text-white"
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default DevSettings;