import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { changenotify } from '../../store/actions/notify.action';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = {
    message: {
        display: 'flex',
        alignItems: 'center'
    },
    sucess: {
        backgroundColor: '#32CD32'
    },
    error: {
        backgroundColor: '#f44336'
    }
}

export class Notify extends Component {
    handleClose = () => {
        this.props.changenotify({
            open: false
        })
    }
    render() {
        const {classes} = this.props;
        const messageClasses = classNames({
            [classes[this.props.notify.class]] : this.props.notify.class
        })
        return (
        <Snackbar 
            open={this.props.notify.open} 
            anchorOrigin={{
                vertical: this.props.notify.vertical,
                horizontal: this.props.notify.horizontal
            }}
            autoHideDuration={this.props.notify.time}
            onClose={this.handleClose}>

            <SnackbarContent
                className={messageClasses}
                message={
                    <span className={classes.message}>{this.props.notify.msg}</span>
                }    
            ></SnackbarContent>

        </Snackbar>
        )
    }
}

const mapStateToProps = (state) => ({
  notify: state.notifyReducer
})

const mapDispatchToProps = dispatch => ({
  changenotify: (value) => dispatch(changenotify(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Notify))
