import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { buy_laptops } from '../redux/action/action'
import {buy_mobiles} from '../redux/action/action'
import {fetchusers} from '../redux/action/action'
class Shop extends React.Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         numberofLaptos:100
    //     }
    // }

    // onsubmit=()=> {
    //     this.setState({numberofLaptops: this.props.numberofLaptops-1});
    // }

    render() {
        return (
            <div>
                <p> The number of Laptops = {this.props.numberofLaptops}</p>
                <button onClick={this.props.buylaptops}>submit</button>

                <p> The number of mobiles = {this.props.numberofmobile}</p>
                <button onClick={this.props.buymobiles}>submit</button>

                <p> call API = {this.props.users}</p>
                {/* <p>call API = {this.props.users.length}</p> */}
                <button onClick={this.props.fetchusers}>call API</button>

                

            </div>
            

            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        numberofLaptops: state.laptop.numberofLaptops,
        numberofmobile: state.mobile.numberofmobile,
        users:state.users.name
        //users:state.users.users
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        buylaptops: () => dispatch(buy_laptops()),
        buymobiles: () => dispatch(buy_mobiles()),
        fetchusers: () => dispatch(fetchusers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop);