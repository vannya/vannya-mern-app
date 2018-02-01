module.exports = `@charset 'UTF-8';

//1. Abstract
@import 
  "abstracts/variables",
  "abstracts/functions",
  "abstracts/mixins",
  "abstracts/placeholders";

//2. Vendors

@import 
  "vendors/normalize", 
  "vendors/include-media";

//3. Base
@import 
  "base/base", 
  "base/fonts", 
  "base/typography", 
  "base/helpers";

//4. Layout
@import 
  "layout/header";

//5. Components

//6. Pages

//7. Themes
`