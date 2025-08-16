import React from "react";
import { useLocalStorageForm } from "../../hooks";
import { FormData } from "./types";

/**
 * Example component showing how to use localStorage functionality in form steps
 * This can be used as a reference for implementing localStorage in other components
 */
export const LocalStorageExample: React.FC = () => {
  const {
    formData,
    currentStep,
    hasStoredData,
    isDataRecent,
    lastUpdated,
    saveFormData,
    saveCurrentStep,
    updateFormField,
    clearStoredData,
    getStoredDataAge,
  } = useLocalStorageForm();

  const handleSaveProgress = () => {
    // Example: Save current form state
    if (formData) {
      saveFormData(formData);
      alert("Progress saved!");
    }
  };

  const handleGoToStep = (step: number) => {
    // Example: Save and navigate to a specific step
    saveCurrentStep(step);
    alert(`Navigated to step ${step}`);
  };

  const handleUpdateField = (field: keyof FormData, value: string) => {
    // Example: Update a specific field
    if (formData) {
      updateFormField(field, value);
      alert(`Updated ${field} to ${value}`);
    }
  };

  const handleClearData = () => {
    if (confirm("Are you sure you want to clear all saved data?")) {
      clearStoredData();
      alert("All data cleared!");
    }
  };

  return (
    <div className="p-6 bg-gray-800/30 border border-gray-600/30 rounded-lg">
      <h3 className="text-lg font-semibold text-white mb-4">
        LocalStorage Functionality Example
      </h3>

      {/* Status Display */}
      <div className="mb-4 p-3 bg-gray-700/50 rounded">
        <h4 className="text-sm font-medium text-gray-300 mb-2">
          Current Status:
        </h4>
        <div className="space-y-1 text-xs text-gray-400">
          <p>Has stored data: {hasStoredData ? "✅ Yes" : "❌ No"}</p>
          <p>Data is recent: {isDataRecent ? "✅ Yes" : "❌ No"}</p>
          <p>Current step: {currentStep || "None"}</p>
          <p>Last updated: {getStoredDataAge()}</p>
          {lastUpdated && (
            <p>Timestamp: {new Date(lastUpdated).toLocaleString()}</p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleSaveProgress}
            disabled={!formData}
            className="px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-sm rounded transition-colors"
          >
            💾 Save Progress
          </button>

          <button
            onClick={() => handleGoToStep(3)}
            className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition-colors"
          >
            🚀 Go to Step 3
          </button>

          <button
            onClick={() => handleUpdateField("fullName", "John Doe")}
            disabled={!formData}
            className="px-3 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-sm rounded transition-colors"
          >
            ✏️ Update Name
          </button>
        </div>

        <button
          onClick={handleClearData}
          className="w-full px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition-colors"
        >
          🗑️ Clear All Data
        </button>
      </div>

      {/* Form Data Preview */}
      {formData && (
        <div className="mt-4 p-3 bg-gray-700/50 rounded">
          <h4 className="text-sm font-medium text-gray-300 mb-2">
            Stored Form Data Preview:
          </h4>
          <div className="text-xs text-gray-400 space-y-1 max-h-32 overflow-y-auto">
            {Object.entries(formData)
              .slice(0, 5)
              .map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="font-mono">{key}:</span>
                  <span className="truncate ml-2">{value || "(empty)"}</span>
                </div>
              ))}
            {Object.keys(formData).length > 5 && (
              <p className="text-gray-500 italic">
                ... and {Object.keys(formData).length - 5} more fields
              </p>
            )}
          </div>
        </div>
      )}

      {/* Usage Instructions */}
      <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded">
        <h4 className="text-sm font-medium text-blue-300 mb-2">How to Use:</h4>
        <ul className="text-xs text-blue-200 space-y-1">
          <li>
            • <strong>Automatic:</strong> FormContext automatically saves data
          </li>
          <li>
            • <strong>Manual:</strong> Use the hook for custom save/load
            operations
          </li>
          <li>
            • <strong>Field updates:</strong> Use updateFormField for individual
            changes
          </li>
          <li>
            • <strong>Data management:</strong> Clear data after successful
            submission
          </li>
        </ul>
      </div>
    </div>
  );
};
