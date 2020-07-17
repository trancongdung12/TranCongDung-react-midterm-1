import React, { Component } from 'react';
import RoomItem from './RoomItem';
class Room extends Component {
    constructor(){
        super();
        var room = JSON.parse(localStorage.getItem('rooms'));
        if(!room){
            room =  [
                {
                    id: 1,
                    name: '2 giường đôi lớn',
                    image: 'room1.jpg',
                    type : 'PHÒNG FAMILY',
                    number: '4 người lớn',
                    area : '45m2',
                    price: 100000000,
                    oldprice: 5000000
                },
                {
                    id: 1,
                    name: '2 giường đôi lớn',
                    image: 'room2.jpg',
                    type : 'PHÒNG FAMILY',
                    number: '4 người lớn',
                    area : '45m2',
                    price: 100000000,
                    oldprice: 0
                }
            ]
            localStorage.setItem('rooms',JSON.stringify(room));
        }
        this.state={
           rooms : room
        }
    }

    
    render() {
        return (
            <RoomItem room = {this.state.rooms} />  
        );
    }
}

export default Room;