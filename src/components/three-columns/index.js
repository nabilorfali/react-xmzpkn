/* eslint-disable */
import React from 'react'
import { Header, Paragraph, Image, Button } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './three-columns.css'

const ThreeColumns = (props) => {
  return (
    <div className="three-columns-container">
      <Header field={props.fields.header_6} className="three-columns-header"></Header>
      <Paragraph field={props.fields.paragraph_7} className="three-columns-paragraph"></Paragraph>
      <div className="three-columns-container1">
        <div className="three-columns-container2">
          <Image field={props.fields.image_3} className="three-columns-image"></Image>
          <Paragraph
            field={props.fields.paragraph_10}
            className="three-columns-paragraph1"
          ></Paragraph>
          <Button field={props.fields.button_0} className="three-columns-button"></Button>
        </div>
        <div className="three-columns-container3">
          <Image field={props.fields.image_4} className="three-columns-image1"></Image>
          <Paragraph
            field={props.fields.paragraph_8}
            className="three-columns-paragraph2"
          ></Paragraph>
          <Button field={props.fields.button_2} className="three-columns-button1"></Button>
        </div>
        <div className="three-columns-container4">
          <Image field={props.fields.image_1} className="three-columns-image2"></Image>
          <Paragraph
            field={props.fields.paragraph_9}
            className="three-columns-paragraph3"
          ></Paragraph>
          <Button field={props.fields.button_5} className="three-columns-button2"></Button>
        </div>
      </div>
    </div>
  )
}

ThreeColumns.defaultProps = {
  'fields.button_0': 'text',
  fields: {},
  'fields.image_1': 'src',
  'fields.button_2': 'text',
  'fields.image_3': 'src',
  'fields.image_4': 'src',
  'fields.button_5': 'text',
  'fields.header_6': 'text',
  'fields.paragraph_7': 'text',
  'fields.paragraph_8': 'text',
  'fields.paragraph_9': 'text',
  'fields.paragraph_10': 'text',
}

ThreeColumns.propTypes = {
  'fields.button_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.image_1': PropTypes.object,
  'fields.button_2': PropTypes.string,
  'fields.image_3': PropTypes.object,
  'fields.image_4': PropTypes.object,
  'fields.button_5': PropTypes.string,
  'fields.header_6': PropTypes.string,
  'fields.paragraph_7': PropTypes.string,
  'fields.paragraph_8': PropTypes.string,
  'fields.paragraph_9': PropTypes.string,
  'fields.paragraph_10': PropTypes.string,
}

export default ThreeColumns
