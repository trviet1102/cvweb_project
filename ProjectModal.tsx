import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-x" onClick={onClose}>&times;</button>
                
                <div className="modal-inner">
                    <div className='modal-left'>
                        <div className="video-responsive">
                        <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                                title={project.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                    </div>
                    </div>
                    
                    <div className="modal-info">
                        <h2>{project.title}</h2>
                        <p>{project.details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;