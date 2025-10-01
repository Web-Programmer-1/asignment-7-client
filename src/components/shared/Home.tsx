// "use client";
// import React from "react";
// import Spider from "./Multiple";
// import ResizeHandle from "../modules/utils/AutoTexter";
// import { AuroraText } from "../modules/utils/AuraText";
// import SinnyBtn from "../modules/utils/SinnyBtn";
// import { AnimatedGradientText } from "../modules/utils/GradientText";
// import { HelloGradient } from "../modules/utils/Hellow";
// import ShimmerButton from "../modules/utils/SimmerBtn";
// import { CodeBracketIcon, LightBulbIcon } from "@heroicons/react/24/solid";

// import {
//   SiMongodb,
//   SiExpress,
//   SiReact,
//   SiNodedotjs,
//   SiPostgresql,
// } from "react-icons/si";
// import SpaceBtn from "../modules/utils/SpaceBtn";
// import ResumeBtn from "../modules/utils/ResumeBtn";

// // Self-contained SVG icon for the "Welcome" badge
// const DotIcon = () => (
//   <svg
//     width="8"
//     height="8"
//     viewBox="0 0 8 8"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <circle cx="4" cy="4" r="4" fill="currentColor" />
//   </svg>
// );

// // The data for the code snippet
// const coderData = {
//   name: "Zane Whitaker",
//   role: "Frontend Developer",
//   seniority: "Mid-Level",
//   location: "Bangladesh",
//   skills: [
//     "React",
//     "Next.js",
//     "JavaScript",
//     "TypeScript",
//     "TailwindCSS",
//     "CSS",
//     "Figma",
//     "GitHub",
//     "HTML",
//     "Astro",
//     "Node.js",
//     "Express",
//     "MongoDB",
//     "Firebase",
//     "Git",
//   ],
// };

// // The styled code window component
// // const CoderProfileCard = () => {
// //   return (
// //     // Main container with gradient, border, and shadow - theme-aware
// //     <div className="w-full mx-auto bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-[#000000] dark:to-[#0a0d37] border-zinc-300 dark:border-[#1b2c68a0] relative rounded-lg border shadow-lg">

// //       {/* Top gradient border element */}
// //       <div className="flex flex-row">
// //         <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
// //         <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
// //       </div>

// //       {/* Window Header */}
// //       <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-zinc-200 dark:bg-[#000000]">
// //         <div className="flex flex-row space-x-2">
// //           <div className="h-3 w-3 rounded-full bg-red-500"></div>
// //           <div className="h-3 w-3 rounded-full bg-orange-400"></div>
// //           <div className="h-3 w-3 rounded-full bg-green-400"></div>
// //         </div>
// //         <div className="text-xs text-zinc-600 dark:text-gray-400 font-mono">coder.js</div>
// //       </div>

// //       {/* Code Content Area */}
// //       <div className="overflow-hidden border-t-[2px] border-zinc-300 dark:border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative">
// //         {/* Background blur effects */}
// //         <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-600 rounded-full opacity-10 filter blur-3xl"></div>
// //         <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-10 filter blur-3xl"></div>

// //         <div className="relative flex">
// //           {/* Line Numbers */}
// //           <div className="hidden md:flex flex-col items-end pr-4 text-zinc-600 dark:text-gray-500 font-mono text-xs">
// //             {Array.from({ length: 12 }, (_, i) => (
// //               <div key={i} className="leading-relaxed select-none opacity-70">{i + 1}</div>
// //             ))}
// //           </div>

