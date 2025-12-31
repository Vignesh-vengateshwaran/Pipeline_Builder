import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id);
  return (
    <BaseNode id={id} label="Input" outputs={[{ id: 'value' }]}>
      <input 
        type="text" 
        value={currName} 
        onChange={(e) => setCurrName(e.target.value)}
         className="w-full px-2 py-1 rounded border border-slate-300 bg-white text-black text-xs focus:outline-none" 
      />
    </BaseNode>
  );
};