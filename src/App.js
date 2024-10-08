import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import Home from './pages/Home';
// import { Toaster } from 'react-hot-toast';
// import FindReplaceModal from './components/FindReplaceModal';
// import DataState from './context/data/DataState';
// import FunctionState from './context/functions/FunctionState';
import ProductCard from './components/CompoundComponent';

const App = () => {
  return (
    <div className="tw-flex tw-flex-wrap tw-gap-4 tw-p-4 tw-items-center">

      <div>
        <ProductCard>
          <ProductCard.Image src={"https://picsum.photos/300/200"} alt="product_image" />
          <ProductCard.Heading>Sample Product Name</ProductCard.Heading>
          <ProductCard.Price>₹199</ProductCard.Price>
          <ProductCard.Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ipsum corrupti sit nobis incidunt ea nisi iure id quidem corporis ipsam accusamus cumque aut dicta asperiores est earum, repellat fugiat?
          </ProductCard.Description>
        </ProductCard>
      </div>

      <div>
        <ProductCard>
          <ProductCard.Heading className="tw-mb-2">Sample Product Name</ProductCard.Heading>
          <ProductCard.Image src={"https://picsum.photos/300/200"} alt="product_image" />
          <ProductCard.Price>₹199</ProductCard.Price>
          <ProductCard.Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ipsum corrupti sit nobis incidunt ea nisi iure id quidem corporis ipsam accusamus cumque aut dicta asperiores est earum, repellat fugiat?
          </ProductCard.Description>
        </ProductCard>
      </div>

      <div>
        <ProductCard>
          <ProductCard.Image src={"https://picsum.photos/300/200"} alt="product_image" />
          <ProductCard.Price>₹199</ProductCard.Price>
          <ProductCard.Heading>Sample Product Name</ProductCard.Heading>
          <ProductCard.Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ipsum corrupti sit nobis incidunt ea nisi iure id quidem corporis ipsam accusamus cumque aut dicta asperiores est earum, repellat fugiat?
          </ProductCard.Description>
          <div className='tw-w-full tw-flex tw-mt-3'>
            <div className='tw-w-1/2 tw-pe-1'>
              <button className='tw-w-full tw-bg-blue-600 tw-outline-none tw-py-1 tw-uppercase tw-text-sm tw-text-neutral-50' type="button">
                Add To Cart
              </button>
            </div>
            <div className='tw-w-1/2 tw-ps-1'>
              <button className='tw-w-full tw-bg-blue-600 tw-outline-none tw-py-1 tw-uppercase tw-text-sm tw-text-neutral-50' type="button">
                Buy Now
              </button>
            </div>
          </div>
        </ProductCard>
      </div>

    </div>
  )
}

export default App