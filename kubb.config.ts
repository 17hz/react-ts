import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginTs } from '@kubb/swagger-ts'
import { pluginClient } from '@kubb/swagger-client'
import { pluginTanstackQuery } from '@kubb/swagger-tanstack-query'

export default defineConfig([
  {
    name: 'petstore-service',
    root: 'src/services',
    input: {
      path: 'https://raw.githubusercontent.com/swagger-api/swagger-petstore/master/src/main/resources/openapi.yaml',
    },
    output: {
      path: 'petstore-service',
      clean: true,
    },
    plugins: [
      pluginOas({
        validate: false,
        output: false,
      }),
      pluginTs({
        output: { path: 'models' },
      }),
      pluginClient({
        output: {
          path: 'client',
        },
        group: { type: 'tag' },
        client: {
          importPath: '@/client',
        },
      }),
      pluginTanstackQuery({
        output: {
          path: 'hooks',
        },
      }),
    ],
  },
])
