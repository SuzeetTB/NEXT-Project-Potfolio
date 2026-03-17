import Image from "next/image";

export const ProfileAvatar = () => {
  return (
    <div className="relative flex items-center justify-center w-full ml-4">
      <div className="absolute z-20 w-40 h-40 mt-6 bg-white rounded-full dark:bg-black animate-ring"></div>
      <div className="relative z-30 mr-1 rounded-full">
        <Image
          src="/assets/images/profile_circle.png"
          alt="profile-avatar"
          height={183}
          width={179}
          quality={100}
        />
      </div>
    </div>
  );
};
