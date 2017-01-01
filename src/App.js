
import Form from 'src/Form';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [1, 2, 3],
        };
    }

    onClick() {
        console.log('Clicked');
    }

    onNavigate() {
        console.log('Navigate');        
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <h1>React Fiddle <span>Heavy</span></h1>
                <hr/>
                <Form/>
                <hr/>
                <div className="grid grid--gap-mid">
                    <button className="btn btn-primary grid-cell" onClick={this.onClick}>Add</button>
                    <button className="btn btn-secondary grid-cell">Remove</button>
                    <button className="btn btn-secondary grid-cell" onClick={this.onNavigate}>Navigate</button>
                </div>
            </div>
        );
    }
}

export default App;