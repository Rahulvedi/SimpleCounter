import React from 'react'
class CounterComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 } // initial value of counter
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }
    handleIncrement() {
        this.setState({
            value: this.state.value + 1
        })
    }
    handleDecrement() {
        this.setState({
            value: this.state.value - 1
        })
    }
    handleReset() {
        this.setState({
            value: 0
        })
    }
    render() {
        return (
            <section className='Counter'>
                <section className='Display'>
                <Display value={this.state.value} ></Display>
                </section>
                <section className='Tab'>
                    <CounterButton value='Increment' action={this.handleIncrement} className='Tab__btn'></CounterButton>
                    <CounterButton value='Decrement' action={this.handleDecrement} className='Tab__btn'></CounterButton>
                    <CounterButton value='Reset' action={this.handleReset} className='Tab__btn'></CounterButton>

                </section> 
            
            </section>
        )
    }
}
function Display(props) {
    return (
        <p>{props.value}</p>
    )
}
function CounterButton(props) {
    const handleClick = () => {
        props.action()
    }
    return (
        <button onClick={handleClick} className={props.className}>{props.value}</button>
    )
}
export default CounterComp