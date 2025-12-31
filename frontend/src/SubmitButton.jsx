import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }), shallow);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            const data = await response.json();
            
            alert(
                `Pipeline Analysis:\n` +
                `• Nodes: ${data.num_nodes}\n` +
                `• Edges: ${data.num_edges}\n` +
                `• Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
            );
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to connect to the backend.');
        }
    };

    return (
        <div className="p-6 bg-[#0f172a] border-t border-slate-800 flex justify-center z-10">
            <button 
                onClick={handleSubmit}
                className="px-12 py-2.5 bg-violet-600 text-white font-bold rounded-md 
                           shadow-[0_0_20px_rgba(139,92,246,0.4)] 
                           transition-all duration-300 
                           hover:bg-violet-500 hover:scale-105 
                           hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] 
                           active:scale-95 focus:outline-none"
            >
                Submit 
            </button>
        </div>
    );
};