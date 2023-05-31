import { Button, Header, List } from "semantic-ui-react";

function App() {
  return (
    <>
      <div className="App">
        <Header as="h2" icon="users" content="Reactivities" />
        <List>
          <h1>Hello there!</h1>
        </List>
        <Button content='test'/>
      </div>
    </>
  );
}

export default App;
