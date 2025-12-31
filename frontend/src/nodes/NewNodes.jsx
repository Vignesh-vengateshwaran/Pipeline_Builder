import { BaseNode } from './BaseNode';

export const NoteNode = ({ id }) => (
  <BaseNode id={id} label="Note">
    <textarea placeholder="Write a note..."  className="w-full px-2 py-1 rounded border border-slate-300 bg-white text-black text-xs focus:outline-none min-h-[60px]"  />
  </BaseNode>
);

export const LogicNode = ({ id }) => (
  <BaseNode id={id} label="Logic" inputs={[{ id: 'a' }, { id: 'b' }]} outputs={[{ id: 'out' }]}>
    <div style={{ fontSize: '11px' }}>Condition Logic</div>
  </BaseNode>
);

export const DatabaseNode = ({ id }) => (
  <BaseNode id={id} label="Database" outputs={[{ id: 'data' }]}>
    <select className="w-full px-2 py-1 rounded border border-slate-300 bg-white text-black text-xs focus:outline-none cursor-pointer">
    
      <option>PostgreSQL</option>
      <option>MongoDB</option>
      <option>MySQL</option>
    </select>
  </BaseNode>
);

export const AuthNode = ({ id }) => (
  <BaseNode id={id} label="Auth" outputs={[{ id: 'token' }]}>
    <div style={{ fontSize: '11px' }}>API Key Auth</div>
  </BaseNode>
);

export const SlackNode = ({ id }) => (
  <BaseNode id={id} label="Slack" inputs={[{ id: 'msg' }]}>
    <div style={{ fontSize: '11px' }}>Send Notification</div>
  </BaseNode>
);