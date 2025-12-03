/**
 * Alert Component Usage Examples
 * 
 * This file demonstrates how to use the Alert component
 * with the simple constructor-style pattern.
 */

import { useAlert } from './AlertContext'

// ============================================
// Basic Usage Examples
// ============================================

export const AlertExamples = () => {
  const { showSuccess, showError, showWarning, showInfo } = useAlert()

  return (
    <div className="space-y-4">
      {/* Simple usage - just type and message */}
      <button onClick={() => showSuccess('Operation completed successfully!')}>
        Show Success
      </button>

      <button onClick={() => showError('Something went wrong!')}>
        Show Error
      </button>

      <button onClick={() => showWarning('Please check your input')}>
        Show Warning
      </button>

      <button onClick={() => showInfo('Here is some information')}>
        Show Info
      </button>

      {/* With custom icon */}
      <button
        onClick={() =>
          showSuccess(
            'Custom icon alert!',
            <span className="text-2xl">🎉</span>
          )
        }
      >
        Show Success with Custom Icon
      </button>

      {/* With custom duration */}
      <button
        onClick={() => showInfo('This will show for 5 seconds', undefined, 5000)}
      >
        Show Info (5 seconds)
      </button>
    </div>
  )
}

// ============================================
// Real-world Examples
// ============================================

export const RealWorldExamples = () => {
  const { showSuccess, showError } = useAlert()

  const handleSave = async () => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      showSuccess('Data saved successfully!')
    } catch (error) {
      showError('Failed to save data. Please try again.')
    }
  }

  const handleDelete = () => {
    if (confirm('Are you sure?')) {
      showSuccess('Item deleted successfully!')
    }
  }

  return (
    <div className="space-y-4">
      <button onClick={handleSave}>Save Data</button>
      <button onClick={handleDelete}>Delete Item</button>
    </div>
  )
}

