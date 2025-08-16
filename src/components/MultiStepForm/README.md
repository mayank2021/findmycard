# MultiStepForm Components

This directory contains a modular, reusable multi-step form implementation broken down into smaller, focused components.

## Component Structure

### Core Components

- **`MultiStepForm`** - Main container component that orchestrates the form flow
- **`StepIndicator`** - Visual progress indicator showing current step and completion status
- **`StepContent`** - Renders the appropriate step content based on current step
- **`NavigationButtons`** - Handles navigation between steps (Previous/Next/Submit)

### Step Components

- **`PersonalInfoStep`** - First step for collecting personal information
- **`AddressStep`** - Second step for collecting address details
- **`PaymentStep`** - Third step for collecting payment information
- **`ConfirmationStep`** - Final step showing confirmation and summary

### Utility Components

- **`InputField`** - Reusable form input field with validation display
- **`types.ts`** - TypeScript interfaces and type definitions
- **`constants.ts`** - Step configurations and initial form data
- **`validation.ts`** - Form validation logic

## Usage

### Basic Usage

```tsx
import { MultiStepForm } from "@/components/MultiStepForm";

export default function MyPage() {
  return <MultiStepForm />;
}
```

### Using Individual Components

```tsx
import { 
  StepIndicator, 
  InputField, 
  PersonalInfoStep 
} from "@/components/MultiStepForm";

// Use components individually for custom implementations
<StepIndicator currentStep={1} totalSteps={4} />
<InputField 
  label="Name" 
  field="name" 
  value={value} 
  onChange={handleChange} 
/>
```

### Custom Form Implementation

```tsx
import { useState } from "react";
import { 
  StepIndicator, 
  InputField, 
  NavigationButtons,
  validateStep 
} from "@/components/MultiStepForm";

export default function CustomForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  
  // Custom logic here...
  
  return (
    <div>
      <StepIndicator currentStep={currentStep} totalSteps={3} />
      {/* Custom step content */}
      <NavigationButtons 
        currentStep={currentStep}
        totalSteps={3}
        onNext={() => setCurrentStep(prev => prev + 1)}
        onPrevious={() => setCurrentStep(prev => prev - 1)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
```

## Features

- **Modular Design**: Each component has a single responsibility
- **Type Safety**: Full TypeScript support with proper interfaces
- **Reusable**: Components can be used independently or together
- **Customizable**: Easy to modify styling and behavior
- **Validation**: Built-in validation with error display
- **Responsive**: Mobile-friendly design with Tailwind CSS

## Props

### MultiStepForm
- No props required - self-contained component

### StepIndicator
- `currentStep: number` - Current active step
- `totalSteps: number` - Total number of steps

### InputField
- `label: string` - Field label
- `field: string` - Field identifier
- `value: string` - Field value
- `onChange: (field: string, value: string) => void` - Change handler
- `type?: string` - Input type (default: "text")
- `placeholder?: string` - Placeholder text
- `error?: string` - Error message to display
- `maxLength?: string` - Maximum input length

### NavigationButtons
- `currentStep: number` - Current step
- `totalSteps: number` - Total steps
- `onNext: () => void` - Next step handler
- `onPrevious: () => void` - Previous step handler
- `onSubmit: () => void` - Submit handler

## Customization

### Adding New Steps

1. Create a new step component (e.g., `CompanyStep.tsx`)
2. Add step configuration to `constants.ts`
3. Update `StepContent.tsx` to include the new step
4. Add validation rules to `validation.ts`

### Styling

All components use Tailwind CSS classes and can be customized by:
- Modifying the className props
- Creating custom CSS classes
- Using CSS-in-JS solutions

### Validation

Custom validation can be added by:
- Modifying the `validateStep` function in `validation.ts`
- Adding new validation rules for specific fields
- Implementing custom validation logic in individual step components
