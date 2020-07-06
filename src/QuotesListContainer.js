import React from "react";

// componente contenedor
export default class QuotesListContainer extends React.Component {
    state = {
        quotes: null
    }
  
    componentDidMount() {
      fetch(this.props.api)
        .then(res => res.json())
        .then(quotes => this.setState({ quotes }));
    }
  
    render() {
      const { quotes } = this.state;
      return <Quotes quotes={quotes} authorName = {this.props.authorName} />;
    }
  }
  
  // componente de presentación
  function Quotes({ quotes, authorName}) {
      console.log(quotes, authorName);
    return (
      <div>
        {quotes ? (
          <ul>
            {quotes.map((quotes, index) => (
                
              <li key={index}>
                <h5>{quotes[authorName]}</h5>
                <div>"{quotes.quote}"</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading quotes...</p>
        )}
      </div>
    );
  }

  