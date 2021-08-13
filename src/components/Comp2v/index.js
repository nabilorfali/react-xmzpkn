/* eslint-disable */
import React from 'react'
import { Header, Image, Paragraph, Button, Toggle, Dropdown } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './comp2v.css'

const Comp2v = (props) => {
  return (
    <div className="comp2v-container">
      <Header field={props.fields.header_5} className="comp2v-header"></Header>
      <div className="comp2v-container1">
        <div className="comp2v-container2">
          <Image field={props.fields.image_3} className="comp2v-image"></Image>
          <Paragraph field={props.fields.paragraph_9} className="comp2v-paragraph"></Paragraph>
          <Button field={props.fields.button_2} className="comp2v-button"></Button>
        </div>
        <div className="comp2v-container3">
          <Image field={props.fields.image_1} className="comp2v-image1"></Image>
          <Paragraph field={props.fields.paragraph_7} className="comp2v-paragraph1"></Paragraph>
          <Button field={props.fields.button_4} className="comp2v-button1"></Button>
        </div>
        <div className="comp2v-container4">
          <Image field={props.fields.image_6} className="comp2v-image2"></Image>
          <Paragraph field={props.fields.paragraph_8} className="comp2v-paragraph2"></Paragraph>
          <Button field={props.fields.button_0} className="comp2v-button2"></Button>
        </div>
      </div>
      <div className="comp2v-container5">
        <Toggle className="comp2v-toggle"></Toggle>
        <Dropdown className="comp2v-dropdown"></Dropdown>
      </div>
    </div>
  )
}

Comp2v.defaultProps = {
  'fields.button_0': 'text',
  fields: {},
  'fields.image_1': 'src',
  'fields.button_2': 'text',
  'fields.image_3': 'src',
  'fields.button_4': 'text',
  'fields.header_5': 'text',
  'fields.image_6': 'src',
  'fields.paragraph_7': 'text',
  'fields.paragraph_8': 'text',
  'fields.paragraph_9': 'text',
}

Comp2v.propTypes = {
  'fields.button_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.image_1': PropTypes.object,
  'fields.button_2': PropTypes.string,
  'fields.image_3': PropTypes.object,
  'fields.button_4': PropTypes.string,
  'fields.header_5': PropTypes.string,
  'fields.image_6': PropTypes.object,
  'fields.paragraph_7': PropTypes.string,
  'fields.paragraph_8': PropTypes.string,
  'fields.paragraph_9': PropTypes.string,
}

export default Comp2v
