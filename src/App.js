import "./App.css";
import Header from "./components/header/Header";
import Chart from "./components/Chart";
import AddNode from "./components/forms/AddNode";
import AddLinks from "./components/forms/AddLinks";
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className="conainter-fluid">
      <Header />
      <div className="row m-0 mt-4">
        <p className="lead col-10 mx-auto">
        {t('intro to sankey')}
        </p>
        <div className="col-md-8">
          <Chart />
        </div>
        <div className="col-md-4 bg-light">
          <AddNode />
          <AddLinks />
        </div>
      </div>
    </div>
  );
}

export default App;
