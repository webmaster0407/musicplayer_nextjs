import Link from "next/link";
export const BreadCrumb = ({ data }) => {
  return (
    <div className="mt-10 ml-6 flex">
      <Link href="/discover">
        <a className="text-yellow-500 mr-2">discover</a>
      </Link>
      <a>&gt;</a>
      <Link href={"discover/" + data[0].artist}>
        <a className="text-yellow-500 mr-2 ml-2">{data[0].artist}</a>
      </Link>
      <a>&gt;</a>
      <a className="text-white ml-2">{data[0].title}</a>
    </div>
  );
};
