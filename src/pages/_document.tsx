import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='scroll-smooth bg-gray-100 font-sans'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
