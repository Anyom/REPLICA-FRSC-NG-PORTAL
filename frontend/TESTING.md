# FRSC Frontend Testing Guide

This document outlines the testing setup and best practices for the FRSC Nigeria Portal frontend.

## Testing Stack

- **Jest** - Test runner and assertion library
- **React Testing Library** - Component testing utilities
- **@testing-library/jest-dom** - Custom matchers
- **@testing-library/user-event** - User interaction simulation
- **jest-mock-extended** - Advanced mocking utilities

## Installation

All testing dependencies are included in `package.json`. Install them with:

```bash
npm install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm test -- --watch
```

### Run tests with coverage
```bash
npm test -- --coverage
```

### Run specific test file
```bash
npm test -- components/Button.test.tsx
```

### Run tests matching a pattern
```bash
npm test -- --testNamePattern="login"
```

## Test Structure

Tests are organized by type:

```
__tests__/
├── lib/                 # Library functions (API, validation, etc.)
├── components/          # Component unit tests
├── e2e/                 # End-to-end tests
└── pages/              # Page component tests
```

## Writing Tests

### Unit Tests (Components)

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Component Name', () => {
  it('should render correctly', () => {
    render(<Component />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })

  it('should handle click events', async () => {
    const handleClick = jest.fn()
    render(<Component onClick={handleClick} />)
    
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })
})
```

### API Tests

```typescript
describe('API Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch data successfully', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: 'test' }),
      })
    )

    const result = await api.getData()
    expect(result).toEqual({ data: 'test' })
  })
})
```

### Validation Tests

```typescript
import { loginSchema } from '@/lib/validation'

describe('Login Validation', () => {
  it('should validate correct credentials', () => {
    const valid = loginSchema.safeParse({
      email: 'user@example.com',
      password: 'SecurePass123!',
    })
    expect(valid.success).toBe(true)
  })

  it('should reject invalid email', () => {
    const invalid = loginSchema.safeParse({
      email: 'invalid-email',
      password: 'SecurePass123!',
    })
    expect(invalid.success).toBe(false)
  })
})
```

## Coverage Thresholds

Current coverage requirements:
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

To view coverage report:
```bash
npm test -- --coverage --coverageReporters=lcov
# Then open coverage/lcov-report/index.html
```

## Best Practices

### 1. Test Behavior, Not Implementation
```typescript
// ✅ Good
it('should display error when login fails', () => {
  render(<LoginForm />)
  // Test user sees error message
})

// ❌ Bad
it('should call setError function', () => {
  // Testing implementation details
})
```

### 2. Use Semantic Queries
```typescript
// ✅ Good queries (in order of preference)
screen.getByRole('button', { name: /submit/i })
screen.getByLabelText(/email/i)
screen.getByPlaceholderText(/email/i)

// ❌ Avoid
screen.getByTestId('submit-btn')
```

### 3. User Event Over Fire Event
```typescript
// ✅ Good
await userEvent.click(button)

// ❌ Avoid
fireEvent.click(button)
```

### 4. Async Testing
```typescript
// ✅ Good
it('should display data after loading', async () => {
  render(<Component />)
  const data = await screen.findByText(/data/i)
  expect(data).toBeInTheDocument()
})
```

### 5. Mock External Dependencies
```typescript
jest.mock('@/lib/api', () => ({
  api: {
    auth: {
      login: jest.fn(),
    },
  },
}))
```

## Common Test Patterns

### Testing Forms
```typescript
it('should submit form with valid data', async () => {
  render(<LoginForm />)
  
  await userEvent.type(screen.getByLabelText(/email/i), 'user@test.com')
  await userEvent.type(screen.getByLabelText(/password/i), 'password123')
  await userEvent.click(screen.getByRole('button', { name: /submit/i }))
  
  expect(mockSubmit).toHaveBeenCalledWith({
    email: 'user@test.com',
    password: 'password123',
  })
})
```

### Testing Conditional Rendering
```typescript
it('should show admin panel for admin users', () => {
  render(<Dashboard user={{ role: 'admin' }} />)
  expect(screen.getByText(/admin panel/i)).toBeInTheDocument()
})

it('should hide admin panel for regular users', () => {
  render(<Dashboard user={{ role: 'user' }} />)
  expect(screen.queryByText(/admin panel/i)).not.toBeInTheDocument()
})
```

### Testing Navigation
```typescript
it('should navigate to login page on logout', async () => {
  const mockPush = jest.fn()
  jest.mock('next/navigation', () => ({
    useRouter: () => ({ push: mockPush }),
  }))

  render(<Header />)
  await userEvent.click(screen.getByRole('button', { name: /logout/i }))
  
  expect(mockPush).toHaveBeenCalledWith('/login')
})
```

## Debugging Tests

### Visual Debugging
```typescript
import { screen, debug } from '@testing-library/react'

it('should render correctly', () => {
  render(<Component />)
  debug() // Prints DOM to console
  screen.debug(screen.getByRole('button')) // Debug specific element
})
```

### Logging Queries
```typescript
screen.logTestingPlaygroundURL() // Opens testing playground in browser
```

### Using Breakpoints
```typescript
it('should work correctly', async () => {
  render(<Component />)
  // Add breakpoint here in debugger
  debugger
  await userEvent.click(screen.getByRole('button'))
})
```

Run with: `node --inspect-brk node_modules/.bin/jest --runInBand`

## CI/CD Integration

Tests run automatically on pull requests. To run locally before pushing:

```bash
npm test -- --coverage
```

All tests must pass and coverage thresholds met before merging.

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library Docs](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Common Testing Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Contributing

When adding new features:
1. Write tests first (TDD approach is recommended)
2. Ensure coverage meets thresholds
3. Run `npm test -- --coverage` before committing
4. Update this guide if adding new testing patterns
