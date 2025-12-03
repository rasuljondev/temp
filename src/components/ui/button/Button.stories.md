# Button Component Documentation

A reusable, accessible button component with multiple variants, sizes, colors, and states.

## Features

- ✅ Multiple variants (primary, secondary, danger, success, outline, ghost)
- ✅ Customizable colors (indigo, blue, green, red, yellow, purple, pink, gray)
- ✅ Three sizes (sm, md, lg)
- ✅ Loading state with spinner
- ✅ Disabled state
- ✅ Left and right icon support
- ✅ Full width option
- ✅ Label prop for easy text changes
- ✅ Custom className override option
- ✅ Dark mode support
- ✅ TypeScript support
- ✅ Accessible (ARIA labels, focus states)

## Usage

### Basic Button

```tsx
import { Button } from '../components/ui'

// Using label prop
<Button variant="primary" label="Click Me" />

// Using children
<Button variant="primary">Click Me</Button>
```

### Custom Colors

```tsx
// Using predefined colors
<Button variant="primary" color="blue" label="Blue Button" />
<Button variant="primary" color="green" label="Green Button" />
<Button variant="primary" color="purple" label="Purple Button" />
<Button variant="outline" color="red" label="Red Outline" />

// Fully custom colors with customClassName
<Button 
  customClassName="bg-teal-500 hover:bg-teal-600 text-white"
  label="Custom Teal"
/>
```

### Button Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Button Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>
```

### Loading State

```tsx
<Button isLoading={true}>Loading...</Button>
```

### With Icons

```tsx
import { Button } from '../components/ui'

<Button 
  leftIcon={<Icon />}
  rightIcon={<Icon />}
>
  Button Text
</Button>
```

### Full Width

```tsx
<Button fullWidth>Full Width Button</Button>
```

### Disabled State

```tsx
<Button disabled>Disabled Button</Button>
```

### Button as Link

```tsx
import { ButtonLink } from '../components/ui'

<ButtonLink to="/dashboard" variant="primary">
  Go to Dashboard
</ButtonLink>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'success' \| 'outline' \| 'ghost'` | `'primary'` | Button style variant |
| `color` | `'indigo' \| 'blue' \| 'green' \| 'red' \| 'yellow' \| 'purple' \| 'pink' \| 'gray'` | `'indigo'` | Button color (applies to primary, secondary, outline variants) |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `label` | `string` | - | Button text label (alternative to children) |
| `isLoading` | `boolean` | `false` | Shows loading spinner |
| `leftIcon` | `ReactNode` | - | Icon on the left side |
| `rightIcon` | `ReactNode` | - | Icon on the right side |
| `fullWidth` | `boolean` | `false` | Makes button full width |
| `disabled` | `boolean` | `false` | Disables the button |
| `customClassName` | `string` | - | Fully custom className (overrides variant/color styles) |
| `className` | `string` | - | Additional className (merged with variant styles) |
| `children` | `ReactNode` | - | Button content (alternative to label) |
| All standard button HTML attributes | - | - | onClick, type, etc. |

## Examples

### Form Submit Button

```tsx
<Button 
  type="submit" 
  isLoading={isSubmitting}
  fullWidth
  variant="primary"
  label="Submit"
/>
```

### Delete Button

```tsx
<Button 
  variant="danger"
  onClick={handleDelete}
  label="Delete"
/>
```

### Button with Custom Color

```tsx
<Button 
  variant="primary"
  color="purple"
  label="Save Changes"
/>
```

### Button with Custom Colors (Full Control)

```tsx
<Button 
  customClassName="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
  label="Premium Feature"
/>
```

### Icon Button

```tsx
<Button 
  variant="outline"
  color="green"
  leftIcon={<PlusIcon />}
  label="Add Item"
/>
```

### Dynamic Label

```tsx
<Button 
  variant="primary"
  label={`Items: ${count}`}
  onClick={handleClick}
/>
```

