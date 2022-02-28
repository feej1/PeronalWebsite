import './Footer.css';
import React from 'react';



class Footer extends React.Component {

    render() {
        return (
        <div id="footer-base">
    <footer class="site-footer">

        <a href="#link" class="fa fa-facebook"></a>
        <a href="#link" class="fa fa-twitter"></a>
        <a href="#link" class="fa fa-github"></a>
      <div class="container">
        <div class="row">

          <div class="col-xs-6 col-md-3">
            <h6>Projects</h6>
            <ul class="footer-links">
              <li><a href="#link">Sorter</a></li>
              <li><a href="#link">Path Finding Visualizer</a></li>
              <li><a href="#link">Trading Bot</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#link">About</a></li>
              <li><a href="#link">Contact</a></li>
              <li><a href="#link">Resume</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="#link"> Joe Fee</a>.
            </p>
          </div>
        </div>
      </div>
</footer>



        </div>
        ); 
    }
};




export default Footer;
