import Card from "./components/Card";
import { Project } from "./config/data";

function App() {
  return (
    <div className="h-fit p-8 flex justify-center items-center flex-col">
      <h1 className="text-3xl lg:text-5xl font-bold text-center">
        A compilation of all my other projects
      </h1>
      <p className="text-1xl mb-12 mt-4">
        Jeffrey Bernadas © {new Date().getFullYear()}
      </p>
      <ul className="divide-y divide-gray-200 grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {Project.map((project) => (
          <Card project={project} />
        ))}
      </ul>
    </div>
  );
}

export default App;
