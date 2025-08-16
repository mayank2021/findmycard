# Form Context & Hooks

This directory contains the form state management solution for the credit card application.

## FormContext

The `FormContext` provides centralized state management for form data across the entire application.

### Features

- **Global Form State**: Access form data from any component
- **Step Management**: Track current step and navigate between steps
- **Error Handling**: Manage validation errors across all steps
- **Super Accuracy Mode**: Toggle accuracy mode for specific steps
- **Form Reset**: Reset form to initial state

### Usage

```tsx
import { useFormContext } from "../contexts";

function MyComponent() {
  const { 
    formData, 
    currentStep, 
    updateFormData, 
    nextStep, 
    prevStep 
  } = useFormContext();

  // Use form data and functions
}
```

## useFormData Hook

The `useFormData` hook extends the context with additional utility functions.

### Additional Features

- **Step Data**: Get form data for specific steps
- **Completion Tracking**: Check step and overall form completion
- **Form Summary**: Get organized summary of all form data
- **Validation Helpers**: Check if form is ready for submission

### Usage

```tsx
import { useFormData } from "../hooks";

function MyComponent() {
  const { 
    getStepData, 
    isStepComplete, 
    getFormCompletion,
    getFormSummary 
  } = useFormData();

  // Get data for step 2
  const step2Data = getStepData(2);
  
  // Check if step 3 is complete
  const isStep3Complete = isStepComplete(3);
  
  // Get overall completion percentage
  const completion = getFormCompletion();
  
  // Get organized form summary
  const summary = getFormSummary();
}
```

## Available Functions

### Context Functions
- `updateFormData(field, value)` - Update a specific form field
- `setCurrentStep(step)` - Set current step
- `setErrors(errors)` - Set validation errors
- `setSuperAccuracyMode(mode)` - Set accuracy mode
- `resetForm()` - Reset form to initial state
- `nextStep()` - Move to next step
- `prevStep()` - Move to previous step
- `validateCurrentStep()` - Validate current step

### Hook Functions
- `getStepData(step)` - Get form data for specific step
- `isStepComplete(step)` - Check if step is complete
- `getFormCompletion()` - Get overall completion percentage
- `isFormReadyForSubmission()` - Check if form is ready
- `getFormSummary()` - Get organized form summary

## Form Data Structure

The form data includes:
- Personal information (name, email, phone, monthly spend)
- E-commerce spending across platforms
- Travel spending across platforms
- Dining and entertainment spending
- Miscellaneous spending categories

## Integration

The context is automatically provided at the root level in `src/app/layout.tsx`, so all components have access to the form state without additional setup.

## Example Components

- `FormProgress` - Shows form completion progress
- `MultiStepForm` - Main form component using the context
- Any component can now access form data using the hooks
