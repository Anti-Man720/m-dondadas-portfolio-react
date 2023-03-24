import React, {component} from "react";

import PortfolioItem from "./portfolio-item";

export default class App extends React.Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my Dossier-Manifesto portfolio",
            data: [
                {title: "Marvel"}, 
                {title: "DC"}, 
                {title: "Nintendo"}, 
                {title: "Xbox"}, 
                {title: "NBA"}, 
                {title: "NFL"}
            ]
        };
    }//State
    //Lifecycyle hooks
    PortfolioItem() {
        //const data = ["Marvel", "DC", "Nintendo", "Xbox", "NBA", "NFL"];
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"onlyfans.com"} />;
            //return <PortfolioItem key={index} item={item} />;
            //return <h1 key={index}>{item}</h1>;
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                
                {this.PortfolioItem()}
            </div>
        );

    }
}
