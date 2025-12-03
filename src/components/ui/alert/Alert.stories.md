# Alert Component Documentation

A reusable alert/toast notification component that appears in the top-right corner with auto-close functionality.

## Features

- ✅ Four types: success, error, warning, info
- ✅ Auto-closes after 2 seconds (customizable)
- ✅ Progress indicator showing remaining time
- ✅ Manual close with X button
- ✅ Dynamic icons (default per type, or custom)
- ✅ Dynamic labels/messages
- ✅ Multiple alerts stack vertically
- ✅ Dark mode support
- ✅ Simple constructor-style usage
- ✅ Global context for easy access

## Usage

### Basic Usage

```tsx
import { useAlert } from '../components/ui'

function MyComponent() {
  const { showSuccess, showError, showWarning, showInfo } = useAlert()

  return (
    <>
      <button onClick={() => showSuccess('Operation successful!')}>
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
    </>
  )
}
```

### With Custom Icon

```tsx
const { showSuccess } = useAlert()

showSuccess('Custom icon!', <span>🎉</span>)
```

### With Custom Duration

```tsx
const { showInfo } = useAlert()

// Show for 5 seconds instead of default 2 seconds
showInfo('This will show longer', undefined, 5000)
```

### Complete Example

```tsx
const { showSuccess, showError } = useAlert()

const handleSubmit = async () => {
  try {
    await saveData()
    showSuccess('Data saved successfully!')
  } catch (error) {
    showError('Failed to save data')
  }
}
```

## API

### useAlert Hook

Returns an object with the following methods:

| Method | Parameters | Description |
|--------|------------|-------------|
| `showSuccess` | `(message: string, icon?: ReactNode, duration?: number)` | Show success alert |
| `showError` | `(message: string, icon?: ReactNode, duration?: number)` | Show error alert |
| `showWarning` | `(message: string, icon?: ReactNode, duration?: number)` | Show warning alert |
| `showInfo` | `(message: string, icon?: ReactNode, duration?: number)` | Show info alert |
| `showAlert` | `(type: AlertType, message: string, icon?: ReactNode, duration?: number)` | Show alert with custom type |

### Alert Types

- `success` - Green alert for successful operations
- `error` - Red alert for errors
- `warning` - Yellow alert for warnings
- `info` - Blue alert for informational messages

## Setup

Make sure to wrap your app with `AlertProvider`:

```tsx
import { AlertProvider } from './components/ui'

function App() {
  return (
    <AlertProvider>
      {/* Your app */}
    </AlertProvider>
  )
}
```

## Features

- **Auto-close**: Automatically closes after the specified duration (default 2 seconds)
- **Progress Indicator**: Visual progress bar showing remaining time
- **Manual Close**: X button to close immediately
- **Stacking**: Multiple alerts stack vertically
- **Smooth Animations**: Slide-in animation from top
- **Dark Mode**: Full dark mode support

