import React, {Suspense, lazy, Fragment} from 'react';
import {BrowserRouter, Routes as Switch, Route, Navigate, Outlet } from 'react-router-dom';
import ProgressBar from './components/ProgressBar/ProgressBar';

const Login = lazy(() => import('./view/login/Login'));
const Register = lazy(() => import('./view/register/Register'));
const Home = lazy(() => import('./view/home/Home'));
const Allied = lazy(() => import('./view/panels/Allied'));
const Brasil21 = lazy(() => import('./view/panels/Brasil21'));
const Cimed = lazy(() => import('./view/panels/Cimed'));
const Gjp = lazy(() => import('./view/panels/Gjp'));
const Golden = lazy(() => import('./view/panels/Golden'));
const Mundial = lazy(() => import('./view/panels/Mundial'));

//const token = localStorage.getItem('access_token');

const PrivateRoutes = () => {
    const token = localStorage.getItem('access_token');
    return token ? <Outlet /> : <Navigate to="/login" />;
}

const Routes = () => (
    <BrowserRouter>
        <Fragment>
            <Suspense fallback={<div className='mt-5 pt-5'><ProgressBar/></div>}>
                <Switch>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>

                    <Route exact path='/home' element={<PrivateRoutes/>}>
                        <Route exact path='/home' element={<Home/>}/>
                    </Route>
                    <Route exact path='/' element={<PrivateRoutes/>}>
                        <Route exact path='/' element={<Home/>}/>
                    </Route>
                    <Route exact path='/alliedit' element={<PrivateRoutes/>}>
                        <Route exact path='/alliedit' element={<Allied/>}/>
                    </Route>
                    <Route exact path='/brasil21' element={<PrivateRoutes/>}>
                        <Route exact path='/brasil21' element={<Brasil21/>}/>
                    </Route>         
                    <Route exact path='/cimed' element={<PrivateRoutes/>}>
                        <Route exact path='/cimed' element={<Cimed/>}/>
                    </Route>      
                    <Route exact path='/gjp' element={<PrivateRoutes/>}>
                        <Route exact path='/gjp' element={<Gjp/>}/>
                    </Route>     
                    <Route exact path='/golden' element={<PrivateRoutes/>}>
                        <Route exact path='/golden' element={<Golden/>}/>
                    </Route>  
                    <Route exact path='/mundial' element={<PrivateRoutes/>}>
                        <Route exact path='/mundial' element={<Mundial/>}/>
                    </Route>                                                                                         
                </Switch>
            </Suspense>
        </Fragment>
    </BrowserRouter>
)

export default Routes;