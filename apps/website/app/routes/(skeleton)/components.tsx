import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(skeleton)/components')({
  component: () => <div>Hello /(skeleton)/components!</div>,
})
