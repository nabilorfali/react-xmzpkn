import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "test12",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "button_0",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "image_1",
      type: CommonFieldTypes.Image
    }, {
      name: "button_2",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "image_3",
      type: CommonFieldTypes.Image
    }, {
      name: "image_4",
      type: CommonFieldTypes.Image
    }, {
      name: "button_5",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "header_6",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "paragraph_7",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "paragraph_8",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "paragraph_9",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "paragraph_10",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "container_1628889299436",
      type: CommonFieldTypes.GeneralLink
    }]
  });
}
