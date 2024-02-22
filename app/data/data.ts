import filmflicker from "@/public/filmflicker.png";
import gamehub from "@/public/gamehub.png";
import gitops from "@/public/gitops.webp";
import shadcn from "@/public/shadcn.png";
import cicd from "@/public/cicd.png";
import boto3 from "@/public/boto3.jpg";
import portfolio from "@/public/portfolio.png";
import kubernetes from "@/public/kubernetes.png";
import selenium from "@/public/selenium.jpg";
import htmlcss from "@/public/htmlcss.webp";

export const projectList = [
  {
    id: 1,
    tag: "top",
    title: "Film Flicker",
    category: "frontend",
    image: filmflicker,
    description:
      "Movie and Anime Discovery Webapp built using Next App Router.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      shadcn,
    ],
    url: "https://filmflicker.vercel.app/",
    github: "https://github.com/ankitrajxd/filmflicker",
    detailedDescription:
      "🎬 FilmFlicker combines sleek design with powerful features, making it easy to navigate and uncover your next favorite movie. Lights, camera, action! 🍿",
    features: [
      "🔍 Searching",
      "⚡ Filtering by Genre",
      "🔑  Authentication",
      "📺 WatchList",
      "🔮 Recommendations",
    ],
  },
  {
    id: 2,
    title: "Play Quest",
    category: "frontend",
    image: gamehub,
    description:
      "Video game discovery platform built with TypeScript and React.js.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    url: undefined,
    github: "https://github.com/ankitrajxd/playquest",
    detailedDescription:
      "GameHub is a streamlined video game discovery platform built with TypeScript and React.js. This project allows users to effortlessly explore and find information about various games.",
    features: [
      "🔍  Searching",
      "⚡ Filtering by Genre",
      "🔮 AI based recommendation",
      "📱 Platform filter",
    ],
  },
  {
    id: 3,
    tag: "top",
    title: "Personal Portfolio",
    category: "frontend",
    image: portfolio,
    description:
      "Sleek personal portfolio website made with NextJs, ShadcnUI and Framer Motion.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    url: "https://ankitraj.vercel.app/",
    github: "https://github.com/ankitrajxd/personal-portfolio",
    features: [
      "Sleek and modern design",
      "Built with Next.js for server-side rendering",
      "Utilizes Tailwind CSS for responsive styling",
      "Animated transitions powered by Framer Motion",
    ],
    detailedDescription:
      "This project is a personal portfolio website showcasing the developer's skills and projects. It features a sleek and modern design implemented with Next.js, a React framework for server-side rendering.",
  },
  {
    id: 4,
    tag: "top",
    title: "CI CD Pipeline",
    category: "devops",
    image: cicd,
    description:
      "CICD Pipeline using Jenkins and docker for deploying Web application.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
    ],
    url: undefined,
    github: "https://github.com/ankitrajxd/CICD-PIPELINE-FOR-WEB-APPLICATION",
    features: [
      "Automated deployment process",
      "Integration with Jenkins for continuous integration",
      "Usage of Docker for containerization",
    ],
    detailedDescription:
      "This project implements a Continuous Integration and Continuous Deployment (CI/CD) pipeline using Jenkins and Docker for deploying web applications. It automates the deployment process and integrates with Jenkins for continuous integration.",
  },
  {
    id: 5,
    title: "GitOps Implementation",
    category: "devops",
    image: gitops,
    description: "Implemented GitOps on a Web app using Argo CD.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
    ],
    url: undefined,
    github: "#",
    features: [
      "GitOps implementation for managing infrastructure",
      "Usage of Argo CD for continuous delivery",
      "Integration with Kubernetes for container orchestration",
    ],
    detailedDescription:
      "This project implements GitOps methodology for managing infrastructure, specifically for a web application. It utilizes Argo CD for continuous delivery and integrates with Kubernetes for container orchestration.",
  },
  {
    id: 6,
    title: "Infrastructure Automation with IaC and AWS Boto3",
    category: "devops",
    image: boto3,
    description: " Automated repeated tasks in AWS cloud using AWS BOTO3.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    ],
    url: undefined,
    github: "https://github.com/ankitrajxd/aws-boto-python",
    features: [
      "Automation of repetitive tasks in AWS cloud environment",
      "Usage of AWS Boto3 library for scripting in Python",
      "Improvement of operational efficiency in AWS environment",
    ],
    detailedDescription:
      "This project automates repetitive tasks in the AWS cloud environment using the AWS Boto3 library in Python. It enhances operational efficiency by scripting common tasks, such as provisioning resources and managing configurations.",
  },
  {
    id: 7,
    title: "Search Query Automation Using Selenium",
    category: "devops",
    image: selenium,
    description: "Automated Searching List of Search Strings on Google",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
    ],
    url: undefined,
    github: "https://github.com/ankitrajxd/browser-search-automation",
    features: ["Automated Search", "Support for all browsers."],
    detailedDescription:
      "This project automates searching keywords on search engine automatically with user authentication.",
  },
  {
    id: 8,
    tag: "top",
    title: "Microservice Deployment on K8s",
    category: "devops",
    image: kubernetes,
    description: "Deployed a 10-tier microservice app on kuberentes.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
    ],
    url: undefined,
    github: "https://github.com/ankitrajxd/K8s-cluster-bootstrap",
    features: [
      "Automated Kubernetes cluster provisioning and management using Kubeadm",
      "Integration with DigitalOcean for scalable infrastructure deployment",
      "Improvement of operational efficiency in Kubernetes cluster management",
    ],
    detailedDescription:
      "This project automates the provisioning and management of Kubernetes clusters using Kubeadm. It integrates with DigitalOcean for scalable infrastructure deployment and enhances operational efficiency in Kubernetes cluster management.",
  },
  {
    id: 9,
    title: "HTML Landing Pages",
    category: "frontend",
    image: htmlcss,
    description: "List of Static Pages made with html and vanilla css",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    ],
    url: undefined,
    github: "https://github.com/ankitrajxd/html-css-projects",
    features: ["Responsive"],
    detailedDescription:
      "Curated repository of HTML, CSS, and SCSS projects showcasing my web development journey.",
  },
];

