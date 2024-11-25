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
    shortDesc:"A comprehensive e-commerce platform offering seamless shopping experiences, including secure payment gateways and efficient checkout processes.",
    desc: "Led the development of a robust e-commerce platform, building a single-page application (SPA) using React and Redux to create a dynamic and responsive user experience. Designed reusable components and optimized state management, improving future development speed by 30%. Integrated secure payment gateways, including PayPal and Stripe, to reduce checkout abandonment by 18%. Engineered efficient backend communication with RESTful APIs using Node.js and Express, achieving a 40% reduction in data latency. Implemented JWT-based authentication for secure user sessions and Role-Based Access Control (RBAC) to enhance platform security. Integrated Google Address Autocomplete API, streamlining the checkout process and increasing accuracy, resulting in a 20% faster completion rate.",
    demo: ["assets/ecom-1.png", "assets/ecom-2.png", "assets/ecom-3.png"],
    github:'https://github.com/xcai0511/c74-lululemon'
  },
  wildOasis: {
    title: "The Wild Oasis",
    techstacks: [
      "NextJS",
      "Tailwind CSS",
      "Supabase",
        'NextAuth',
    ],

    shortDesc: 'A vacation booking platform enabling users to browse, filter, and book accommodations with ease, featuring Google Login and a dynamic date-picker.',
    desc: "Developed a travel and accommodation booking platform showcasing vacation destinations. Leveraged Next.js for seamless server-side rendering and enhanced performance. Integrated NextAuth with Google Login for secure and intuitive user authentication. Styled the platform with Tailwind CSS, delivering a visually appealing, mobile-first user interface. Utilized Supabase to handle database interactions, user management, and storage solutions. Added a dynamic calendar feature using React Day Picker, enabling users to select vacation dates seamlessly. Deployed on Vercel for fast load times and global accessibility.",
    demo: ["assets/oasis4.png","assets/oasis2.png","assets/oasis3.png","assets/oasis1.png",],
    link: "https://the-wild-oasis-dempsey.vercel.app/",
    github:'https://github.com/zsg0428/the-wild-oasis-project'
  },

  // forkify project
  forkify: {
    title: "Forkify Project",
    techstacks: ["HTML", "CSS", "JavaScript"],

    shortDesc:'A recipe search application that allows users to find, save, and manage their favorite recipes with real-time API data fetching.',
    desc: "Built a responsive and interactive recipe search application using JavaScript, integrating dynamic API data fetching to provide users with detailed recipe information, including cooking time, servings, and ingredients. Implemented asynchronous API calls to deliver recipes based on user input, ensuring real-time data updates. Designed a user-friendly interface focused on an intuitive and visually appealing user experience. Managed state efficiently by storing user-selected recipes in localStorage, allowing users to save, add, and remove favorite recipes for seamless and persistent interactions.",
    demo: ["assets/forkify-1.png"],
    link: "https://forkify-dempsey.netlify.app/",
    github:'https://github.com/zsg0428/forkify-project-dempsey'
  },
};

export default projects;
