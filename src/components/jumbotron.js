import React from "react"
import header from "../images/terricks-noah-n9R0MN3XGvY-unsplash.jpg"

export default function Jumbotron() {
  return (
    <section class="relative bg-cb overflow-hidden">
      <div class="max-w-screen-xl mx-auto ">
        <div class="relative z-10 pb-8 bg-cb sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            class="hidden  lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="#011c40"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div class=" bg-cb relative pt-6 px-4 sm:px-6 lg:px-8"></div>

          <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="text-center lg:text-left">
              <h2 class="text-4xl text-white tracking-tight leading-10 font-thin sm:text-5xl sm:leading-none md:text-6xl">
                Your one stop shop for the latest in{" "}
                <span className="text-cg">Boy’s Fashion Clothing</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div
          class="h-56 w-full bg-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          style={{
            backgroundImage: `url(${header})`,
            backgroundSize: "cover",
            backgroundPositionY: "top -80px",
            backgroundPositionX: "center",
          }}
        ></div>
      </div>
    </section>
  )
}