//////////////////////////////

export const skills = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "NextJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "TailwindCSS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    name: "Kubernetes",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    name: "Linux",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    name: "Jenkins",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    name: "Terraform",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
    name: "Ansible",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    name: "Python",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    name: "Docker",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    name: "Java",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    name: "AWS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
    name: "Prometheus",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    name: "Figma",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
    name: "GitLab",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg",
    name: "ArgoCD",
  },
];

////////////////
export const animes = [
  {
    title: "Mashle",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/55/54/555402a1a926576655f4e11fcb69fdb1/555402a1a926576655f4e11fcb69fdb1.jpg",
    description: "Magic is casually used by everyone.",
    url: "https://aniwatch.to/mashle-magic-and-muscles-season-2-18874?ref=search",
    tag: "Top",
    release_date: "2022",
  },
  {
    title: "Solo Leveling",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/b1/47/b147d331e311a5d5c8ee81269725fc92/b147d331e311a5d5c8ee81269725fc92.png",
    description: "Ordinary people received superhuman powers.",
    url: "https://aniwatch.to/solo-leveling-18718?ref=search",
    tag: "Top",
    release_date: "2023",
  },
  {
    title: "Jujutsu Kaisen",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/b5/1f/b51f863b05f30576cf9d85fa9b911bb5/b51f863b05f30576cf9d85fa9b911bb5.png",
    description: "Throughout Heaven and Earth, I Alone Am The Honored One",
    url: "https://aniwatch.to/jujutsu-kaisen-2nd-season-18413?ref=search",
    tag: "Trending",
    release_date: "2021",
  },
  {
    title: "Naruto",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg",
    description: "I will become hokage one day!",
    url: "https://aniwatch.to/naruto-shippuden-355?ref=search",
    release_date: "2002",
    tag: "Popular",
  },
  {
    title: "Your Name",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/16/ee/16eec56baf8f3fcc6430607f58ce3d12/16eec56baf8f3fcc6430607f58ce3d12.jpg",
    description: "Story of a high School in tokyo.",
    url: "https://aniwatchtv.to/your-name-10?ref=search",
    release_date: "2016",
    tag: "Movie",
  },
];

///////
export const socials = [
  {
    name: "Github",
    url: "https://github.com/ankitrajxd",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ankitraaj/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/isAnkit_",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
  },
];
