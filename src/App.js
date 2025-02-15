import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import BasketGame from './BasketGame.js'
import BinarySearchGame from './BinarySearchGame.js'
import Cargame from './Cargame.js'
import Home from './Components/DSA/DSA'
import Tests from './Components/Tests/Tests'
import './App.css';
import Signin from './Components/SignIn/SignIn';
import Signup from './Components/SignUp/SignUp';
import Main from './Components/Main/Main.js';
import LeaderBoard from './Components/LeaderBoard/LeaderBoard.js';
import Postfix from './Components/Postfix/Postfix.js';
import CodeCompiler from './Components/CodeCompiler/CodeCompiler.js'
import DijkstraPS from './Components/DijkstraPS/DijkstraPS.js';
import Status from './Components/Status/Status.js';
import BSPS from './Components/BSPS/BSPS.js'
import PostfixPS from './Components/PostfixPS/PostfixPS.js'
import DSAQuiz from './DSAQuiz.js';
import PlayDijkstra from './Components/PlayDijkstra/PlayDijkstra.js';
import PlayBS from './Components/PlayBS/PlayBS.js'
import DemoDijkstra from './Components/DemoDijkstra/DemoDijkstra.js'
import DemoBinarySearch from './Components/DemoBS/DemoBinarySearch.js'; 
function App() {
  //create browser router object
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[{
          path:"/",
          element:<Signin/>
      },
      {
        path:"/postfixeval",
        element:<Postfix/>
      },
      {
        path:"/code",
        element:<CodeCompiler />
      },
      {  path:"/home",
         element:<Home/>

      },
      {
        path:"/tests",
        element:<Tests/>
      },
      {
        path:"/status",
        element:<Status/>
      },
      {
        path:"/dijps",
        element:<DijkstraPS/>
      },
      {
        path:"/binps",
        element:<BSPS/>
      },
      {
        path:"/posps",
        element:<PostfixPS/>
      },
      {
        path:"/basketgame",
        element:<BasketGame/>
    },
    {
      path:"/binarygame",
       element:<BinarySearchGame/>
     },
    {
      path:"/playbs",
      element:<PlayBS/>
    },
    { path: "/demo-bs", element: <DemoBinarySearch /> },
     {
       path:"/cargame",
       element:<Cargame/>
    },
    {
      path:"/playdj",
      element:<PlayDijkstra/>
    },
    {
      path:"/Demodj",
      element:<DemoDijkstra/>
    },
    {
      path:"/dsaQuiz",
      element:<DSAQuiz/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/signin",
      element:<Signin/>
    },
    {
      path:"/main",
      element:<Main/>,
    },
    {
    path:"/leaderboard",
    element:<LeaderBoard/>
    }
    ]
    }
  ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
