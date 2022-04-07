import { useRouter } from "next/router";
import { albumData } from "../../data";
import Album from "../album";
export default function AlbumID() {
  const router = useRouter();
  const albumID = router.query.albumID;
  return <Album data={albumData[albumID - 1]} />;
}
