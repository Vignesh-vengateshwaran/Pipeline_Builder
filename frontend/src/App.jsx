import { Routes, Route } from 'react-router-dom';
import { PipelineToolbar } from './Toolbar';
import { PipelineUI } from './PipelineUi';
import { SubmitButton } from './SubmitButton';
import LandingPage from './LandingPage'; 

function App() {
  return (
    <Routes>
    
      <Route path="/" element={<LandingPage />} />
      <Route path="/workspace" element={
        <div className="flex flex-col h-screen w-screen bg-[#020617] text-slate-200 overflow-hidden font-sans">
          <PipelineToolbar />
          <div className="flex-1 relative bg-[#020617]">
            <PipelineUI />
          </div>
          <SubmitButton />
        </div>
      } />
    </Routes>
  );
}

export default App;