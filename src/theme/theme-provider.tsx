import 'dayjs/locale/zh-cn'

import dayjs from 'dayjs'
import { App, ConfigProvider } from 'antd'
import zh_CN from 'antd/locale/zh_CN'

dayjs.locale('zh-cn')

type Props = {
  children: React.ReactNode
}

export function ThemeProvider({ children }: Props) {
  return (
    <ConfigProvider
      locale={zh_CN}
      theme={{
        hashed: false,
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  )
}
