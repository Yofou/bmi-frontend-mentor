import "@fontsource-variable/inter"
import "../style/base.css"

export type BaseLayoutProps = React.PropsWithChildren<{}>

export const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  return <main className="w-full min-h-screen grid grid-cols-[1fr_minmax(0,1440px)_1fr] auto-rows-max">
    {props.children}
  </main>
}
