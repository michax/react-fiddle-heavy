class Form extends React.Component {
    render() {
        return (
            <div>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
                </div>
                <br />
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2" />
                    <span className="input-group-addon" id="basic-addon2">@example.com</span>
                </div>
                <br />
                <label for="basic-url">Your vanity URL</label>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon3">https://example.com/users/</span>
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                </div>
                <br />
                <div className="input-group">
                    <span className="input-group-addon">$</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                    <span className="input-group-addon">.00</span>
                </div>
                <br />
                <div className="input-group">
                    <span className="input-group-addon">$</span>
                    <span className="input-group-addon">0.00</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                </div>
                <hr/>
                <div className="grid">
                    <div className="list-group">
                        <a href="#" className="list-group-item active">
                            Cras justo odio
                            </a>
                        <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                        <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                        <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                        <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Form;