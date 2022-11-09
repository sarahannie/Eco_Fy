import React ,{Component} from 'react'
import {FaMinusSquare, FaPlusSquare} from 'react-icons/fa'
import style from './bookings.module.css'
import Location from './location'


class Booking extends Component { 

  container = React.createRef();
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      open:false,
      api: ' '
   }
  //  this.handleApi = this.handleApi.bind(this);
  }

 
    // handleApi = ()=>{
      
    //   const config = {
    //     method: 'get',
    //     url: 'https://api.geoapify.com/v1/geocode/autocomplete?text=Mosco&apiKey=1c3a53ba0d684232b2c6e62639c5cf68',
    //     headers: { }
    //   };
      
    //   axios(config)
    //   .then(function (response) {
    //     this.setState({
    //       api: response.data
    //     })
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });  
    // }

      increment(){
          this.setState({
              count : this.state.count + 1
          })}
      decrement(){
        if(this.state.count <= 0){
            this.setState({
                count:0
            })
        }
        else{
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    dropdown = () => {
        this.setState((state) => {
          return {
            open: !state.open,
          };
        });
      };    

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    // componentWillUnmount() {
    //   document.removeEventListener("mousedown", this.handleClickOutside);
    // }

    handleClickOutside = (event) => {
        if (
          this.container.current &&
          !this.container.current.contains(event.target)
        ) {
          this.setState({
            open: false,
          });
        }
      };
render(){
  return (
    <div>
      <section className={style.flexcontainer}>
        <div>
            <select name="" id="">
                <option value="" >Round-trip</option>
                <option value="">One-way </option>
                <option value="">Multi-city</option>
            </select>
        </div>
        <div>
             <button onClick={this.dropdown} className={style.traveller}>Travelers</button>
             <div className={style.container} ref={this.container}>
             {this.state.open &&  (<ul>
                <li>
                <p>Adults <span>18-64</span>
                </p>
                <p><button onClick={()=>this.decrement()}><FaMinusSquare /></button>{this.state.count}
                <button onClick={()=>this.increment()}><FaPlusSquare /></button></p>
                </li>
                <li>
                  <p>Students <span>over 18</span>
</p>
                <p><button onClick={()=>this.decrement()}><FaMinusSquare /></button>{this.state.count}
                <button onClick={()=>this.increment()}><FaPlusSquare /></button></p>
                </li>
                <li>
                <p>Seniors <span>65+</span></p>
                <p>
                <button onClick={()=>this.decrement()}><FaMinusSquare /></button>{this.state.count}
                <button onClick={()=>this.increment()}><FaPlusSquare /></button>
                </p>
                </li><li>
                <p>Youths <span>12-17</span></p>
                
                  <p><button onClick={()=>this.decrement()}><FaMinusSquare /></button>{this.state.count}
                <button onClick={()=>this.increment()}><FaPlusSquare /></button></p>
                </li>
                <li>
                <p>Children <span>2-11</span></p>
                <p>
                <button onClick={()=>this.decrement()}><FaMinusSquare /></button>{this.state.count}
                <button onClick={()=>this.increment()}><FaPlusSquare /></button>
                </p>
                </li>
                <li>
                <p>Toddlers in own seat <span>under2</span></p>
                <p>
                <button onClick={()=>this.decrement()}><FaMinusSquare /></button>{this.state.count}
                <button onClick={()=>this.increment()}><FaPlusSquare /></button>
                </p>
                </li>
                <li>
                <p>Infants on lap <span>under 2</span></p>
                <p>
                <button onClick={()=>this.decrement()}><FaMinusSquare /></button>{this.state.count}
                <button onClick={()=>this.increment()}><FaPlusSquare /></button>
                </p>
                </li>

            </ul>
)}</div>
</div>
            <div>
                <select name="" id="">
                    <option value="" >Economy</option>
                    <option value="">Premium Economy</option>
                    <option value="">Business</option>
                    <option value="">First</option>
                    <option value="">Multiple</option>                
                </select>
          
        </div>
      </section>
              <Location />
    </div>
  )
  }
}

export default Booking;
  