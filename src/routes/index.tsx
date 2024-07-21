import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="h-lvh w-lvw flex justify-center items-center text-red-400 text-3xl">
      <span>hello</span>
    </div>
  ),
})
