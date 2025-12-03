/**
 * Button Component Usage Examples
 * 
 * This file demonstrates all the ways you can use the Button component
 * with different colors, labels, and customizations.
 */

import { Button, ButtonLink } from './index'

// ============================================
// Basic Usage with Label
// ============================================

export const BasicExamples = () => (
  <>
    {/* Using label prop */}
    <Button label="Click Me" />
    
    {/* Using children */}
    <Button>Click Me</Button>
  </>
)

// ============================================
// Color Customization
// ============================================

export const ColorExamples = () => (
  <>
    {/* Primary buttons with different colors */}
    <Button variant="primary" color="indigo" label="Indigo" />
    <Button variant="primary" color="blue" label="Blue" />
    <Button variant="primary" color="green" label="Green" />
    <Button variant="primary" color="red" label="Red" />
    <Button variant="primary" color="purple" label="Purple" />
    <Button variant="primary" color="pink" label="Pink" />
    <Button variant="primary" color="yellow" label="Yellow" />
    
    {/* Outline buttons with different colors */}
    <Button variant="outline" color="indigo" label="Indigo Outline" />
    <Button variant="outline" color="blue" label="Blue Outline" />
    <Button variant="outline" color="green" label="Green Outline" />
  </>
)

// ============================================
// Custom Colors with customClassName
// ============================================

export const CustomColorExamples = () => (
  <>
    {/* Fully custom color using customClassName */}
    <Button 
      customClassName="bg-teal-500 hover:bg-teal-600 text-white"
      label="Custom Teal"
    />
    
    <Button 
      customClassName="bg-orange-500 hover:bg-orange-600 text-white dark:bg-orange-600 dark:hover:bg-orange-700"
      label="Custom Orange"
    />
    
    {/* Custom gradient */}
    <Button 
      customClassName="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
      label="Gradient Button"
    />
  </>
)

// ============================================
// Label Examples
// ============================================

export const LabelExamples = () => (
  <>
    {/* Using label prop */}
    <Button label="Submit Form" variant="primary" />
    
    {/* Using children (more flexible for complex content) */}
    <Button variant="primary">
      <span>Submit</span>
      <span className="ml-1 text-sm opacity-75">Form</span>
    </Button>
    
    {/* Dynamic label */}
    <Button label={`Count: ${5}`} variant="secondary" />
  </>
)

// ============================================
// Complete Examples
// ============================================

export const CompleteExamples = () => (
  <>
    {/* Button with custom color and label */}
    <Button 
      variant="primary"
      color="purple"
      label="Save Changes"
      size="lg"
      leftIcon={<span>💾</span>}
    />
    
    {/* Custom styled button */}
    <Button 
      customClassName="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg"
      label="Premium Feature"
      size="lg"
    />
    
    {/* ButtonLink with custom color */}
    <ButtonLink 
      to="/dashboard"
      variant="primary"
      color="green"
      label="Go to Dashboard"
    />
  </>
)

