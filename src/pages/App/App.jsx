import './App.css';
import { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import UserProfilePage from '../User/UserProfilePage/UserProfilePage';


function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {user ? (
        <>
        {/* <NavBar user={user} setUser={setUser} /> */}
        <Switch>
          {/* <Route path="/puppies/new">
            <NewPuppyPage
              user={user}
              setUser={setUser}
              handleAddPuppy={handleAddPuppy}
            />
          </Route>
          <Route path="/puppies">
            <Puppies
              puppies={puppies}
              handleDeletePuppy={handleDeletePuppy}
            />
          </Route>
          <Route exact path="/details">
            <PuppyDetailPage />
          </Route>
          <Route exact path="/edit">
            <EditPuppyPage handleUpdatePuppy={handleUpdatePuppy} />
          </Route>
          <Redirect to="/puppies" /> */}
          <Route path='/profile/:id'>
            <UserProfilePage />
          </Route>
        </Switch>
      </>

      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
