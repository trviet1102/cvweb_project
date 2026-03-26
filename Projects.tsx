import React, { useState } from 'react'; // Thêm useState
import './Projects.css';
import projectImg from './assets/cv.png';
import springbootImg from './assets/springboots.png';
import mobileImg from './assets/mobileapp.jpg';
import workflowImg from './assets/workflow.png';
import ProjectModal from './ProjectModal';
import { useTranslation } from 'react-i18next';



const Projects = () => {
    // 1. Tạo state để quản lý việc đóng/mở và dữ liệu project đang chọn
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const { t } = useTranslation();

    const projectData = [
        { 
            image: projectImg, 
            youtubeId: "jqQVRzCfEY8",
            title: t("project1"), 
            desc: t("title1"), 
            tag: "React",
            details: t('details1'),
        },
        { 
            image: mobileImg,
            youtubeId:"knUCK55bAf4",
            title: t("project2"),
            desc: t("title2"), 
            tag: "Mobile",
            details: t('details2'),
        },
        { 
            image: springbootImg,
            youtubeId:"erntbhN2Vsk",
            title: t("project3"),
            desc: t("title3"), 
            tag: "Backend",
            details: t('details3'),
        },
        { 
            image: workflowImg,
            youtubeId:"LbVQIqSW2j0",
            title: t("project4"),
            desc: "Workflow - N8N", 
            tag: "Automation",
            details: t('details4'),
        }
    ];

    return (
        <section className="projects-section" id="projects">
            <h2 className="section-title"><span className="highlight">{t('myproject')}</span></h2>
            <div className='project-grid'>
                {projectData.map((p, index) => (
                    <div className='project-card' key={index}>
                        <div className='project-left-section'>
                            <span className='project-tag'>{p.tag}</span>
                            <div className='project-image-container'>
                                <img src={p.image} alt={p.title} className="project-img-file" />
                            </div>
                        </div>
                        
                        <div className='project-info'>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                            <button 
                                className='project-btn' 
                                onClick={() => setSelectedProject(p)}
                            >
                                {t('view')}
                            </button>
                        </div>
                    </div>               
                ))}
            </div>

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </section>
    );
};

export default Projects;