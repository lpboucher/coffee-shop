/* eslint-disable */

import React from 'react'
import get from 'lodash/get'
import { Image, Header } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import HowItWorks from '../components/HowItWorks'
import ProductList from '../components/ProductList'
import logo from '../images/ill-short-dark.svg'

class StoreIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const products = get(this, 'props.data.allMoltinProduct.edges')
    const filterProductsWithoutImages = products.filter(
      v => v.node.includedData.main_image
    )
    return (
      <div>
        <Helmet title={siteTitle} />
        <Header as="h3" icon textAlign="center" style={{ marginBottom: '0' }}>
          <Header.Content style={{ height: '100vh', margin: '0 auto' }}>
            <Image src='https://images.pexels.com/photos/296888/pexels-photo-296888.jpeg?cs=srgb&dl=attractive-bar-barista-296888.jpg&fm=jpg' alt={'logo'} style={{height: '100%', objectFit: 'cover'}}/>
          </Header.Content>
        </Header>
        <HowItWorks></HowItWorks>
        <ProductList products={filterProductsWithoutImages} />
      </div>
    )
  }
}

export default StoreIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMoltinProduct {
      edges {
        node {
          originalId
          name
          description
          background_colour
          new
          meta {
            display_price {
              with_tax {
                amount
                currency
                formatted
              }
            }
          }
          includedData {
            main_image {
              id
              link {
                href
              }
            }
          }
          mainImage {
            childImageSharp {
              sizes(maxWidth: 600) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
