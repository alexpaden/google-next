import Head from 'next/head'
import Avatar from '../components/Avatar'
import Footer from '../components/Footer'
import { SearchIcon, MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import Image from 'next/image'

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
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        {/*Icon */}
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

        {/* Avatar */}
        <Avatar url="https://links.papareact.com/5me" />
      </div>
      </header>

      {/* Body */}


      <form className="flex flex-col items-center mt-40">
        <Image
          width="300"
          objectFit="cover"
          height="100"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gary-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button className="btn">
            Google Search
          </button>
          <button className="btn">
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}

      <Footer />
    </div>
  );
}
