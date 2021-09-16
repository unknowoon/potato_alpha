import React, {Component} from "react";
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';


const styles  = theme => ({
    btnstyle: {
      border: 0,
      borderRadius: 3,
      height: 40,
      padding: '0 20px',
      margin : '10px'
    },
  });

class Buttonst extends Component {
  handleClick = () => { //2. clickColor에 버튼의 id값을 넣음
    this.props.clickColor(this.props.id);
  };

  render() {
    const {classes} = this.props;
    return (
        <Button
        variant="contained"
        color={this.props.id === this.props.afd ? "primary" : "none"} //버튼의 id와 선택된 버튼의 id가 같으면 기본색 아니면 없음
        className={classes.btnstyle}
        onClick={this.handleClick} // 1. 버튼이 클리되면 handleClick를 실행
        > 
            {this.props.name}
        </Button>
    );
  }
}

export default withStyles(styles)(Buttonst)