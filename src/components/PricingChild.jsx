import React from 'react'

const PricingChild = () => {
  return (
    <div class="w-full mx-auto bg-white px-5 py-10 text-gray-600 mb-10 pt-20 pb-20">
      <div class="max-w-5xl mx-auto md:flex">
        <div class="md:w-1/4 md:flex md:flex-col">
          <div class="text-left w-full flex-grow md:pr-5">
            <h1 class="text-4xl font-bold mb-5">Pricing</h1>
            <h3 class="text-md font-medium mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit repellat
              dignissimos laboriosam odit accusamus porro*
            </h3>
          </div>
          <div class="w-full mb-2">
            <p class="text-xs">*Lorem ipsum sit amet</p>
          </div>
        </div>
        <div class="md:w-3/4">
          <div class="max-w-4xl mx-auto md:flex">
            <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-2 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div class="w-full flex-grow">
                <h2 class="text-center font-bold uppercase mb-4">PERSONAL</h2>
                <h3 class="text-center font-bold text-4xl mb-5">
                  $5<span class="text-sm">/mo</span>
                </h3>
                <ul class="text-sm mb-8">
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> Lorem ipsum
                  </li>
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> Dolor sit amet
                  </li>
                </ul>
              </div>
              <div class="w-full">
                <button class="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                  Buy Now
                </button>
              </div>
            </div>
            <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
              <div class="w-full flex-grow">
                <h2 class="text-center font-bold uppercase mb-4">TEAM</h2>
                <h3 class="text-center font-bold text-4xl md:text-5xl mb-5">
                  $15<span class="text-sm">/mo</span>
                </h3>
                <ul class="text-sm mb-8">
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> Lorem ipsum
                  </li>
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> Dolor sit amet
                  </li>
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> Consectetur
                  </li>
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> Adipisicing
                  </li>
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> Elit repellat
                  </li>
                </ul>
              </div>
              <div class="w-full">
                <button class="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                  Buy Now
                </button>
              </div>
            </div>
            <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-2 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div class="w-full flex-grow">
                <h2 class="text-center font-bold uppercase mb-4">PRO</h2>
                <h3 class="text-center font-bold text-4xl mb-5">
                  $35<span class="text-sm">/mo</span>
                </h3>
                <ul class="text-sm mb-8">
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> Lorem ipsum
                  </li>
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> Dolor sit amet
                  </li>
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> Consectetur
                  </li>
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> Adipisicing
                  </li>
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> Much more...
                  </li>
                </ul>
              </div>
              <div class="w-full">
                <button class="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingChild