import { albumData } from "../data";
import { AlbumGallery } from "../containers/AlbumGallery";
export default function Album({ data }) {
  console.log(data);
  return (
    <>
      <div>discover > Aaron Wayne > Let There Be House</div>

      <AlbumGallery data={data} />
    </>
  );
}
