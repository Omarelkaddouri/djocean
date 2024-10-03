import React from 'react'

const slid = () => {
  return (
  //   <section
  //   id="billboard"
  //   className="position-relative d-flex align-items-center py-5 bg-light-gray"
  //   style={{
  //     backgroundImage: "url(images/banner-image-bg.jpg)",
  //     backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat",
  //     backgroundPosition: "center",
  //     height: 800
  //   }}
  // >
  //   <div className="position-absolute end-0 pe-0 pe-xxl-5 me-0 me-xxl-5 swiper-next main-slider-button-next">
  //     <svg
  //       className="chevron-forward-circle d-flex justify-content-center align-items-center p-2"
  //       width={80}
  //       height={80}
  //     >
  //       <use xlinkHref="#alt-arrow-right-outline" />
  //     </svg>
  //   </div>
  //   <div className="position-absolute start-0 ps-0 ps-xxl-5 ms-0 ms-xxl-5 swiper-prev main-slider-button-prev">
  //     <svg
  //       className="chevron-back-circle d-flex justify-content-center align-items-center p-2"
  //       width={80}
  //       height={80}
  //     >
  //       <use xlinkHref="#alt-arrow-left-outline" />
  //     </svg>
  //   </div>
  //   <div className="swiper main-swiper">
  //     <div className="swiper-wrapper d-flex align-items-center">
  //       <div className="swiper-slide">
  //         <div className="container">
  //           <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
  //             <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
  //               <div className="banner-content">
  //                 <h2>The Fine Print Book Collection</h2>
  //                 <p>Best Offer Save 30%. Grab it now!</p>
  //                 <a href="index.html" className="btn mt-3">
  //                   Shop Collection
  //                 </a>
  //               </div>
  //             </div>
  //             <div className="col-md-6 text-center">
  //               <div className="image-holder">
  //                 <img
  //                   src="images/banner-image2.png"
  //                   className="img-fluid"
  //                   alt="banner"
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="swiper-slide">
  //         <div className="container">
  //           <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
  //             <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
  //               <div className="banner-content">
  //                 <h2>How Innovation works</h2>
  //                 <p>Discount available. Grab it now!</p>
  //                 <a href="index.html" className="btn mt-3">
  //                   Shop Product
  //                 </a>
  //               </div>
  //             </div>
  //             <div className="col-md-6 text-center">
  //               <div className="image-holder">
  //                 <img
  //                   src="images/banner-image1.png"
  //                   className="img-fluid"
  //                   alt="banner"
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="swiper-slide">
  //         <div className="container">
  //           <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
  //             <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
  //               <div className="banner-content">
  //                 <h2>Your Heart is the Sea</h2>
  //                 <p>Limited stocks available. Grab it now!</p>
  //                 <a href="index.html" className="btn mt-3">
  //                   Shop Collection
  //                 </a>
  //               </div>
  //             </div>
  //             <div className="col-md-6 text-center">
  //               <div className="image-holder">
  //                 <img
  //                   src="images/banner-image.png"
  //                   className="img-fluid"
  //                   alt="banner"
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  <div id="default-carousel" className="relative w-full" data-carousel="slide">
  {/* Carousel wrapper */}
  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    {/* Item 1 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="/docs/images/carousel/carousel-1.svg"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
    {/* Item 2 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="/docs/images/carousel/carousel-2.svg"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
    {/* Item 3 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="/docs/images/carousel/carousel-3.svg"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
    {/* Item 4 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="/docs/images/carousel/carousel-4.svg"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
    {/* Item 5 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="/docs/images/carousel/carousel-5.svg"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
  </div>
  {/* Slider indicators */}
  <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
    <button
      type="button"
      className="w-3 h-3 rounded-full"
      aria-current="true"
      aria-label="Slide 1"
      data-carousel-slide-to={0}
    />
    <button
      type="button"
      className="w-3 h-3 rounded-full"
      aria-current="false"
      aria-label="Slide 2"
      data-carousel-slide-to={1}
    />
    <button
      type="button"
      className="w-3 h-3 rounded-full"
      aria-current="false"
      aria-label="Slide 3"
      data-carousel-slide-to={2}
    />
    <button
      type="button"
      className="w-3 h-3 rounded-full"
      aria-current="false"
      aria-label="Slide 4"
      data-carousel-slide-to={3}
    />
    <button
      type="button"
      className="w-3 h-3 rounded-full"
      aria-current="false"
      aria-label="Slide 5"
      data-carousel-slide-to={4}
    />
  </div>
  {/* Slider controls */}
  <button
    type="button"
    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-prev=""
  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg
        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 1 1 5l4 4"
        />
      </svg>
      <span className="sr-only">Previous</span>
    </span>
  </button>
  <button
    type="button"
    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-next=""
  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg
        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m1 9 4-4-4-4"
        />
      </svg>
      <span className="sr-only">Next</span>
    </span>
  </button>
</div>

  )
}

export default slid