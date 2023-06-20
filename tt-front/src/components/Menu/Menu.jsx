import React from "react";
import "./Menu.css";

const Menu = () => {
    return (
        <div className="menu-container">
            <div className="menuleft--itens">
                <img src={require("../Images/logo-twitter-png.png")} alt="icone twitter" className="icon-tt"/>
                <div className="menu--options">

                    <div>
                        <i class="bi bi-house-fill"></i>
                        <a href="1">home</a>
                    </div>

                    <div>
                        <i class="bi bi-hash"></i>
                        <a href="2">explore</a>
                    </div>

                    <div>
                        <i class="bi bi-bell-fill"></i>
                        <a href="2">notifications</a>
                    </div>

                    <div>
                        <i class="bi bi-envelope"></i>
                        <a href="3">messges</a>
                    </div>

                    <div>
                        <i class="bi bi-bookmark"></i>
                        <a href="4">bookmarks</a>
                    </div>

                    <div>
                        <i class="bi bi-card-list"></i>
                        <a href="5">lists</a>
                    </div>

                    <div>
                        <i class="bi bi-person"></i>
                        <a href="6">profile</a>
                    </div>

                    <div>
                        <i class="bi bi-plus-circle"></i>
                        <a href="7">more</a>
                    </div>

                </div>
                <div>
                    <button className="btn-primary">tweet</button>
                </div>
                <div className="profile--section">
                    <div className="profile-pic">
                        <img src={require("../Images/icon.png")} alt="profile pic" className="profile-pic-icon" />
                    </div>
                    <div className="name-aroba">
                        <h4>Jamal Malik</h4>
                        <p>@jamalmalik</p>
                    </div>
                </div>

            </div>
            <div className="menuright--itens">
                
            </div>
        </div>
    )
}


export default Menu;