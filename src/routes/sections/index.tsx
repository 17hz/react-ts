import 'nprogress/nprogress.css'

import { createRouter, RouterProvider } from '@tanstack/react-router'
import nprogress from 'nprogress'

// Import the generated route tree
import { routeTree } from '@/routeTree.gen'

// https://tanstack.com/router/latest/docs/framework/react/guide/type-safety#exported-hooks-components-and-utilities
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Create a new router instance
const router = createRouter({ routeTree })

nprogress.configure({ showSpinner: false })

router.subscribe('onBeforeLoad', () => {
  nprogress.start()
})
router.subscribe('onResolved', () => {
  nprogress.done()
})

export function Router() {
  return <RouterProvider router={router} />
}
