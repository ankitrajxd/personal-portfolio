import filmflicker from "@/public/filmflicker.png";
import gamehub from "@/public/gamehub.png";
import gitops from "@/public/gitops.webp";
import shadcn from "@/public/shadcn.png";
import cicd from "@/public/cicd.png";
import cicd2 from "@/public/cicd2.png";
import boto3 from "@/public/boto3.jpg";
import portfolio from "@/public/portfolio.png";
import kubernetesFullSize from "@/public/kubernetes.png";
import selenium from "@/public/selenium.jpg";
import htmlcss from "@/public/htmlcss.webp";
import nodejsFullSize from "@/public/nodejs.webp";
import userDashboard from "@/public/userDashboard.png";
import expressjs from "@/public/expressjs.png";
import discordclone from "@/public/discordClone2.png";

const techLinks = {
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  tailwindcss:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  linux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
  jenkins:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
  terraform:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
  ansible:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  prometheus:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
  figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  gitlab:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
  argocd:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  linkedin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
  twitter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  digitalOcean:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
};

const {
  nodejs,
  mongodb,
  nextjs,
  tailwindcss,
  git,
  linux,
  kubernetes,
  jenkins,
  terraform,
  ansible,
  python,
  docker,
  java,
  aws,
  prometheus,
  figma,
  gitlab,
  argocd,
  react,
  javascript,
  typescript,
  linkedin,
  twitter,
  github,
} = techLinks;

export const projectList = [
  {
    id: 12,
    tag: "top",
    title: "CICD Pipeline",
    category: "fullstack",
    image: cicd2,
    description:
      "Automated CI/CD Pipeline for Node.js Application with Github Actions and Kubernetes",
    tech: [argocd, kubernetes, github, docker],
    url: undefined,
    github: "https://github.com/ankitrajxd/nodeapp-gha-argocd-cicd",
    detailedDescription:
      "This project demonstrates setting up a CI/CD pipeline for a Node.js application. The pipeline test the application code,builds a Docker image of the application, pushes it to Docker Hub, and then deploys it in kubernetes environment (local) via argocd.",
  },
  {
    id: 10,
    tag: "top",
    title: "User Dashboard",
    category: "fullstack",
    image: userDashboard,
    description:
      "Full stack Authentication Dashboard built with express and NEXT.JS",
    tech: [shadcn, mongodb, nodejs, nextjs, tailwindcss, typescript],
    url: undefined,
    github: "https://github.com/ankitrajxd/codeclimb-api",
    features: ["Responsive"],
    detailedDescription:
      "This is a full stack Auth dashboard where users can signup, access their dashboard, settings page, login and forget password.",
  },
  {
    id: 11,
    tag: "top",
    title: "Codeclimb Api",
    category: "backend",
    image: nodejsFullSize,
    description:
      "Restful api for E-learning Platform made using expressjs and Mongodb",
    tech: [nodejs, mongodb],

    url: undefined,
    github: "https://github.com/ankitrajxd/codeclimb-api",
    features: ["Responsive"],
    detailedDescription:
      "This API allows users to explore coding challenges and track their progress as they solve them.",
  },

  {
    id: 1,
    tag: "top",
    title: "Film Flicker",
    category: "frontend",
    image: filmflicker,
    description:
      "Movie and Anime Discovery Webapp built using Next App Router.",
    tech: [nextjs, tailwindcss, mongodb, shadcn],

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
    tech: [react, tailwindcss],
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
    id: 13,
    tag: "",
    title: "Discord Ui Clone",
    category: "frontend",
    image: discordclone,
    description: "Responsive",
    tech: [argocd, kubernetes, github, docker],
    url: undefined,
    github: "https://github.com/ankitrajxd/nodeapp-gha-argocd-cicd",
    detailedDescription:
      "This project demonstrates setting up a CI/CD pipeline for a Node.js application. The pipeline test the application code,builds a Docker image of the application, pushes it to Docker Hub, and then deploys it in kubernetes environment (local) via argocd.",
  },  
  {
    id: 4,
    title: "CI CD Pipeline",
    category: "devops",
    image: cicd,
    description:
      "Automated release process using Jenkins and docker for a Web app.",
    tech: [jenkins, docker],
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
    id: 3,
    title: "Personal Portfolio",
    category: "frontend",
    image: portfolio,
    description:
      "Sleek personal portfolio website made with NextJs, ShadcnUI and Framer Motion.",
    tech: [nextjs, tailwindcss],
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
    id: 5,
    title: "GitOps CD Pipeline",
    category: "devops",
    tag: "top",
    image: gitops,
    description: "Implemented custom deployment strategy  using Argo CD.",
    tech: [argocd, kubernetes, git],
    url: undefined,
    github: "https://github.com/ankitrajxd/myapp-config.git",
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
    tech: [python, terraform, ansible, aws],
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
      python,
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
    title: "Microservice Deployment",
    category: "devops",
    image: kubernetesFullSize,
    description: "Deployed a 10-tier microservice app on kuberentes.",
    tech: [kubernetes],
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
    url: nextjs,
    name: "NextJS",
  },
  {
    url: react,
    name: "React",
  },
  {
    url: tailwindcss,
    name: "TailwindCSS",
  },
  {
    url: javascript,
    name: "JavaScript",
  },
  {
    url: typescript,
    name: "TypeScript",
  },
  {
    url: git,
    name: "Git",
  },
  {
    url: kubernetes,
    name: "Kubernetes",
  },
  {
    url: linux,
    name: "Linux",
  },
  {
    url: jenkins,
    name: "Jenkins",
  },
  {
    url: terraform,
    name: "Terraform",
  },
  {
    url: ansible,
    name: "Ansible",
  },
  {
    url: python,
    name: "Python",
  },
  {
    url: docker,
    name: "Docker",
  },
  {
    url: java,
    name: "Java",
  },
  {
    url: aws,
    name: "AWS",
  },
  {
    url: prometheus,
    name: "Prometheus",
  },
  {
    url: argocd,
    name: "ArgoCD",
  },
  {
    url: mongodb,
    name: "MongoDB",
  },
];

///////
export const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ankitraaj/",
    icon: linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/isAnkit_",
    icon: twitter,
  },
  {
    name: "Github",
    url: "https://github.com/ankitrajxd",
    icon: github,
  },
  {
    name: "Email",
    url: "#",
    icon: "https://cdn-icons-png.flaticon.com/512/3621/3621435.png",
  },
];
