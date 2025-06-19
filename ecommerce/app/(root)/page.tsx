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
      {/* Featured Product Carousel */}
      {featuredProducts.length > 0 && (
        <div className="px-4 sm:px-6 md:px-10 lg:px-20 my-6 sm:my-8">
          <ProductCarousel data={featuredProducts} />
        </div>
      )}

      {/* New Arrivals Heading */}
      <div className="text-center my-8 sm:my-10 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold">New Arrivals</h2>
        <p className="text-sm sm:text-base text-gray-600">
          Check out the latest releases.
        </p>
      </div>

      {/* Product List */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20">
        <ProductList data={latestProducts} limit={4} />
      </div>
    </>
  );
};

export default Homepage;
