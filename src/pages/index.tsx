import { createFileRoute } from '@tanstack/react-router'
import { Button, Flex, Form, Input } from 'antd'

export const Route = createFileRoute('/')({
  meta: () => [
    {
      title: 'Login',
    },
  ],
  component: LoginPage,
})

function LoginPage() {
  return (
    <div className="h-screen w-full">
      <header className="fixed flex h-[72px] w-full items-center justify-between px-[24px]">
        <a>
          <svg aria-hidden="true" width={40}>
            <use href={'#icon-logo'} fill={'yellow'} />
          </svg>
        </a>
      </header>
      <Flex className="h-screen w-full">
        <div
          className="flex max-w-[480px] flex-col items-center justify-center gap-[64px] bg-center p-[24px] pt-[72px]"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url("/assets/background/background-3-blur.webp")',
          }}
        >
          <div>
            <h3 className="text-center text-3xl font-extrabold">
              Hi, Welcome back
            </h3>
            <p className="mt-[16px] text-center text-base font-normal">
              More effectively with optimized workflows.
            </p>
          </div>
          <img src="/assets/illustrations/illustration-dashboard.webp" />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-[96px]">
          <div className="flex w-full max-w-[420px] flex-col items-center">
            <div className="w-full">
              <h5>Sign in to your account</h5>
              <p>Don&apos;t have an account?</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </Flex>
    </div>
  )
}

function LoginForm() {
  const [form] = Form.useForm()

  return (
    <Form name="login" size="large" form={form} className="w-full">
      <Form.Item>
        <Input />
      </Form.Item>
      <Form.Item>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" className="w-full bg-black">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  )
}
