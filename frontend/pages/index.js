import React from "react";
import {getInfo} from '../lib/utils'
import Layout from '../components/layout';
import Layout2 from '../components/layout2';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state={search: '', food: ""}
      }
    handleUpdate(evt){
        
    }


    async handleSearch(evt) {
        this.setState({search: evt.target.value});
        const food = await getInfo(evt.target.value);
        console.log(food);
        this.setState({food});
        this.setState({food});
    }

    handleFunction(){
        if(this.state.food == null){
            this.state.food = "this is some food";
            return ( <div><h5>{this.state.search} not found</h5>
                <style jsx>{`
                    h5{
                        text-align:center;
                    }
                `}</style>
                </div>
            );
        }
        return null;
    }


    render(){
        return(
      <div>
        <Layout>
          <img src="/static/xmas.gif" width="100px" height="100px"></img>
        <h2>Country Search</h2>
          </Layout>
        <Layout2>


        <p><input type='text' placeholder = "Search" size="40" height="5000" value={this.state.search} onChange={this.handleSearch.bind(this)}/> </p>
        {this.state.food && this.state.search != "" ? <div>
        
      <table cellSpacing="5" align ="center" valign ="bottom">

        <tbody>
          <tr>
              <th> Name </th>
              <th> Name </th>
              <th>code</th>
              <th>region</th>
              <th>language</th>
          </tr> 
          {this.state.food.map(function(row,index){
            return(
              <tr key={index}>
                <td>{row.name}</td>
                <div>
                <td>{row.poop}</td>
                </div>
                
                <td>{row.countrycode}</td>
               
                <td>{row.region}</td>
                <td>{row.language}</td>
              
              </tr>
            );
          })}

        </tbody>
      </table>
</div> : null}
<img src="/static/batman2.gif" className="meh" width= "500px" height= "300px"/>
<br></br>
</Layout2>
            <style jsx>{`
             h1,
             <p><input type='text' value={this.state.search}  /></p>
             <div className="button-style">Submit</div>
             h2,
             a,
             p {
               font-family: "Arial";
             }
   
             .description {
               font-family: "Arial";
               font-size: "20px";
             }
            .button-style {
                margin: auto auto;
                cursor: pointer;
                background-color: #000000;  
                color: #ffffff; 
                width: 200px;
                font-family: "Arial";
                text-align: center;
                
            }
      `}</style>
      
       </div>
        )};
        
}

export default Search;
