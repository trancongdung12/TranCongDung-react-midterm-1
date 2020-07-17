import React, { Component } from 'react';
import './RoomItem.css';
class RoomItem extends Component {

    onBookRoom(){
        alert('Thank you for your order');
    }
    render() {

        return (
            <div className="container">
                <div className="row">
                    {this.props.room.map((item)=>(
                        <div className="col-sm-3" style={{marginLeft:"40px",marginBottom:"40px"}}>
                        <div class="card" style={{width: "18rem",height:'570px'}}>
                        <img class="card-img-top" src={"image/"+item.image} alt="Card image cap" height="200px"/>
                        <div class="card-body">
                            <h5 class="card-title">{item.type}</h5>
                            <p class="text">
                                <span>Phòng</span>
                                <span>{item.name}</span>
                            </p>
                            <hr/>
                            <p class="text">
                                <span>Chỗ nghỉ</span>
                                <span>{item.number}</span>
                            </p>
                            <hr/>
                            <p class="text">
                                <span>Kích thước</span>
                                <span>{item.area}</span>
                            </p>
                            <hr/>
                            <p class="text">
                                <span> Giá phòng</span>
                                <span>{item.price} VND</span>
                            </p>
                            <hr/>
                            {
                                (item.oldprice != 0)? <p class="text"><span> Giá cũ</span><span><strike>{item.oldprice} VND</strike> </span></p> : ''
                            }
                            <hr/>
                            <p class="text">
                                <span> Xem</span>
                                <button onClick={this.onBookRoom} class="btn btn-primary">Đặt phòng</button>
                            </p>
                            
                        </div>
                    </div>
                    </div>
                    ))}                 
                
                </div>
            </div>
        );
    }
}

export default RoomItem;