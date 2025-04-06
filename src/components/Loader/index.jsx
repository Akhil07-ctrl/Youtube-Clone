

import NxtWatchContext from '../../context/NxtWatchContext'
import {LoaderContainer, Spinner} from './styledComponents'

const LoaderView = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isLightTheme} = value
      return (
        <LoaderContainer>
          <Spinner />
        </LoaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default LoaderView
