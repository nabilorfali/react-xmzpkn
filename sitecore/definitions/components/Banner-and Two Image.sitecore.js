import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Banner-and Two Image",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "image_0",
      type: CommonFieldTypes.Image
    }, {
      name: "image_1",
      type: CommonFieldTypes.Image
    }, {
      name: "image_2",
      type: CommonFieldTypes.Image
    }, {
      name: "paragraph_4",
      type: CommonFieldTypes.SingleLineText
    }]
  });
}
