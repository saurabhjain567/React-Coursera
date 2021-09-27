import React, {Component} from "react";
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'; 

class DishDetail extends Component{

    constructor(props){
        super(props);
    }

    renderComments(comments){
        if(comments!=null)
        {
           
           return comments.map((comment)=>{
                
                return(
                <div key={comment.id}>
               
                <ul className ="list-unstyled">
                <li>{comment.comment}</li><br></br>
                <li>-- {comment.author} , {comment.date}</li>
                </ul>
                </div>
                     );
        }
        );
        }
        else{
            return(
            <div>
 
            </div>);
        }
    }
    renderDish(dish){
        if(dish!=null){
          return(
         <Card>
             <CardImg width="100%" src ={dish.image} alt={dish.name}/>
             <CardBody>
             <CardTitle>{dish.name}</CardTitle>
             <CardText>{dish.description}</CardText>
             </CardBody>
         </Card>
          );
        }
        else{
            return(
            <div>
 
            </div>);
        }
    }
      
    render(){
       if(this.props.dish!=null)
       {
        return(
            <div className="container">
            <div className="row">
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
        </div>
         <div  className="col-12 col-md-5 m-1">
         <h4>Comments</h4>
       {this.renderComments(this.props.dish.comments)}
     </div>
     </div>
     </div>
        );
    }
        else{
            return(
                <div>
           </div>
            );
        }
    }
}

export default DishDetail;