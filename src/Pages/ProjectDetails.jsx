import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../Components/UI/Button';

function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch('/carrouselData.json')
      .then(response => response.json())
      .then(data => {
        const foundProject = data.find(p => p.id === projectId);
        setProject(foundProject);
      })
      .catch(error => console.error('Error fetching project data:', error));
  }, [projectId]);

  if (!project) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="project-detail">
      <h1>Visuels du Projet {project.title}</h1>

        <div className="projectDetail_functionnality_image_container">
          {Object.values(project.projectDetailsImages).map((imageUrl, index) => (
            <div className="projectDetail_functionnality_image" key={index}>
              <img src={imageUrl} alt={`${project.title} image ${index + 1}`} loading='lazy' />
            </div>
          ))}
        </div>

      <div className="projectDetail_button_container">
        <Button link={project.link} classname="carrousel_link_button">
          Voir sur GitHub
        </Button>
      </div>
    </div>
  );
}

export default ProjectDetails;
