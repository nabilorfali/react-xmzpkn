/* eslint-disable */
import React from 'react'
import { Image, Paragraph } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './banner-and-two-image.css'

const BannerAndTwoImage = (props) => {
  return (
    <div className="banner-and-two-image-container">
      <Image field={props.fields.image_1} className="banner-and-two-image-image"></Image>
      <div className="banner-and-two-image-container1">
        <Image className="banner-and-two-image-image1">
          <Paragraph
            field={props.fields.paragraph_4}
            className="banner-and-two-image-paragraph"
          ></Paragraph>
        </Image>
        <Image field={props.fields.image_2} className="banner-and-two-image-image2"></Image>
      </div>
    </div>
  )
}

BannerAndTwoImage.defaultProps = {
  'fields.image_0': 'src',
  fields: {},
  'fields.image_1': 'src',
  'fields.image_2': 'src',
  'fields.paragraph_4': 'text',
}

BannerAndTwoImage.propTypes = {
  'fields.image_0': PropTypes.object,
  fields: PropTypes.object,
  'fields.image_1': PropTypes.object,
  'fields.image_2': PropTypes.object,
  'fields.paragraph_4': PropTypes.string,
}

export default BannerAndTwoImage
