import React from 'react';
import './App.css';
import {Header} from "./main/ui/header/Header";
import {Redirect, Route, Switch} from "react-router-dom";
import {RegisterContainer} from "./main/ui/components/auth/register/RegisterContainer";
import {LoginContainer} from "./main/ui/components/auth/login/LoginContainer";
import {ForgotPasswordContainer} from './main/ui/components/auth/forgotPassword/ForgotPasswordContainer';
import {SetPasswordContainer} from "./main/ui/components/auth/setPassword/SetPasswordContainer";
import {PackListPage} from "./main/ui/components/packs/packListPage/PackListPage";
import {ProfileContainer} from "./main/ui/components/profile/ProfileContainer";
import {PackList} from './main/ui/components/packList/PackList';
import {CardsContainer} from "./main/ui/components/packs/cards/CardsContainer";
import {EmailPassword} from "./main/ui/components/auth/forgotPassword/EmailPassword";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className="App-content">
                <Switch>
                    <Route exact path='/' render={() => <Redirect to={'/login'}/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                    <Route path='/registration' render={() => <RegisterContainer/>}/>
                    <Route path='/profile' render={() => <ProfileContainer/>}/>
                    <Route path='/forgot' render={() => <ForgotPasswordContainer/>}/>
                    <Route path='/check-email' render={() => <EmailPassword/>}/>
                    <Route path='/set-new-password/:token' render={() => <SetPasswordContainer/>}/>
                    <Route exact path='/packs' render={() => <PackListPage/>}/>
                    <Route path='/packs/:_id' render={() => <CardsContainer/>}/>
                    <Route path='/packList' render={() => <PackList/>}/>
                    <Route path='/404' render={() => <div>404 PAGE NOT FOUND</div>}/>
                    <Route path='*' render={() => <Redirect to={'/404'}/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;