// //           {/* Code Snippet with theme-aware colors */}
// //           <code className="font-mono text-xs md:text-sm lg:text-base w-full">
// //             <div>
// //               <span className="mr-2 text-pink-500 dark:text-pink-400">const</span>
// //               <span className="mr-2 text-violet-500 dark:text-violet-400">coder</span>
// //               <span className="mr-2 text-pink-500 dark:text-pink-400">=</span>
// //               <span className="text-zinc-600 dark:text-gray-400">{'{'}</span>
// //             </div>
// //             <div className="pl-6">
// //               <span className="text-zinc-800 dark:text-white">name:</span>
// //               <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
// //               <span className="text-green-600 dark:text-green-400">{coderData.name}</span>
// //               <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
// //             </div>
// //             <div className="pl-6">
// //               <span className="text-zinc-800 dark:text-white">role:</span>
// //               <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
// //               <span className="text-green-600 dark:text-green-400">{coderData.role}</span>
// //               <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
// //             </div>
// //             <div className="pl-6">
// //               <span className="text-zinc-800 dark:text-white">seniority:</span>
// //               <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
// //               <span className="text-green-600 dark:text-green-400">{coderData.seniority}</span>
// //               <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
// //             </div>
// //             <div className="pl-6">
// //               <span className="text-zinc-800 dark:text-white">location:</span>
// //               <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
// //               <span className="text-green-600 dark:text-green-400">{coderData.location}</span>
// //               <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
// //             </div>
// //             <div className="pl-6">
// //               <span className="text-zinc-800 dark:text-white">skills:</span>
// //               <span className="text-zinc-600 dark:text-gray-400">{'['}</span>
// //               <div className="pl-6 flex flex-wrap">
// //                 {coderData.skills.map((skill, index) => (
// //                   <span key={skill} className="mr-1">
// //                     <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
// //                     <span className="text-cyan-600 dark:text-cyan-400">{skill}</span>
// //                     <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
// //                     {index < coderData.skills.length - 1 && <span className="text-zinc-600 dark:text-gray-400">, </span>}
// //                   </span>
// //                 ))}
// //               </div>
// //               <span className="text-zinc-600 dark:text-gray-400">{'],'}</span>
// //             </div>
// //             <div>
// //               <span className="text-zinc-600 dark:text-gray-400">{'};'}</span>
// //             </div>
// //           </code>
// //         </div>
// //       </div>

// //       {/* Window Footer */}
// //       <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-zinc-300 dark:border-gray-800 pt-3 text-xs text-zinc-600 dark:text-gray-500 flex justify-between items-center">
// //         <span>UTF-8</span>
// //         <span>JavaScript</span>
// //         <span>Ln 12, Col 2</span>
// //       </div>
// //     </div>
// //   );
// // };

// // Main component
// const Portfolio = () => {
//   return (
//     <div className="min-h-screen w-full relative flex items-center justify-center font-sans p-4 sm:p-6 lg:p-8">
//       {/* Light mode Azure Depths */}
//       <div
//         className="absolute inset-0 z-0 dark:hidden"
//         style={{
//           background:
//             "radial-gradient(125% 125% at 50% 100%, #ffffff 40%, #3b82f6 100%)",
//         }}
//       />

//       {/* Dark mode Azure Depths */}
//       <div
//         className="absolute inset-0 z-0 hidden dark:block"
//         style={{
//           background:
//             "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
//         }}
//       />

//       {/* Main Content Container */}
//       <div className="container mx-auto max-w-7xl relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">
//           {/* Left Column: Text Content */}
//           <div className="flex flex-col gap-4 sm:gap-6 items-start text-left order-2 lg:order-1 animate-fade-in-up">
//             <div>
//               {/* <DotIcon />
//               Welcome to my universe
//              */}

//               <div className="mt-10">
//                 <SinnyBtn></SinnyBtn>
//               </div>

//               {/* hlw gradient */}
//               <div>
//                 <HelloGradient></HelloGradient>
//               </div>
//             </div>

//             <div className="relative">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
//                 <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
//                   <ResizeHandle></ResizeHandle>
//                 </span>
//               </h1>
//             </div>

//             <div className="flex flex-wrap gap-2 sm:gap-3 my-2 sm:my-4">
//               <button
//                 type="button"
//                 className="flex items-center gap-3 text-white 
//                  bg-gradient-to-r from-cyan-500 to-blue-500 
//                  hover:from-blue-500 hover:to-cyan-500
//                  focus:outline-none
//                  font-medium rounded-lg text-sm px-6 py-3 text-center me-2 mb-2
//                  shadow-lg shadow-cyan-400/50 hover:shadow-blue-500/60
//                  transition-all duration-300"
//               >
//                 {/* MongoDB */}
//                 <span className="p-1.5 bg-green-600/20 rounded-full shadow-md shadow-green-400/60">
//                   <SiMongodb
//                     className="text-green-400 text-lg"
//                     title="MongoDB"
//                   />
//                 </span>
//                 {/* Express */}
//                 <span className="p-1.5 bg-gray-800/30 rounded-full shadow-md shadow-gray-500/50">
//                   <SiExpress
//                     className="text-gray-200 text-lg"
//                     title="Express.js"
//                   />
//                 </span>
//                 {/* React */}
//                 <span className="p-1.5 bg-sky-500/20 rounded-full shadow-md shadow-sky-400/70">
//                   <SiReact className="text-sky-300 text-lg" title="React.js" />
//                 </span>
//                 {/* Node.js */}
//                 <span className="p-1.5 bg-green-500/20 rounded-full shadow-md shadow-green-400/70">
//                   <SiNodedotjs
//                     className="text-green-500 text-lg"
//                     title="Node.js"
//                   />
//                 </span>
//                 MERN Stack
//               </button>

