import { useEffect, useState } from "react";
import { musicData } from "./dummyData";

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [state, setState] = useState(musicData);

  // const fetchMusics = (searchTerm = "") => {
  //   const newData = musicData.filter((item) => {
  //     if (
  //       item["title"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
  //       item["artist"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
  //       item["album"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
  //       item.types[0].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
  //       item.types[1].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
  //       item.types[2].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
  //       item["license"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  //     )
  //       return item;
  //   });

  //   setState(newData);
  // };
  // useEffect(() => {
  //   fetchMusics(searchTerm);
  // }, [searchTerm]);

  return { setSearchTerm, searchTerm };
};
