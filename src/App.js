import React from 'react';
import './style.css';
import Covid from './component/header/Covid';
import BangladeshMap from './component/bdmap/map/BangladeshMap';
import FooterComponent from './component/footer/FooterComponent';
import Information from './component/body/Information';
import DistrictInfo from './component/body/DistrictInfo';

function App() {
  return (
    <div>
      <div>
        <div className="covidBangladesh">
          <div className="backgroundrect" />
          {/* Header Component */}
          <Covid></Covid>
          <div className="body">

            {/* Information Component */}
            <Information></Information>

            <div className="bangladeshcomponent">
              {/* Bangladesh Map SVG */}
              <BangladeshMap></BangladeshMap>

              {/* District Component */}
              <DistrictInfo></DistrictInfo>
            </div>
          </div>
          <FooterComponent></FooterComponent>
        </div>
      </div>

    </div>
  );
}

export default App;
