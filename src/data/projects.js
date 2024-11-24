const projects = {
  ecommerce: {
    title: "E-commerce Platform Development",
    techstacks: [
      "React",
      "Redux",
      "JavaScript",
      "TypeScript",
      "MUI",
      "NodeJS",
      "ExpressJS",
    ],
    desc: "Led the development of a robust e-commerce platform, building a single-page application (SPA) using React and Redux to create a dynamic and responsive user experience. Designed reusable components and optimized state management, improving future development speed by 30%. Integrated secure payment gateways, including PayPal and Stripe, to reduce checkout abandonment by 18%. Engineered efficient backend communication with RESTful APIs using Node.js and Express, achieving a 40% reduction in data latency. Implemented JWT-based authentication for secure user sessions and Role-Based Access Control (RBAC) to enhance platform security. Integrated Google Address Autocomplete API, streamlining the checkout process and increasing accuracy, resulting in a 20% faster completion rate.",
    demo: ["assets/ecom-1.png", "assets/ecom-2.png", "assets/ecom-3.png"],
  },
  wildOasis: {
    title: "The Wild Oasis",
    techstacks: [
      "NextJS",
      "Tailwind CSS",
      "Supabase",
        'NextAuth',
    ],
    desc: "Developed a travel and accommodation booking platform, The Wild Oasis, using React for a seamless and interactive front-end experience. Implemented a responsive design with Tailwind CSS to ensure accessibility across devices. Built RESTful APIs with Node.js and Express to handle bookings, user management, and property listings. Integrated MongoDB for efficient data storage and retrieval, supporting scalable user and property data management. Added authentication and authorization features using JWT, ensuring secure user sessions and data protection. Designed an interactive property search feature, allowing users to filter accommodations by location, price, and amenities, improving user satisfaction by 25%.",
    demo: ["assets/oasis1.png","assets/oasis2.png","assets/oasis3.png","assets/oasis4.png",],
    link: "https://the-wild-oasis-dempsey.vercel.app/",
  },

  // forkify project
  forkify: {
    title: "Forkify Project",
    techstacks: ["HTML", "CSS", "JavaScript"],
    desc: "Built a responsive and interactive recipe search application using JavaScript, integrating dynamic API data fetching to provide users with detailed recipe information, including cooking time, servings, and ingredients. Implemented asynchronous API calls to deliver recipes based on user input, ensuring real-time data updates. Designed a user-friendly interface focused on an intuitive and visually appealing user experience. Managed state efficiently by storing user-selected recipes in localStorage, allowing users to save, add, and remove favorite recipes for seamless and persistent interactions.",
    demo: ["assets/forkify-1.png"],
    link: "https://forkify-dempsey.netlify.app/",
  },
};

export default projects;
