import { useRouter } from "next/router";
import { musicData, albumList } from "../../dummyData";
import Album from "./album";
import Link from "next/link";
export default function AlbumID() {
  const router = useRouter();
  const albumID = router.query.albumID;

  const data = musicData.filter((item) => {
    if (item["album"] === albumList[albumID - 1]) return item;
  });

  return (
    <>
      <Album data={data} />
    </>
  );
}
