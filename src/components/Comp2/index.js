/* eslint-disable */
import React from 'react'
import { Header, Image, Paragraph, Button, Label, Textinput } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './comp2.css'

const Comp2 = (props) => {
  return (
    <div className="comp2-container">
      <Header field={props.fields.header_5} className="comp2-header"></Header>
      <div className="comp2-container01">
        <div className="comp2-container02">
          <Image field={props.fields.image_3} className="comp2-image"></Image>
          <Paragraph field={props.fields.paragraph_9} className="comp2-paragraph"></Paragraph>
          <Button field={props.fields.button_2} className="comp2-button"></Button>
        </div>
        <div className="comp2-container03">
          <Image field={props.fields.image_1} className="comp2-image1"></Image>
          <Paragraph field={props.fields.paragraph_7} className="comp2-paragraph1"></Paragraph>
          <Button field={props.fields.button_4} className="comp2-button1"></Button>
        </div>
        <div className="comp2-container04">
          <Image field={props.fields.image_6} className="comp2-image2"></Image>
          <Paragraph field={props.fields.paragraph_8} className="comp2-paragraph2"></Paragraph>
          <Button field={props.fields.button_0} className="comp2-button2"></Button>
        </div>
      </div>
      <form className="comp2-form">
        <div className="comp2-container05">
          <div className="comp2-container06">
            <Label field={props.fields.label_1627334053014_label} className="comp2-label"></Label>
            <Label field={props.fields.label_1627334053019_label} className="comp2-label1"></Label>
          </div>
          <div className="comp2-container07">
            <Textinput className="comp2-textinput"></Textinput>
            <Button field={props.fields.button_1627334053014} className="comp2-button3"></Button>
            <Textinput className="comp2-textinput1"></Textinput>
          </div>
        </div>
      </form>
      <div className="comp2-container08">
        <Textinput className="comp2-textinput2"></Textinput>
        <div className="comp2-container09">
          <Label field={props.fields.label_1627334053033_label} className="comp2-label2"></Label>
          <Textinput className="comp2-textinput3"></Textinput>
        </div>
      </div>
      <div className="comp2-container10">
        <Textinput className="comp2-textinput4"></Textinput>
        <div className="comp2-container11">
          <Label field={props.fields.label_1627334053051_label} className="comp2-label3"></Label>
          <Textinput className="comp2-textinput5"></Textinput>
        </div>
      </div>
    </div>
  )
}

Comp2.defaultProps = {
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
  'fields.label_1627334053014_label': 'text',
  'fields.button_1627334053014': 'text',
  'fields.label_1627334053019_label': 'text',
  'fields.label_1627334053033_label': 'text',
  'fields.label_1627334053051_label': 'text',
}

Comp2.propTypes = {
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
  'fields.label_1627334053014_label': PropTypes.string,
  'fields.button_1627334053014': PropTypes.string,
  'fields.label_1627334053019_label': PropTypes.string,
  'fields.label_1627334053033_label': PropTypes.string,
  'fields.label_1627334053051_label': PropTypes.string,
}

export default Comp2
