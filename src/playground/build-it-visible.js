class Visibility extends React.Componenet {
    constructor(props){
        super(props)
        this.handleVisibility = this.handleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleVisibility() {
        this.setState((prevState) =>{
            return {
                visibility: !prevState.visibility
            }
        })
    }
    
    render() {
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleVisibility}>
                {this.state.visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {this.state.visibility && (
                <div>
                <p>These are some details.</p>
                </div>
            )}
        </div> 
        
        )
    }
}


ReactDOM.render(<Visibility/>,document.getElementById('app'))



/*const app ={
    title:'Visibility Toggle'
}

let visibility = false

const toggle = () => {
    visibility = !visibility
    render()
}

const render = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggle}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                <p>These are some details.</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template,document.getElementById('app'))
}*/



