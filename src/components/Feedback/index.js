// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedback: false,
  }

  onFeedbackSelected = () => this.setState({isFeedback: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="title">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(emoji => (
            <li key={emoji.id} className="li-content">
              <button
                className="button-content"
                type="button"
                onClick={this.onFeedbackSelected}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-img"
                />
                <br />
                <span className="name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love" />
        <h1 className="title">Thank You</h1>
        <p className="description">
          we will user your feedback to improve our customer support
          performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state
    return (
      <div className="app-container">
        <div className="feedback">
          {isFeedback
            ? this.renderFeedbackThankYou()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
