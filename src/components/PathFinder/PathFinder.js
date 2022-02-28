import './PathFinder.css';



function PathFinder() {
  return (
    <div className="pathfinder">
      <br />
      <span id="path-title">Path Finding Visualizer</span> <span className="exit-button"><a className='exit-link' href='#selector-table'>&#10005;</a></span>
      <div id="path-parameter-container">
          <span class="path-parameters">Algorithm</span>
          <select id="path-dropdown">
            <option>Breadth First</option>
            <option>Depth First</option>
            <option>A*</option>
          </select>

          <span class="path-parameters">Speed</span>
          <input type="range" id="path-slider" defaultValue='30' min="1" max="45"></input>

      </div>

      <div className='path-grid'></div>

      <span>
          <button className="path-buttons" id="path-solveButton">Solve</button>
          <button className="path-buttons" id="path-resetButton">Reset</button>
      </span>
      
    </div>
  );
}

export default PathFinder;