import "./App.css";
import Story from "./HigherOrderComponent/Story";
import Ticket from "./PureComponent/Ticket";

function App() {
  return (
      <div className="Book">
        <h1>Higher Order Component example</h1>
        <p>
        Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.
        </p>
        <p>
          Book Title itself is a separate component passed as an argument to a
          Higher Order Component which has the functional logic to show review
          on mouse over.
        </p>
        <p>Hover on the Book</p>
        <Story id={2} />
     
      <div className="story">
        <h1>Pure Component example</h1>
        <p>
        ReactJS has provided us a Pure Component. If we extend a class with Pure Component, there is no need for shouldComponentUpdate() Lifecycle Method. ReactJS Pure Component Class compares current state and props with new props and states to decide whether the React component should re-render itself or  Not.
        </p>
        <p>Here the story rating is a pure component which basically means that whenever the toggle response when button is clicked, that particular component with response is re-rendered and others don't re-render.</p>
        <Ticket />
      </div>
    </div>
  );
}

export default App;