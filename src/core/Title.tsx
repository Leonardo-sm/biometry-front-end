import { Helmet } from 'react-helmet'

type TitleProps = {
  title: string
}

function Title({ title }: TitleProps) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

export default Title
