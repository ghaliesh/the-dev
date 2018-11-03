import React, { Component } from 'react';
import Answer from '../components/FAQ/Answer';
import Question from './../components/FAQ/Question';
import faqs from './../utils/Faqhelper';
import { setAnsStyle } from '../utils/progmaticStyling';
import Div from './../components/Common/Div';

export default class About extends Component {
  state = {
    faq: faqs
  };
  render() {
    return (
      <Div padding="200px 100px">
        {this.state.faq.map(f => (
          <Div margin="30px 0px" key={this.state.faq.indexOf(f)}>
            <Question
              onClick={() => this.toggleContent(f)}
              content={f.question}
            />
            <Div style={setAnsStyle(f)}>
              <Answer display={f.showToggle.display} answer={f.answer} />
            </Div>
          </Div>
        ))}
      </Div>
    );
  }

  toggleContent = (f, e) => {
    let target = this.state.faq.filter(e => e.question === f.question)[0];
    let currentFaqs = this.state.faq;
    if (f.showToggle.visible) {
      currentFaqs[currentFaqs.indexOf(target)].showToggle = {
        transform: 'scale(1,0)',
        visible: false,
        display: 'none'
      };
    } else {
      currentFaqs[currentFaqs.indexOf(target)].showToggle = {
        transform: 'scale(1,1)',
        visible: true,
        display: 'block'
      };
    }
    this.setState({
      faq: currentFaqs
    });
  };
}
