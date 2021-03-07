/* eslint-disable react/display-name */
import React from 'react'
import { FavsWithQuery } from '../container/GetFavourites'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title="Tus favoritos" subtitle="Aquí puedes encontrar tus favoritos">
    <FavsWithQuery />
  </Layout>
)
