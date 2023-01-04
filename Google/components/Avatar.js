import Image from 'next/image'

function Avatar({ url }) {
    return (
      <Image
        loading="lazy"
        className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
        src={url}
        height={40}
        width={40}
        alt="profile pic"
      />
    );
  }
  
  export default Avatar;
  