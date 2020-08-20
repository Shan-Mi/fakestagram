import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import StartPage from "./pages/StartPage";
import ImageListPage from "./pages/ImageListPage";
import { Route, Switch } from "react-router-dom";
import LayoutSimple from "./components/LayoutSimple";
import ImageDetailPage from "./pages/ImageDetailPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <div className="App container flex-lg-column">
      <Switch>
        <Route path="/" exact>
          <LayoutSimple>
            <StartPage />
          </LayoutSimple>
        </Route>

        <Route path="/image-list">
          <LayoutSimple>
            <ImageListPage />
          </LayoutSimple>
        </Route>

        <Route
          path="/image/:id"
          render={(props) => {
            return (
              <LayoutSimple>
                <ImageDetailPage {...props} />
              </LayoutSimple>
            );
          }}
        ></Route>

        <Route path="/contact">
          <LayoutSimple>
            <ContactPage />
          </LayoutSimple>
        </Route>
      </Switch>
    </div>
  );
}

/* 
https://image-mock-data.firebaseio.com/images.json
 */
