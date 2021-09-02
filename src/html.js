import React, { useEffect } from "react"
import PropTypes from "prop-types"

export default function HTML(props) {

  useEffect(() => {
    const editStyleEmbed = () => {
      const style = document.createElement( 'style' );

      style.classList.add('embedly-css');
      style.textContent = `
        .card .provider {
          display: none !important;
        }
        .embedly-card .brd {
          display: none !important;
        }
      `
      document.querySelector('head').appendChild( style )
    }
    editStyleEmbed()
  })
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        
        {props.headComponents}
        
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script async src="//cdn.embedly.com/widgets/platform.js"></script>
        <script async type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
