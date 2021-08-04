import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Demo",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "button_0",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "header_1",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "video_2",
      type: CommonFieldTypes.Image
    }, {
      name: "paragraph_4",
      type: CommonFieldTypes.SingleLineText
    }]
  });
}
