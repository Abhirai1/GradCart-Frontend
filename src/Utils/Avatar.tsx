import React from "react";

interface AvatarProps {
  letter: string;
}

const Avatar: React.FC<AvatarProps> = ({ letter }) => {
  return (
    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold">
      {letter}
    </div>
  );
};

export default Avatar;
