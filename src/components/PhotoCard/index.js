import React from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import ReactPlaceholder from 'react-placeholder'
import {
  TextBlock,
  RectShape,
  RoundShape
} from 'react-placeholder/lib/placeholders'
import { FavButton } from '../FavButton'
import { Link } from '@reach/router'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { PropTypes } from 'prop-types'
const photoCardSkeleton = (
  <>
    <RectShape color="#eee" style={{ height: '300px', marginBottom: 10 }} />
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <RoundShape
        color="#eee"
        style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }}
      />
      <TextBlock color="#eee" rows={1} style={{ width: 120 }} />
    </div>
  </>
)

export const PhotoCard = ({ id, liked, likes = 0, src = '', loading }) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {show && (
        <ReactPlaceholder
          ready={!loading}
          showLoadingAnimation
          customPlaceholder={photoCardSkeleton}
        >
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>

            <ToggleLikeMutation>
              {(toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({ variables: { input: { id } } })
                }

                return (
                  <FavButton
                    liked={liked}
                    likes={likes}
                    onClick={handleFavClick}
                  />
                )
              }}
            </ToggleLikeMutation>
          </>
        </ReactPlaceholder>
      )}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
