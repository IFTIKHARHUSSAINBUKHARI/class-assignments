const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-200 p-4 rounded">Project 1</div>
          <div className="bg-gray-200 p-4 rounded">Project 2</div>
          <div className="bg-gray-200 p-4 rounded">Project 3</div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
