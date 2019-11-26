import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryStack, VictoryTheme } from 'victory';
import GenerateBar from './GenerateBar.js';

export default function LiquidBar(props) {
  //CREATE REQUEST TO SERVER FOR DATA HERE
  //useEffect from React
  //One request for all drink data???
  //we want to separate each drink from the results
  //we want to select the most recent 7 results

  //we want to send the value to GenerateBar
  //we want to generate {x, y} pair for each result

  //Server URI
  let baseUri = 'http://localhost:3002'

  //HANDLES SIDE EFFECTS
  //Runs every time component is updated
  useEffect(() => {
    Promise.all([
      axios.get(`${baseUri}/api/drinks`),
      axios.get(`${baseUri}/api/drink-info`),
      axios.get(`${baseUri}/api/drinks-tracking`)
    ])
    .then((all) => {
      const [drinks, drinksInfo, drinksTracking] = all;
      console.log('data fetched!')

    })
    .catch((e) => {
      console.log(e);
    });
  });



  return (
    <Fragment>
      {/* CHART CONTAINER */}
      <VictoryChart 
        height={500}
        width={500}
        theme={VictoryTheme.material}>

        {/* X AXIS */}
        <VictoryAxis crossAxis
          domain={[0, 7]}
          theme={VictoryTheme.material}
          offsetY={50}
          standalone={false}
        />

        {/* Y AXIS */}
        <VictoryAxis dependentAxis crossAxis
          domain={[0, 15]}
          theme={VictoryTheme.material}
          offsetX={50}
          standalone={false}
        />
      
        {/* LINE GRAPH WITH DEFAULT DATA */}
        <VictoryLine />

        {/* STACKED BAR CHART */}
        <VictoryStack>
          {GenerateBar('water')}
          {GenerateBar('coffee')}
          {GenerateBar('soda')}
        </VictoryStack>
      </VictoryChart>
    </Fragment>
  )
}