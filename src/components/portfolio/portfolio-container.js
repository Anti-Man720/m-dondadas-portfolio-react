import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";


  export default class PortfolioContainer extends Component {
    constructor() {
        super();
       
        this.state = {
          pageTitle: "Welcome to my Dossier-Manifesto portfolio",
          isLoading: false,
          data: []
        };

          this.handleFilter = this.handleFilter.bind(this);
        
    } 
    
    handleFilter(filter) {
      this.setState({
        data: this.state.data.filter(item => {
          return item.category === filter;
        })
      });
    }
    
  getPortfolioItems(filter = null) {
        axios
          .get("https://mikecarter.devcamp.space/portfolio/portfolio_items")
          .then(response => {
            if (filter) {
              this.setState({
                data: response.data.portfolio_items.filter(item => {
                  return item.category === filter;
                })
              });
            } else {
              this.setState({
                data: response.data.portfolio_items
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    
      portfolioItems() {
        return this.state.data.map(item => {
          console.log(item)
          return (
            <PortfolioItem id={item.id} title={item.name} url={item.url} slug={item.id} key={item.id} />
              
          );
        });
      }
            
    //State
    //Lifecycyle hooks
    
    componentDidMount() {
      this.getPortfolioItems();
    }

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
  
  
                  
            {this.portfolioItems()}
  
          </div>
        );
      }            
    }
                  
  
      
  
         
            

    
    
