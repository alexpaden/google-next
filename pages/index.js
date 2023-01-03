import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Next Clone</title>
        <meta name="description" content="A clone of google search using nextjs, tailwind, custom search api" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between">

      {/* Left */}
      <div className="flex space-x-4 items-center">
        <p>Gmail</p>
        <p>Images</p>
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center">
        <p>Gmail</p>
        <p>Images</p>
      </div>

      {/*Icon */}

      {/* Avatar */}
      </header>

      {/* Body */}

    </div>
  )
}
