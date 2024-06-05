import './App.css';
import Logo from './Assets/HRB-Logo.png'

function App() {
  return (
    <div className="animate-pulse flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="mb-8">
        <img
          src={Logo}
          alt="Under Construction"
          className="w-58 h-48"
        />
      </div>
      <h1 className="text-2xl font-bold text-gray-800">
        This page is under construction.
      </h1>
      <p className="text-md text-gray-600 mt-4">
        We're working hard to bring you something amazing. Stay tuned!
      </p>
    </div>
  );
}

export default App;
