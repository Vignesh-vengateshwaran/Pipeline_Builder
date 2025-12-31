import { Handle, Position } from 'reactflow';
import { useStore } from '../store'; 

export const BaseNode = ({ id, label, children, inputs = [], outputs = [] }) => {
  const deleteNode = useStore((s) => s.deleteNode);

  return (
    <div className="bg-[#0f172a] border border-slate-700 rounded-lg shadow-2xl min-w-[200px] transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/10">
      
      <div className="bg-[#1e293b] px-3 py-2 rounded-t-lg border-b border-slate-700 flex justify-between items-center">
        <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">
          {label}
        </span>
        <button 
          onClick={(e) => {
            e.stopPropagation(); 
            deleteNode(id);
          }}
          className="nodrag text-slate-500 hover:text-red-500 transition-colors duration-200 text-xs font-bold px-1 cursor-pointer"
          title="Remove Node"
        >
          ✕
        </button>
      </div>

      <div className="p-4 text-sm text-slate-300 leading-relaxed">
        {children}
      </div>

      {inputs.map((input, idx) => (
        <Handle
          key={`in-${idx}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: `${(idx + 1) * (100 / (inputs.length + 1))}%` }}
          className="w-2.5 h-2.5 !bg-purple-500 border-2 border-[#0f172a] !left-[-6px] 
                     hover:scale-150 hover:!bg-purple-400 transition-all duration-200 cursor-crosshair"
        />
      ))}

      {outputs.map((output, idx) => (
        <Handle
          key={`out-${idx}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: `${(idx + 1) * (100 / (outputs.length + 1))}%` }}
          className="w-2.5 h-2.5 !bg-purple-500 border-2 border-[#0f172a] !right-[-6px] 
                     hover:scale-150 hover:!bg-purple-400 transition-all duration-200 cursor-crosshair"
        />
      ))}
    </div>
  );
};