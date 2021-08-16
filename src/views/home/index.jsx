import { ArrowRightOutlined } from '@ant-design/icons';
import { MessageDisplay } from 'components/common';
import { ProductShowcaseGrid } from 'components/product';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, SHOP } from 'constants/routes';
import {
  useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop
} from 'hooks';
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImg from 'images/banner-girl.png';
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  useDocumentTitle('Mango Glamour | Home');
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended
  } = useRecommendedProducts(6);

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>Todo</strong>
              &nbsp;
              <strong>en un solo lugar</strong>
            </h1>
            <p>
              Somos una tienda online, con increibles descuentos en articulos de belleza, cuidado personal y mucho mas.
            </p>
            <br />
            <Link to={SHOP} className="button">
              Comprar ahora &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <Carousels autoPlay={2300} infiniteLoop={true}>
                <div>
                    <Image src="https://res.cloudinary.com/marcos020499/image/upload/v1628720611/MANGO_GLAMOUR_sdfave.png" />
                </div>
                <div>
                    <Image src="https://res.cloudinary.com/marcos020499/image/upload/v1628783010/banner_z04kmu.jpg" />
                </div>
                <div>
                    <Image src="https://res.cloudinary.com/marcos020499/image/upload/v1628784608/banner2_s2i1eb.jpg" />
                </div>
            </Carousels>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Productos seleccionados</h1>
            <Link to={FEATURED_PRODUCTS}>Ver Todos</Link>
          </div>
          {(errorFeatured && !isLoadingFeatured) ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={featuredProducts}
              skeletonCount={6}
            />
          )}
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Productos recomendados</h1>
            <Link to={RECOMMENDED_PRODUCTS}>Ver todos</Link>
          </div>
          {(errorRecommended && !isLoadingRecommended) ? (
            <MessageDisplay
              message={errorRecommended}
              action={fetchRecommendedProducts}
              buttonLabel="Intentar de nuevo"
            />
          ) : (
            <ProductShowcaseGrid
              products={recommendedProducts}
              skeletonCount={6}
            />
          )}
        </div>
      </div>
    </main>
  );
};
const Image = styled.img`
  max-width: 360px;
  min-width: 360px;
  max-height: 310px;
  min-height: 310px;
  @media screen and (max-width: 768px) {
    max-width: 120px;
    min-width: 120px;
    max-height: 120px;
    min-height: 120px;
  }
`;
const Carousels = styled(Carousel)`
  width: 35vw;
  padding: 4vw 0 0 0vw;
  height: 20vw;
`;

export default Home;