//               {/* PERN STACK */}

//               <button
//                 type="button"
//                 className="flex items-center gap-2 text-white 
//                  bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 
//                  hover:from-cyan-500 hover:to-purple-600 
//                  focus:outline-none
//                  font-medium rounded-lg text-sm px-6 py-3 text-center me-2 mb-2
//                  shadow-lg shadow-blue-500/40 hover:shadow-purple-500/50
//                  transition-all duration-300"
//               >
//                 {/* PostgreSQL */}
//                 <span className="p-1.5 bg-white/10 rounded-full shadow-md">
//                   <SiPostgresql
//                     className="text-sky-300 text-lg"
//                     title="PostgreSQL"
//                   />
//                 </span>
//                 {/* Express */}
//                 <span className="p-1.5 bg-white/10 rounded-full shadow-md">
//                   <SiExpress
//                     className="text-gray-200 text-lg"
//                     title="Express.js"
//                   />
//                 </span>
//                 {/* React */}
//                 <span className="p-1.5 bg-white/10 rounded-full shadow-md">
//                   <SiReact className="text-sky-400 text-lg" title="React.js" />
//                 </span>
//                 {/* Node.js */}
//                 <span className="p-1.5 bg-white/10 rounded-full shadow-md">
//                   <SiNodedotjs
//                     className="text-green-400 text-lg"
//                     title="Node.js"
//                   />
//                 </span>
//                 PERN Stack
//               </button>


//           <p> 
            
//               </p>
             
//                 <button
//       type="button"
//       className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
//                  hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
//                  focus:ring-purple-300 dark:focus:ring-purple-800 
//                  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//     >
//       <CodeBracketIcon className="w-5 h-5" />
//       FullStack Developer
//     </button>
           

//             <button
//       type="button"
//       className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
//                  hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
//                  focus:ring-cyan-300 dark:focus:ring-cyan-800 
//                  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//     >
//       <LightBulbIcon className="w-5 h-5" />
//       Problem Solver
//     </button>
//             </div>

//             {/* <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
//               JavaScript lover 🖋️ | Olovals creator ⚡ | Crafting frameworks and
//               coding the future ✨
//             </p> */}

//          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
//   <span className="font-extrabold underline underline-offset-4 decoration-4 decoration-blue-400 dark:decoration-blue-600">
//     Passion Clean Code
//   </span>{" "}
//   | <span> Skilled in modern web technologies </span>⚡ |  <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Crafting secure and scalable applications </span>
// 📱
// </p>

//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
//               {/* <button className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
//                 Learn More
//               </button> */}

//               <SpaceBtn></SpaceBtn>
//             <ResumeBtn></ResumeBtn>
//             </div>
//           </div>

//           {/* Right Column: Code Editor */}
//           <div className="order-1 lg:order-2 animate-fade-in-up">
//             {/* <CoderProfileCard /> */}
//             <Spider></Spider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

// // Add custom CSS for animations
// const styles = `
//   @keyframes fade-in-up {
//     from {
//       opacity: 0;
//       transform: translateY(30px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }

//   .animate-fade-in-up {
//     animation: fade-in-up 0.6s ease-out forwards;
//   }

//   .hover\\:shadow-3xl:hover {
//     box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
//   }
// `;

// // Inject styles
// if (typeof document !== "undefined") {
//   const styleSheet = document.createElement("style");
//   styleSheet.textContent = styles;
//   document.head.appendChild(styleSheet);
// }






















