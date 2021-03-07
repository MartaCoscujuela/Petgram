import React, { useEffect, useState } from "react";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCardsComponent = ({
  data: { photos = [] } = {},
  loading,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("sets is loading to:" + loading);
    setIsLoading(loading);
  }, [loading]);

  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} loading={isLoading} />
      ))}
    </ul>
  );
};
