import React from 'react';
import './header.css';
import Logo from './logo/Logo';
import Subscribe from '../bottons/Subscribe';
import Icons from '../icons-redes/Icons';

const Header = ({title}) => {
    return ( 
      <header className="header">
           <div className="container">
                <div className="row">
                    <div class="col-sm-12 my-4">
                        <Logo/>
                        <h1 class="text-uppercase display-3 font-weight-bold text-center mt-2 ">{title}</h1>
                    </div>
                    
                    <div class="col-sm-6">
                            <img src="./img/img3.jpg" class="img-fluid" alt="img"/>
                    </div> 
                    <div class="col-sm-6 text-center">
                            <form action="">
                                <p class="text-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum quia fugiat ad minus?</p>
                                <input type="text" class="form-control text-center my-4" placeholder="Whrite your Email"/>
                                <Subscribe
                                    description="SUBSCRIBE"
                                />
                            </form>
                            <Icons/>
                    </div>  

                </div>
            
             </div>
      </header>
     );
}
 
export default Header;
