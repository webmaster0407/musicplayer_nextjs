import Image from "next/image";
const myLoader = ({ src, width, quality }) => {
  return `https://admin.dequency.io/assets/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export const MyImage = ({ src, width, height }) => {
  return (
    <div className="shrink-0">
      <Image
        className="rounded-2xl"
        loader={myLoader}
        src={src}
        alt=""
        width={width}
        height={height}
        draggable={false}
        objectFit="cover"
      />
    </div>
  );
};
