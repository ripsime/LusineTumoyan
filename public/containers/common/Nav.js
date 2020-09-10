import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<React.Fragment>
			<input type="checkbox" id="nav-menu-input" hidden />
            <div className="nav">
                <div className="nav-burger">                    
                    <label htmlFor="nav-menu-input" className="nav-burger-icon">
						<i className="fa fa-bars"></i>
                    </label>                    
                </div>          
                <ul className="nav-menu">                                         
					<NavLink to="/home">
						<li>   
                        	<i className="fa fa-home"></i>
                        	<span>Home</span>
						</li>
					</NavLink>                    
                    <NavLink to="/dashboard">
						<li>   
                            <i className="fa fa-columns"></i>
                            <span>Dashboard</span>
						</li>
					</NavLink>
                </ul>
            </div>
		</React.Fragment>
	);
};

export default Nav;
