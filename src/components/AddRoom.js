import React, { Component } from 'react';

class AddRoom extends Component {
    constructor(){
        super();
        this.onAddRoom = this.onAddRoom.bind(this);
    }
    onAddRoom(event){
        event.preventDefault();
        let name = event.target['name'].value;
        let image = event.target['image'].files[0].name;
        let type = event.target['type'].value;
        let number = event.target['number'].value;
        let area = event.target['area'].value;
        let price = event.target['price'].value;
        let oldprice = event.target['oldprice'].value;
        var rooms = JSON.parse(localStorage.getItem('rooms'));
        if(!rooms){
            rooms= []
        }
        var room = {
            id: rooms.length,
            name: name,
            image: image,
            type : type,
            number: number,
            area : area,
            price: price,
            oldprice: oldprice
        }
        console.log(room);
        rooms.push(room);
        localStorage.setItem('rooms',JSON.stringify(rooms));
        alert('Added room');
      
    }
    
    render() {
        return (
            <div className="container" style={{marginBottom:"20px"}}>
                    <div className="col-sm-6">
                    <form onSubmit={this.onAddRoom}>
                        <div class="form-group">
                            <label for="textInput">Name</label>
                            <input  type="text" name="name" class="form-control" id="textInput"/>     
                        </div>
               
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Image</label>
                            <input type="file" name="image" class="form-control-file" id="exampleFormControlFile1"/>
                        </div>

                        <div class="form-group">
                            <label for="textInput">Type</label>
                            <input type="text" name="type" class="form-control" id="textInput"/>     
                        </div>
                        <div class="form-group">
                            <label for="textInput">Number</label>
                            <input type="text" name="number" class="form-control" id="textInput"/>     
                        </div>
                        <div class="form-group">
                            <label for="textInput">Area</label>
                            <input type="text" name="area" class="form-control" id="textInput"/>     
                        </div>
                        <div class="form-group">
                            <label for="textInput">Price</label>
                            <input type="text" name="price" class="form-control" id="textInput"/>     
                        </div>
                        <div class="form-group">
                            <label for="textInput">OldPrice</label>
                            <input type="text" name="oldprice" class="form-control" id="textInput"/>     
                        </div>
                       
                        <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                    </div>     
                </div>  
        );
    }
}

export default AddRoom;