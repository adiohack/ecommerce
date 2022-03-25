import React from "react";
import "./styles.css";

class Products extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Component did mount");
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
      query {
      categories {
          products {
            name 
            }
          }
        }
      `,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    console.log("Render");
    return <div className="products">asd</div>;
  }
}

export default Products;
