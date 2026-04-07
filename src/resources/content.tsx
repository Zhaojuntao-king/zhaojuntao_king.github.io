import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Juntao",
  lastName: "Zhao",
  name: `Juntao Zhao`,
  role: "AI4S Master's student",
  avatar: "/images/avatar.jpg",
  email: "2401212755@stu.pku.edu.cn",
  location: "Asia/Shanghai", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Chinese", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Zhaojuntao-king",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
    {
    name: "Wechat",
    icon: "email",
    link: `mailto:${person.email`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Because of your smile, you make life more beautiful.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Juntao, a Master's student at{" "}
    <Text as="span" size="xl" weight="strong">
      Peking University
    </Text>{" "}
    focusing on AI-driven modeling and generative design for battery materials.
    <br />
    I aim to bridge machine learning and physical sciences to accelerate discovery.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
    I am currently pursuing a Master's degree at Peking University,
    focusing on AI-driven approaches for electrolyte design in lithium-ion batteries.
    <br /><br />
    My research lies at the intersection of:
    <br />
    - Machine learning for molecular systems  
    - Cross-scale simulation  
    - Data-driven materials discovery  
    I am expected to graduate in July 2027.
      </>
    ),
  },
  study: {
    display: true, // set to false to hide this section
    title: "Study Experience",
    experiences: [
      {
        company: "Peking University",
        timeframe: "2024 - Present",
        role: "Master's student",
        achievements: [
          <>
            Genming Lai#, Juntao Zhao#, et al., Jiaxin Zheng* and Chuying Ouyang*. Reusability report: exploring the utility and extensibility of an integrated modeling framework for liquid electrolyte design.
          </>,
          <>
            Genming Lai#, Ruiqi Zhang#, Chi Fang, Juntao Zhao, et al., Yunxing Zuo*, Bo Xu*, Jiaxin Zheng*. Machine-learning-accelerated mechanistic exploration of interface modification in lithium metal anode. npj Comput Mater 11,245 (2025).
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Southwest University",
        timeframe: "2020 - 2024",
        role: "Bachelor",
        achievements: [
          <>
             Gaoyuan Xing#, Juntao Zhao#, et al., Yanan Zhao*, Jing Liu*. Lanthanide-grafted covalent organic framework as a colorimetric and luminescence dual-mode nanoprobe for tetracycline detection. Sensors and Actuators B: Chemical，411, 2024, 135724
          </>,
        ],
        images: [
                    // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-05.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
        ],
      },
      {
        company: "Linfen No.1 Middle School, Shanxi Province",
        timeframe: "2017 - 2020",
        role: "high school students",
        images: [
                    // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-06.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
        ],
      },
      {
        company: "Xiangning No.3 Middle School",
        timeframe: "2014 - 2017",
        role: "middle school student",
        images: [
                    // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-07.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
        ],
      },
            {
        company: "Yingxu Primary School",
        timeframe: "2014 - 2017",
        role: "primary school student",
        images: [
                    // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-08.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
        ],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
       {
        title: "Machine Learning",
        description: <>Deep learning, GNN, generative models</>,
        tags: [{ name: "PyTorch" },
      },
      {
        title: "Materials Modeling",
        description: <>Molecular simulation and property prediction</>,
        tags: [{ name: "DFT" }, { name: "MD" }],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