"use client";
import React from "react";
import Spider from "./Multiple";
import ResizeHandle from "../modules/utils/AutoTexter";
import SinnyBtn from "../modules/utils/SinnyBtn";
import { HelloGradient } from "../modules/utils/Hellow";
import SpaceBtn from "../modules/utils/SpaceBtn";
import ResumeBtn from "../modules/utils/ResumeBtn";
import { CodeBracketIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";

const Portfolio = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center font-sans p-4 sm:p-6 lg:p-8">
      {/* Light Background */}
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #ffffff 40%, #3b82f6 100%)",
        }}
      />
      {/* Dark Background */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">
          {/* ===== Left Column ===== */}
          <div className="flex flex-col gap-4 sm:gap-6 items-start text-left order-2 lg:order-1 animate-fade-in-up">

            {/* Fancy Button */}
            <div className="mt-10">
              <SinnyBtn />
            </div>

            {/* Gradient Hello */}
            <div>
              <HelloGradient />
            </div>

            {/* Dynamic Typing Title */}
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-sky-400 dark:to-indigo-500 bg-clip-text text-transparent">
                  <ResizeHandle />
                </span>
              </h1>
            </div>

            {/* ===== Stack Buttons ===== */}
            <div className="flex flex-wrap gap-2 sm:gap-3 my-2 sm:my-4">
              {/* MERN */}
              <button
                type="button"
                className="flex items-center gap-3 text-white 
                bg-gradient-to-r from-cyan-500 to-blue-500 
                hover:from-blue-500 hover:to-cyan-500
                focus:outline-none
                font-medium rounded-lg text-sm px-6 py-3 text-center me-2 mb-2
                shadow-lg shadow-cyan-400/50 hover:shadow-blue-500/60
                transition-all duration-300"
              >
                <span className="p-1.5 bg-green-600/20 rounded-full shadow-md shadow-green-400/60">
                  <SiMongodb className="text-green-400 text-lg" />
                </span>
                <span className="p-1.5 bg-gray-800/30 rounded-full shadow-md shadow-gray-500/50">
                  <SiExpress className="text-gray-200 text-lg" />
                </span>
                <span className="p-1.5 bg-sky-500/20 rounded-full shadow-md shadow-sky-400/70">
                  <SiReact className="text-sky-300 text-lg" />
                </span>
                <span className="p-1.5 bg-green-500/20 rounded-full shadow-md shadow-green-400/70">
                  <SiNodedotjs className="text-green-500 text-lg" />
                </span>
                MERN Stack
              </button>

              {/* PERN */}
              <button
                type="button"
                className="flex items-center gap-2 text-white 
                bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 
                hover:from-cyan-500 hover:to-purple-600 
                focus:outline-none
                font-medium rounded-lg text-sm px-6 py-3 text-center me-2 mb-2
                shadow-lg shadow-blue-500/40 hover:shadow-purple-500/50
                transition-all duration-300"
              >
                <span className="p-1.5 bg-white/10 rounded-full shadow-md">
                  <SiPostgresql className="text-sky-300 text-lg" />
                </span>
                <span className="p-1.5 bg-white/10 rounded-full shadow-md">
                  <SiExpress className="text-gray-200 text-lg" />
                </span>
                <span className="p-1.5 bg-white/10 rounded-full shadow-md">
                  <SiReact className="text-sky-400 text-lg" />
                </span>
                <span className="p-1.5 bg-white/10 rounded-full shadow-md">
                  <SiNodedotjs className="text-green-400 text-lg" />
                </span>
                PERN Stack
              </button>

              {/* FullStack Developer */}
              <button
                type="button"
                className="inline-flex items-center gap-2 text-white 
                bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700
                dark:from-fuchsia-500 dark:to-purple-800
                hover:scale-105 focus:ring-4 focus:outline-none 
                focus:ring-purple-300 dark:focus:ring-purple-800
                font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
                shadow-lg transition-all duration-300"
              >
                <CodeBracketIcon className="w-5 h-5" />
                FullStack Developer
              </button>

              {/* Problem Solver */}
              <button
                type="button"
                className="inline-flex items-center gap-2 text-white 
                bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600
                dark:from-sky-500 dark:to-blue-700
                hover:scale-105 focus:ring-4 focus:outline-none 
                focus:ring-cyan-300 dark:focus:ring-sky-800
                font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
                shadow-lg transition-all duration-300"
              >
                <LightBulbIcon className="w-5 h-5" />
                Problem Solver
              </button>
            </div>

            {/* ===== Description ===== */}
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
              <span className="font-extrabold underline underline-offset-4 decoration-4 decoration-blue-400 dark:decoration-blue-600">
                Passion Clean Code
              </span>{" "}
              | Skilled in modern web technologies ⚡ |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 dark:from-cyan-300 dark:to-green-500">
                Crafting secure and scalable applications
              </span>{" "}
              📱🚀
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
              <SpaceBtn />
              <ResumeBtn />
            </div>
          </div>

          {/* ===== Right Column ===== */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <Spider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

// Custom Animation
const styles = `
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }
`;
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}



















