var React = require('React');
// the JSX transform converts to React, so we need to add it back in
this['React'] = React;
var {QueryRenderer} = require('RelayModern');
// this is needed otherwise QueryRenderer gets inlined
this['QueryRenderer'] = QueryRenderer;

function App(props) {
  return (
    <QueryRenderer
      render={data => {
        return <span>Hello world {props.foo}</span>;
      }}
    />
  );
}

App.getTrials = function(renderer, Root) {
  renderer.update(<Root />);
  return [['render props relay', renderer.toJSON()]];
};

if (this.__optimizeReactComponentTree) {
  __optimizeReactComponentTree(App);
}

module.exports = App;