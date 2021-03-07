/* eslint-disable react/display-name */

import React from 'react'
import { ListOfPhotoCardsWithQuery } from '../container/ListOfPhotoCardsWithQuery'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

const HomePage = ({ id }) => {
  return (
    <Layout
      title="Tu app de fotos de mascotas"
      subtitle="Con petgram puedes encontrar fotos de animales domésticos muy bonitos"
    >
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={id} />
    </Layout>
  )
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId !== props.categoryId
})
