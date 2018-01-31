module.exports = `//----------------------------------
//    Application-wide Variables
//----------------------------------

/// Regular font family
/// @type List
$base-font-family: "Montserrat", sans-serif;
$base-font-size: 16px;
$base-font-weight: 400;

/// Color Map
/// @type List
$color-list: (
  "primary": #f64c56,
  "accent": #227b7f,
  "emphasis": #ffb400,
  "text-light": #ffffff,
  "text-dark": #414141,
  "text-muted": #767676
);

/// Z-indexes
/// @type List

$z-indexes: (
  "modal": 400,
  "dropdown": 200,
  "default": 1,
  "below": -1
);

/// Container's maximum width
/// @type Length
$max-width: 1180px !default;

/// Relative or absolute URL where all assets are served from
/// @type String
/// @example scss - When using a CDN
///   $base-url: 'http://cdn.example.com/assets/';
$base-url: "/assets/" !default;`
