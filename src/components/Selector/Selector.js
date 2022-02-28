import './Selector.css';
import React from 'react';



class Selector extends React.Component {

    render() {
        return (
          <div id="selector-base">
                <table id="selector-table">
                    <tr>
                       <td>
                            <p className="table-arrows">&lsaquo;</p>
                       </td>
                       <td>    
                            <div className="side-widget" >
                                <img class="path-img" src="https://i.imgur.com/wuiZYcg.png" alt="bars" ></img>
                            </div>
                       </td>
                       <td>
                            <div className="main-widget" >
                                <img class="sorting-img" src="https://i.imgur.com/ZC5BzPK.png" alt="bars"></img>
                            </div>
                       </td>
                       <td>
                            <div className="side-widget" >
                                <img class="stock-img"  src="https://i.imgur.com/xHfBb1K.png" alt="bars"></img>
                            </div>
                       </td>
                       <td>
                            <p className="table-arrows">&rsaquo;</p>
                       </td>
                    </tr>
                </table>
                <div className='selector-description-container'>
                    <div className='selector-text' id='selector-title'>
                        <b>Sorting Visualizer</b>
                    </div>
                    <div id='selector-summary'>
                        <p className='selector-text'>
                            This project provides a easy way to visually compare different Sorting Algorithms.
                            The visualizer allows from a slection of 6 popular sorting aglorihms, control of speed,
                            and control over the size of the array being sorted. This project is renderd in browser 
                            for your experience and the code can be viewed on GitHub. 
                        </p>
                    </div>
                </div>
          </div>
        ); 
    }
};




export default Selector;
