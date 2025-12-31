import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <BaseNode 
      id={id} 
      label="Output" 
      inputs={[{ id: 'value' }]} 
      outputs={[]} 
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
            Field Name
          </label>
          <input 
            type="text" 
            value={currName} 
            onChange={(e) => setCurrName(e.target.value)} 
            className="bg-[#1e293b] border border-slate-700 rounded-md px-2 py-1.5 text-xs text-slate-200 
                       focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 
                       transition-all duration-200"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
            Output Type
          </label>
          <select 
            value={outputType} 
            onChange={(e) => setOutputType(e.target.value)}
            className="bg-[#1e293b] border border-slate-700 rounded-md px-2 py-1.5 text-xs text-slate-200 
                       focus:outline-none focus:border-purple-500 cursor-pointer
                       transition-all duration-200"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};