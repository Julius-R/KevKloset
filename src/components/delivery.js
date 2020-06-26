import React from "react"
import { GrDeliver, GrMap, GrHome } from "react-icons/gr"

export default function Delivery() {
  return (
    <section class="text-cb body-font">
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
            <div class="w-12 h-12 inline-flex items-center text-3xl justify-center rounded-full text-cb mb-4 flex-shrink-0">
              <GrMap />
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-cb text-lg title-font font-medium mb-2">
                Local Pickup Available
              </h2>
              <p class="leading-relaxed text-base">
                Customers local to the area can pickup their products as soon as
                they are available. Notification will be sent with details.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
            <div class="w-12 h-12 text-3xl inline-flex items-center justify-center rounded-full text-indigo-400 mb-4 flex-shrink-0">
              <GrHome />
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-cb text-lg title-font font-medium mb-2">
                Local Delivery Available
              </h2>
              <p class="leading-relaxed text-base">
                Local customers have the option of local delivery. Please ensure
                that contact information is correct and up to date when
                selecting this option. Fees may apply.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
            <div class="w-12 h-12 text-3xl inline-flex items-center justify-center rounded-full mb-4 flex-shrink-0">
              <GrDeliver />
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-cb text-lg title-font font-medium mb-2">
                Domestic Shipping Options
              </h2>
              <p class="leading-relaxed text-base">
                Don't live local? That's okay! We make sure to provide domestic
                shipping for all of our products across the United States. Fees
                may apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
