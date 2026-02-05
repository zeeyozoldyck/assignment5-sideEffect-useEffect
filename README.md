# Assignment 5 - useEffect Side Effects

This project demonstrates various useEffect patterns and side effects in React.

## Tasks Included:

### Task 1 - First useEffect (Run Once)
- Component: `HelloEffect`
- Demonstrates useEffect with empty dependency array `[]`
- Logs "Component Mounted" once when component renders

### Task 2 - Toggle Message (Conditional Rendering)
- Component: `ToggleMessage`
- Uses `[count]` dependency array
- Logs "Count Changed" only when count state changes

### Task 3 - Update Document Title
- Component: `UpdateTitle`
- Updates `document.title` as a side effect
- Shows how useEffect can affect browser APIs

### Task 4 - Timer with Cleanup
- Component: `TimerWithCleanup`
- Uses `setInterval` with proper cleanup
- Demonstrates cleanup function to prevent memory leaks

### Task 5 - Conditional useEffect
- Component: `ConditionalEffect`
- Uses conditional logic inside useEffect
- Runs effect only when toggle is ON

### Task 6 - Fetch Data on Mount
- Component: `FetchOnMount`
- Fetches data from API once on component mount
- Shows loading states and data display

### Task 7 - Fetch Data on State Change
- Component: `FetchOnStateChange`
- Re-fetches data when category state changes
- Demonstrates dependency-driven data fetching

### Task 8 - Debug an Infinite Loop
- See `TASK8-EXPLANATION.txt` for detailed explanation
- Explains why the given code causes infinite loops
- Provides multiple solutions to fix the issue

## How to Run:

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open browser to `http://localhost:5173`

## Key Learning Points:

- useEffect with different dependency arrays
- Cleanup functions for subscriptions and intervals
- Conditional effects based on state
- Data fetching patterns
- Common pitfalls and how to avoid them

All components are imported and rendered in `App.tsx` in the specified order.