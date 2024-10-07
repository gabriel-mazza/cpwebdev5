function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
          <img
            src="../public/imagens/pgrmat.jpg"
            alt="Perfil"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-4xl font-bold mb-4">Portfólio Gabriel Barros</h2>
          <p className="text-lg text-gray-700 mb-6">
            Desenvolvedor de software, aprendendo a programar em JavaScript e Python. Conheça um pouco mais dos meus projetos.
          </p>
        </div>
      </div>
    );
  }
  
  export default Home;
  