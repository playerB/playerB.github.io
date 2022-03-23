import Link from 'next/link'
import HeaderMiddle from './components/HeaderMiddle'

export default function Test() {
  return (
    <>
      <HeaderMiddle links={ [
          {
            "link": "/",
            "label": "Home"
          },
          {
            "link": "/test",
            "label": "test"
          },
          {
            "link": "/pricing",
            "label": "Pricing"
          }
        ]
      }/>
        <Link href="/">
          <a>Back to home</a>
        </Link>
    </>
  )
}