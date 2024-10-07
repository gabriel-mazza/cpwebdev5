
import { useParams } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-4">Detalhes do Projeto {id}</h2>
      <p>Aqui estão os detalhes sobre o projeto {id}.</p>
    </div>
  );
}

export default ProjectDetail;
