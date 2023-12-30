import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        id: 1,
        title: "Chat-Time",
        description: "Coded a real-time chat website using React, Node.js and Appwrite Cloud that implemented client-server subscription for real-time messaging and allowed message deletion based on message IDs.",
        tag: ["All", "Web"]
    },
    {
        id: 2,
        title: "FCC-HFTracer",
        description: "Developed a website visualization of publicly available FCC data between locations using indexing to optimize complex queries hosted on a GCP server and SQL instance.",
        tag: ["All", "Web"]
    },
    {
        id: 3,
        title: "Distributed Machine Learning Cluster",
        description: "Implemented a distributed machine learning system with 10 nodes having integrated failure detection using a logsaver program and versioned file system with replication for efficient storage and maintenance.",
        tag: ["All", "System Design"]
    },
    {
        id: 4,
        title: "VTOP Extended",
        description: "Developed an Android application for Vellore Institute of Technology with authentication, clubs, events, faculty database and additional features like web view of campus portal, online quizzes using Flutter and Firebase.",
        tag: ["All", "Mobile"]
    },
    {
        id: 5,
        title: "BCFL: Blockchain based Federated Learning",
        description: "Researched improving security and reliability of Federated Learning by incorporating a blockchain-based distributed ledger for model update record-keeping and replacing the central server with Proof-of-Work validated miners.",
        tag: ["All", "System Design"]
    },
    {
        id: 6,
        title: "notsosimpletictactoe",
        description: "Tic-Tac-Toe mobile game designed in flutter using minimax algorithm",
        tag: ["All", "Mobile"]
    },
]

const ProjectsSection = () => {
    return (
        <><h2>My Projects</h2>
            <div>
                {projectData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} />)}
            </div></>
    )
}

export default ProjectsSection