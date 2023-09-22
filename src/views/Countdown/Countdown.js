import React, { useEffect, useState } from "react";
class Countdown extends React.Component {
    state = {
        count: 10
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ count: this.state.count - 1 })
        }, 1000);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
            }
            console.log('clearInterval')
        }
    }
    render() {
        return (
            <div>{this.state.count} Class</div>
        )
    }
}
const NewCountdown = () => {
    var [count, setcount] = useState(10)
    useEffect(() => {
        if (count === 0) {
            return
        }
        let timer = setInterval(() => {
            setcount(count - 1)
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [count])
    return (
        <div>{count} Hook</div>
    )
}
export { Countdown, NewCountdown };