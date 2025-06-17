import ProductList from '@/components/shared/product/product-list';
import {
  getLatestProducts,
  getFeaturedProducts,
} from '@/lib/actions/product.actions';
import ProductCarousel from '@/components/shared/product/product-carousel';

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      {featuredProducts.length > 0 && (
        <div className="px-6 md:px-10 lg:px-20 my-8">
          <ProductCarousel data={featuredProducts} />
        </div>
      )}

      <div className="text-center my-10 px-4">
        <h2 className="text-3xl font-bold">New Arrivals</h2>
        <p>Check out the latest releases.</p>
      </div>

      <div className="px-6 md:px-10 lg:px-20">
        <ProductList data={latestProducts} limit={4} />
      </div>
    </>
  );
};

export default Homepage;
