import React, { Component } from "react";

interface TimerState {
  seconds: number;
  minutes: number;
}

class Timer extends Component<{}, TimerState> {
  private interval!: number;

  constructor(props: {}) {
    super(props);
    this.state = { seconds: 0, minutes: 0 };
  }

  tick = () => {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));

    if (this.state.seconds === 60) {
      this.setState((state) => ({
        seconds: 0,
        minutes: state.minutes + 1,
      }));
    }
  };

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <aside className="fixed bottom-5 left-5 chat chat-start">
        <time className="chat-bubble chat-bubble-accent font-semibold text-xs text-white sm:text-sm">
          Kamu di sini selama: {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </time>
      </aside>
    );
  }
}

export default Timer;
