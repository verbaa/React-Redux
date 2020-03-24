class OrderDetail extends React.Component{
    render(){
        return <div className='order-detail'>
            <h4>{this.props.productName}</h4>
            <p>Price: {this.props.price}</p>
            <p>Quantity: {this.props.quantity}</p>
            <button onClick={this.props.addHandler}>+</button>
        </div>
    }

}

class Parent extends React.Component{
    constructor() {
        super();
        this.state = {
            amount: 0,
            details: [
                { id: 1, productName: "IPhone x", price: 900, quantity: 0 },
                { id: 2, productName: "Samsung S11", price: 800, quantity: 0 },
                { id: 3, productName: "Xiaomi redmi 3", price: 650, quantity: 0 },
                { id: 3, productName: "Huawei pro", price: 350, quantity: 0 }
            ]
        }
    }
    updateOrder(index) {
        this.setState((prevState, props) => {
            console.log(this.state.details);

            var newQty = prevState.details[index].quantity + 1;
            this.state.details[index].quantity = newQty;
            this.state.amount = prevState.amount + prevState.details[index].price;
            return {
                amount: this.state.amount,
                details: this.state.details
            };
        });
    }


    render(){
        var detailTags = this.state.details.map((e, index) => (
            <OrderDetail
                key={e.id}
                addHandler={() => this.updateOrder(index)}
                productName={e.productName}
                price={e.price}
                quantity={e.quantity}
            />
        ));
        return (
            <div className="order">
                {detailTags}
                <div className="clear" />
                <p className="total">Total: <b>{this.state.amount} USD</b></p>
            </div>
        )
    }
}

// Render
ReactDOM.render(<Parent />, document.getElementById("order1"));