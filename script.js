"use strict";
const contentBox = document.querySelector(".content-box");
const dailyBtn = document.querySelector(".daily");
const weeklyBtn = document.querySelector(".weekly");
const monthlyBtn = document.querySelector(".monthly");
const data = [
  {
    title: "Work",
    image: "./images/icon-work.svg",
    color: "#ff8c66",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },

  {
    title: "Play",
    image: "./images/icon-play.svg",
    color: "#56c2e6",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    image: "./images/icon-study.svg",
    color: "#ff5c7c",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    image: "./images/icon-exercise.svg",
    color: "#4acf81",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    image: "./images/icon-social.svg",
    color: "#7536d3",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    image: "./images/icon-self-care.svg",
    color: "#f1c75b",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
function renderData(timeframes) {
  let row = "";
  data.forEach((product) => {
    const timeData = product.timeframes[timeframes];
    console.log(timeData);
    row += `
    <div class="flex flex-col ">
         <div
           class="relative bg-light-red-work p-5 rounded-t-xl h-16 overflow-hidden" style="background-color:${product.color}"
         >
           <img
             src="${product.image}"
             class="absolute right-5 -top-1 w-12"
             alt=""
           />
         </div>
         <div
           class="flex bg-nav-blue hover:bg-hover-blue rounded-xl flex-col -mt-8 z-10 p-5 text-white"
         >
           <div
             class="flex font-semibold justify-between gap-20 items-center md:mb-3"
           >
             <h1>${product.title}</h1>
             <img src="images/icon-ellipsis.svg" alt="icon-ellipsis" />
           </div>
           <div class="flex md:block justify-between items-center">
             <h1 class="md:text-5xl text-3xl font-light mb-1">${timeData.current}hrs</h1>
             <p class="text-pale-blue">Last ${timeframes} - ${timeData.previous}hrs</p>
           </div>
         </div>
       </div>
   `;
    contentBox.innerHTML = row;
  });
}

renderData("weekly");
dailyBtn.addEventListener("click", () => {
  renderData("daily");
  dailyBtn.classList.add("active");
  weeklyBtn.classList.remove("active");
  monthlyBtn.classList.remove("active");
});
weeklyBtn.addEventListener("click", () => {
  renderData("weekly");
  dailyBtn.classList.remove("active");
  weeklyBtn.classList.add("active");
  monthlyBtn.classList.remove("active");
});
monthlyBtn.addEventListener("click", () => {
  renderData("monthly");
  dailyBtn.classList.remove("active");
  weeklyBtn.classList.remove("active");
  monthlyBtn.classList.add("active");
});
