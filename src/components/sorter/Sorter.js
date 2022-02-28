import './Sorter.css';



function Sorter() {
  return (
    <div className="Sorter">
        <br />
        <span id="sorter-title">Sorting Visualizer</span> <span className="exit-button"><a className='exit-link' href='#selector-table'>&#10005;</a></span>
        <div id="sorter-parameter-container">
          
          <span class="sorter-parameters">Algorithm</span>
          <select id="sorter-dropdown">
            <option>Bubble Sort</option>
            <option>Quick Sort</option>
            <option>Merge Sort</option>
            <option>Heap Sort</option>
            <option>Radix Sort</option>
          </select>

          <span class="sorter-parameters" >Elements</span>
          <input type="number" defaultValue="20" min="2" max="150" id="sorter-number"/>

          <span class="sorter-parameters">Speed</span>
          <input type="range" id="sorter-slider" defaultValue='200' min=".01" max="300"></input>

        </div>
        <div id="array"></div>
        <span>
          <button className="sorter-buttons" id="sorter-sortButton">Sort</button>
          <button className="sorter-buttons" id="sorter-resetButton">Reset</button>
        </span>
    </div>
  );
}


export default Sorter;
