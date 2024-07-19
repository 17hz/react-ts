import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/$id')({
  component: () => <div>Hello /home/$id!</div>,
})
