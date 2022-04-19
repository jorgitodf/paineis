import React, { Component } from 'react'
import { connect } from 'react-redux';
import {login, changeValue} from '../../store/actions/auth.action';
import { baseURL } from '../../config/globalConfig';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { green } from '@material-ui/core/colors';
import Loading from '../../components/loading/Loading';
import Notify from '../../components/notify/Notify';

const ColorButton = withStyles(theme => ({
  root: {
    color: "#fff", 
    backgroundColor: green[500],
    '&:hover' : {
      backgroundColor: green[700]  
    }  
  }
}))(Button)

export class Login extends Component {
  login = () => {
    const {credentials} = this.props;
    this.props.login(credentials).then(() => {
      if (this.props.success) {
          window.location.replace(baseURL+'home');
      }
    })
  }
  render() {
    return (
      <div>
        <Loading />
        <Notify />
        <Container component="main" maxWidth="xs">
            <div className="mt-3 mt-md-5">
              <div className='login'>
                <div className='text-center'>
                  <Typography className="mt-3 font-weight-normal" component="h1" variant="h6">Entre com seu E-mail e Senha</Typography>
                </div>
                <div className="mt-4">
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="username"
                    type="email"
                    value={this.props.credentials.username}
                    onChange={(text) => this.props.changeValue({username: text.target.value})}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Senha"
                    name="password"
                    type="password"
                    value={this.props.credentials.password}
                    onChange={(text) => this.props.changeValue({password: text.target.value})}
                  />   
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    className="mb-3 mb-md-4 mt-4"
                    onClick={() => this.login()}
                  > Logar  
                  </Button> 
                  <Link href="/register">
                    <ColorButton 
                      type="button"
                      fullWidth
                      size="large"
                      variant="contained"
                      className="mb-3 mb-md-4 mt-3"
                    > Registrar                    
                    </ColorButton>
                  </Link>                              
                </div>
              </div>
            </div>
        </Container>    
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    credentials: state.authReducer.credentials,
    success: state.authReducer.success
})

const mapDispathToProps = dispath => ({
    login: (credentials) => dispath(login(credentials)),
    changeValue: (value) => dispath(changeValue(value))
})

export default connect(mapStateToProps, mapDispathToProps)(Login); 