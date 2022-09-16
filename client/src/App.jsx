import React from "react";
import { useParams, Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path=":id" element={<Game />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

const Login = () => {
  return <h1>Create a logine to play</h1>;
};

const Error = () => {
  return <h1>Error Page</h1>;
};

const Game = () => {
  let { id } = useParams();
  console.log("from games", id);
  return <h1>Create Room to play the games: {id}</h1>;
};
