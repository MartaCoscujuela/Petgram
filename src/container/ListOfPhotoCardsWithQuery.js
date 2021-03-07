import React from "react";
import { ListOfPhotoCardsComponent } from "../components/ListOfPhotoCards/index";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const renderProp = ({ loading, error, data = {} }) => {
  if (error) return <p>Error!</p>;
  return <ListOfPhotoCardsComponent data={data} loading={loading} />;
};

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={GET_PHOTOS} variables={{ categoryId }}>
    {renderProp}
  </Query>
);
