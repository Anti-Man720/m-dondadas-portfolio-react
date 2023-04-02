import React, {component} from "react";

import PortfolioItem from "./portfolio-item";

export default class App extends React.Component {
    constructor() {
        super();
       
        this.state = {
            pageTitle: "Welcome to my Dossier-Manifesto portfolio",
            isLoading: false,
            data: [
                {title: "Marvel", category: "Comics", image: "https://images-na.ssl-images-amazon.com/images/I/51ZtZ9ZQFJL._SX331_BO1,204,203,200_.jpg"},
                {title: "DC", category: "Comics", image: "https://images-na.ssl-images-amazon.com/images/I/51ZtZ9ZQFJL._SX331_BO1,204,203,200_.jpg"}, 
                {title: "Nintendo" , category: "Games", image: "https://images-na.ssl-images-amazon.com/images/I/51ZtZ9ZQFJL._SX331_BO1,204,203,200_.jpg"}, 
                {title: "Xbox" , category: "Games", image: "https://images-na.ssl-images-amazon.com/images/I/51ZtZ9ZQFJL._SX331_BO1,204,203,200_.jpg"}, 
                {title: "NBA" , category: "Sports", image: "https://images-na.ssl-images-amazon.com/images/I/51ZtZ9ZQFJL._SX331_BO1,204,203,200_.jpg"}, 
                {title: "NFL" , category: "Sports", image: "https://images-na.ssl-images-amazon.com/images/I/51ZtZ9ZQFJL._SX331_BO1,204,203,200_.jpg"}
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
        
    }
    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    
    };

    //State
    //Lifecycyle hooks
    PortfolioItem() {
        //const data = ["Marvel", "DC", "Nintendo", "Xbox", "NBA", "NFL"];
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"onlyfans.com"} />;
            //return <PortfolioItem key={index} item={item} />;
            //return <h1 key={index}>{item}</h1>;
        });
    };

    
    
    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter("Comics")}>Comics</button>
                <button onClick={() => this.handleFilter("Games")}>Games</button>
                <button onClick={() => this.handleFilter("Sports")}>Sports</button>  


                
                {this.PortfolioItem()}

                

                
            </div>
        );

    };
}
