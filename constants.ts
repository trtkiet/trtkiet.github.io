import { Education, Project, SkillCategory } from './types';

export const PROFILE = {
  name: "Tran Tuan Kiet",
  title: "Computer Science Student & AI Engineer",
  email: "contact.trtkiet@gmail.com",
  phone: "(+84) 919 259 211",
  linkedin: "linkedin.com/trtkiet",
  github: "github.com/trtkiet",
  githubUrl: "https://github.com/trtkiet",
  location: "Ho Chi Minh City, Vietnam",
  about: "I am a final-year Computer Science student at UIT with a strong GPA (8.6/10) and a passion for Artificial Intelligence and Backend Engineering. I have a proven track record in competitive programming (ICPC) and practical experience building scalable microservices and multi-modal AI systems."
};

export const EDUCATION: Education[] = [
  {
    school: "University of Information Technology (UIT), VNU-HCM",
    degree: "Bachelor in Computer Science",
    period: "Sep 2023 - Present (Exp. Jul 2026)",
    location: "Ho Chi Minh City, Vietnam",
    achievements: [
      "Current GPA: 8.6 / 10.0",
      "Core member representing university in National ICPC (2023-2025)",
      "Utilized advanced algorithms (Graph Theory, DP) under time pressure"
    ]
  },
  {
    school: "Binh Long High School for The Gifted",
    degree: "English Specialized Class",
    period: "Sep 2020 - Aug 2023",
    location: "Dong Nai, Vietnam",
    achievements: [
      "Third Prize in National Excellent Student Contest",
      "2 First Prizes in Provincial Excellent Student Contest"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Video Retrieval System",
    type: "Project",
    techStack: ["Python", "PyTorch", "OpenCV", "Flask", "Milvus", "ElasticSearch", "Docker"],
    description: [
      "Engineered a multi-modal semantic search pipeline using OpenAI CLIP to project video frames and text queries into a shared embedding space.",
      "Built a hybrid search infrastructure indexing OpenAI Whisper ASR transcripts in ElasticSearch and visual vectors in Milvus.",
      "Deployed a scalable containerized architecture using Docker with HLS protocols for low-latency streaming."
    ],
    link: "https://github.com/trtkiet"
  },
  {
    title: "SkillForge – AI-Powered Collaborative Platform",
    type: "Project",
    techStack: ["Go", "Python", "MongoDB", "FastAPI", "HuggingFace", "Docker"],
    description: [
      "Architected a high-performance microservices backend using Go (Golang) and Clean Architecture.",
      "Developed an AI Matching Engine using Sentence Transformers to generate 384-dimensional vector embeddings for semantic skill matching.",
      "Designed a scalable MongoDB schema for dynamic relationships between users, projects, and real-time logs."
    ]
  },
  {
    title: "STANDA-DA: Statistical Inference for Anomaly Detection",
    type: "Research",
    role: "First Author",
    techStack: ["Python", "PyTorch", "Numba", "Math"],
    description: [
      "Authored the paper 'Statistical Inference for Autoencoder-based Anomaly Detection after Representation Learning-based Domain Adaptation' (Under review).",
      "Translated theoretical mathematical proofs into a high-performance Python library using PyTorch and Numba."
    ],
    link: "https://github.com/trtkiet"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "Go (Golang)", "HTML/CSS", "JavaScript", "TypeScript"]
  },
  {
    category: "Machine Learning & AI",
    items: ["PyTorch", "OpenAI CLIP", "OpenAI Whisper", "HuggingFace", "OpenCV", "Numba"]
  },
  {
    category: "Backend & Infrastructure",
    items: ["Docker", "FastAPI", "Flask", "MongoDB", "ElasticSearch", "Milvus"]
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Teamwork", "English Communication", "ICPC Algorithms"]
  }
];