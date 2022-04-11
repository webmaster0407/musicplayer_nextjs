import { useRouter } from "next/router";
import { musicData } from "../../data";
import Link from "next/link";
export const BreadCrumb = () => {
  const router = useRouter();
  let crumbArray = router.asPath.split("/");
  let id = crumbArray[crumbArray.length - 1];
  let title = musicData[id - 1].title;

  crumbArray[crumbArray.length - 1] = title;

  var url = crumbArray.join("/");

  console.log(url);
  return (
    <div className="mt-10 ml-6 flex">
      <Link href="/discover">
        <a className="text-yellow-500 mr-2">discover</a>
      </Link>
      <a>&gt;</a>
      <Link href={"discover/" + crumbArray[1]}>
        <a className="text-yellow-500 mr-2 ml-2">{crumbArray[1]}</a>
      </Link>
      <a>&gt;</a>
      <a className="text-white ml-2">{crumbArray[2]}</a>
    </div>
  );
};
