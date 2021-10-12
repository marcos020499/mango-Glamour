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
        <Div className="banner">
          <Carouselss autoPlay={2500} infiniteLoop={true}>
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
            <ButtonDiv>
            <Link to={SHOP} className="button">
              Comprar ahora &nbsp;
              <ArrowRightOutlined />
            </Link>
            </ButtonDiv>
          </div>
                <div>
                <h1 className="text-thin">
                  <strong>Tu mejor opción</strong>
                </h1>
                    <Image src="https://res.cloudinary.com/marcos020499/image/upload/v1628783010/banner_z04kmu.jpg" />
                    <ButtonDivP>
              <Link to={SHOP} className="button">
              Comprar ahora &nbsp;
              <ArrowRightOutlined />
            </Link>
            </ButtonDivP>
                </div>
                <div>
                <h1 className="text-thin">
                <strong>No lo piensas más</strong>
                </h1>
                    <Image src="https://res.cloudinary.com/marcos020499/image/upload/v1628784608/banner2_s2i1eb.jpg" />
            <ButtonDivP>
            <Link to={SHOP} className="button">
              Comprar ahora &nbsp;
              <ArrowRightOutlined />
            </Link>
            </ButtonDivP>
              </div>
          </Carouselss>
          </Div>

          <Divs className="banner">
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

        </Divs>
        <div className="display" style={{marginTop: '100px'}}>
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
const Divs = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Div = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  flex-direction: column;
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;
const ButtonDivP = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;  
`;
const Image = styled.img`
  max-width: 360px;
  min-width: 360px;
  max-height: 310px;
  min-height: 310px;
  @media screen and (max-width: 768px) {
    max-width: 80%;
    min-width: 80%;
    max-height: 240px;
    min-height: 240px;
  }
`;
const Carousels = styled(Carousel)`
  width: 35vw;
  padding: 4vw 0 0 0vw;
  height: 20vw;

`;
const Carouselss = styled(Carousel)`
  width: 100%;
  height: 300px;
`;

export default Home;
