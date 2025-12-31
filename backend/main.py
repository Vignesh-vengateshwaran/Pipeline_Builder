from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}
@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: Dict = Body(...)):
    nodes = pipeline.get('nodes', [])
    edges = pipeline.get('edges', [])
    num_nodes = len(nodes)
    num_edges = len(edges)
    
    is_dag = check_if_dag(nodes, edges)
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }

def check_if_dag(nodes, edges):
    adj = {n['id']: [] for n in nodes}
    in_degree = {n['id']: 0 for n in nodes}
    
    for e in edges:
        source = e['source']
        target = e['target']
        adj[source].append(target)
        in_degree[target] += 1
        
    queue = [n for n in in_degree if in_degree[n] == 0]
    visited_count = 0
    
    while queue:
        u = queue.pop(0)
        visited_count += 1
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
                
    return visited_count == len(nodes)