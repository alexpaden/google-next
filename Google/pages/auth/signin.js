import React from "react";
import Header from "../../components/Header";
import Image from "next/image";
import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <Image
              className="w-52 object-cover"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt="google-logo"
              width={300}
              height={100}
            />
            <br/>
            <button
              className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
