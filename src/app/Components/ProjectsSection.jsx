"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Chat-Time",
        description: "Coded a real-time chat website using React, Node.js and Appwrite Cloud that implemented client-server subscription for real-time messaging and allowed message deletion based on message IDs.",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/amritesh-dasari/Chat-Time",
    },
    {
        id: 2,
        title: "FCC-HFTracer",
        description: "Developed a website visualization of publicly available FCC data between locations using indexing to optimize complex queries hosted on a GCP server and SQL instance.",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/amritesh-dasari/FCC-HFTracer",
    },
    {
        id: 3,
        title: "Distributed Machine Learning Cluster",
        description: "Implemented a distributed machine learning system with 10 nodes having integrated failure detection using a logsaver program and versioned file system with replication for efficient storage and maintenance.",
        tag: ["All", "System Design"],
        gitUrl: "https://github.com/amritesh-dasari/CS425-Distributed-Systems-UIUC/tree/main/cs425_mp4",
    },
    {
        id: 4,
        title: "VTOP Extended",
        description: "Developed an Android application for Vellore Institute of Technology with authentication, clubs, events, faculty database and additional features like web view of campus portal, online quizzes using Flutter and Firebase.",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/amritesh-dasari/VTOP-Extended",
    },
    {
        id: 5,
        title: "BCFL: Blockchain based Federated Learning",
        description: "Researched improving security and reliability of Federated Learning by incorporating a blockchain-based distributed ledger for model update record-keeping and replacing the central server with Proof-of-Work validated miners.",
        tag: ["All", "System Design"],
        gitUrl: "https://gitlab.engr.illinois.edu/mdasari2/cs-525-research",
    },
    {
        id: 6,
        title: "notsosimpletictactoe",
        description: "Mobile Tic-Tac-Toe game built with Flutter uses minimax algorithm for AI opponent to allow single player mode.",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/amritesh-dasari/notsosimpletictactoe",
    },
    {
        id: 7,
        title: "Diabetic Retinopathy Diagnosis",
        description: "Mobile App developed using TensorFlow Lite and Flutter that allows user to upload fundus images to check if a person is suffering from Diabetic Retinopathy. The Model has an accuracy of 91% based on publicly available datasets.",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/amritesh-dasari/Diabetic-Retinopathy-Diagnosis",
    },
    {
        id: 8,
        title: "Blog Application",
        description: "Backend REST API implementation for a Blog Application based on Spring Boot and MySQL.",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/amritesh-dasari/Springboot-Blog",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };
    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="System Design"
                    isSelected={tag === "System Design"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.25 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            gitUrl={project.gitUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection