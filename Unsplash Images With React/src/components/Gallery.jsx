import React from "react";
import { useGlobalContext } from "../context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
const Gallery = () => {
  const url =
    "https://api.unsplash.com/search/photos?client_id=p-dpWF7chPY8EK--7g3vzmClq1ldDSXvdUmSAbEYzdo&query=office";
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url)
      return result.data
    }
  })
  console.log(response)
  return <h2>Gallery</h2>;
};

export default Gallery;
