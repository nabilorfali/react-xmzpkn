import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "fsdf",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "button_0",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "button_1",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "image_2",
      type: CommonFieldTypes.Image
    }, {
      name: "image_3",
      type: CommonFieldTypes.Image
    }, {
      name: "paragraph_4",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "paragraph_5",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "header_6",
      type: CommonFieldTypes.SingleLineText
    }]
  });
}
