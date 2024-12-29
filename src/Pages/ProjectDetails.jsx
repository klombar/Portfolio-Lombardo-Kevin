import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../Components/UI/Button';

function ProjectDetails() {

  const { projectId } = useParams(); 
  const [project, setProject] = useState(null);

  useEffect(() => {

   fetch('/Portfolio-Lombardo-Kevin/carrouselData.json')
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
      <>
       <div className="project-detail">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <div className="project-difficulty">
        <strong>Difficulté:</strong> {project.difficultyRating}
      </div>
      <Button link={project.link} classname='carrousel_link_button'>
        Voir sur GitHub
      </Button>
    </div>
      </>
   )
}

export default ProjectDetails;