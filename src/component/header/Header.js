import React from 'react';
import './header.css';
import Logo from './logo/Logo';
import Subscribe from '../bottons/Subscribe';
import Icons from '../icons-redes/Icons';
import img from '../../img/img3.jpg';

const Header = ({title}) => {
    return ( 
      <header className="header">
           <div className="container">
                <div className="row">
                    <div className="col-sm-12 my-4">
                        <Logo/>
                        <h1 className="text-uppercase display-3 font-weight-bold text-center mt-2 ">{title}</h1>
                    </div>
                    
                    <div className="col-sm-6">
                        <img src={img} className="img-fluid" alt="img"/>
                    </div> 
                    <div className="col-sm-6 text-center">
                            <form action="">
                                <p className="text-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum quia fugiat ad minus?</p>
                                <input type="text" className="form-control text-center my-4" placeholder="Whrite your Email"/>
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
