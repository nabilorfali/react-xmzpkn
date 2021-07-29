import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Comp2",
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
      name: "button_4",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "header_5",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "image_6",
      type: CommonFieldTypes.Image
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
      name: "label_1627334053014_label",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "button_1627334053014",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "label_1627334053019_label",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "label_1627334053033_label",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "label_1627334053051_label",
      type: CommonFieldTypes.SingleLineText
    }]
  });
}
