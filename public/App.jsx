const Header = (props) => {
  const name = props.name;
  return (
    <div>
      <h2>Hello {name}</h2>
    </div>
  );
}

class SetGreet extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let name = this.refs.name.value;

    if (typeof name == 'string' && name.length > 0) {
      this.props.onChange(this.refs.name.value);
      this.refs.name.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='name' />
          <button>Change name!</button>
        </form>
      </div>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'vthang' };
  }

  render() {
    return (
      <div>
        <Header name={this.state.name} />
        <SetGreet onChange={name => this.setState({name})}/>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
