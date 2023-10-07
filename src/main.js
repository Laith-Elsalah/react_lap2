
import data from './data.json'
import CardComp from './card';
import './main.css'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
function Main (){
    let [items, setItemes] = useState(data);

    function hanleSubmit(event){
        event.preventDefault()
        let searchedValue = event.target.search.value;

        let filteredValue = data.filter(function (item) {
            return item.title.toLowerCase().includes(searchedValue.toLowerCase());
          });
          setItemes(filteredValue);
        }
    return(
        <>
          <Form className="d-flex" onSubmit={hanleSubmit} id = 'myForm'>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name ="search"
            />
            <Button variant="outline-success" tybe ='submit'>Search</Button>
          </Form>
        <div id="container">
        {items.map(function(Item){
            return(
                <CardComp image = {Item.image_url} title = {Item.title} describtion = {Item.describtion} price = {Item.price}/>
    
            )
        }
    )
        }
        </div>
        </>
    )
}

export default Main;