import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import globalStyles from "../styles/styles";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";

{ /* COMPONENTS */ }
import { ProgressBarComponent } from "../components";

{ /* SERVICES */ }
import ordersService from "../services/OrdersService";

const HomeScreen = () => {

  const user = useSelector(selectUser);
  const [month, setMonth] = useState('');
  const [stats, setStats] = useState({});
  const [orders, setOrders] = useState(0);
  const [providres, setProvidres] = useState(0);
  const [bags, setBags] = useState(0);
  const [loading, setLoader] = useState(true);

  useEffect(() => {

    switch (new Date().getMonth()) {
      case 0:
        setMonth('Ene');
        break;
      case 1:
        setMonth('Feb');
        break;
      case 2:
        setMonth('Mar');
        break;
      case 3:
        setMonth('Abr');
        break;
      case 4:
        setMonth('May');
        break;
      case 5:
        setMonth('Jun');
        break;
      case 6:
        setMonth('Jul');
        break;
      case 7:
        setMonth('Ago');
        break;
      case 8:
        setMonth('Sep');
        break;
      case 9:
        setMonth('Oct');
        break;
      case 10:
        setMonth('Nov');
        break;
      case 11:
        setMonth('Div');
        break;
    }

    ordersService.getHomeStats(user).then((response) => {

      setStatsData(response.data);

      incrementAnimmation(0, response.data.ordersLength, setOrders);
      incrementAnimmation(0, response.data.providersLength, setProvidres);
      incrementAnimmation(0, response.data.bagsLength, setBags);

      setLoader(false);

    }).catch((err) => console.log('ERROR HOME STATS ', err));

  }, []);


  const setStatsData = (data) => {
    setStats(data);
  }

  const incrementAnimmation = (i, maxLength, option) => {

    if (maxLength > 0) {

      if (maxLength >= 100 && i == 0) {
        i = maxLength / 2;
        maxLength = maxLength / 2;
      };

      setTimeout(function () {
        option(i);
        i++;
        i <= maxLength && incrementAnimmation(i, maxLength, option);
      }, 50 / maxLength);

    }


  };

  return (
    <View style={[styles.homeContainer]}>

      {/* VIEW */}
      <View style={styles.mainContainer}>

        <View style={[globalStyles.row, globalStyles.justifyContentCenter, globalStyles.widthFluid]}>

          <View style={[styles.dateBox, globalStyles.shadowStyle]}>

            {
              !loading ?
                <View>

                  <Text style={[globalStyles.fontBold, globalStyles.textCenter]}>
                    {new Date().getDate()}
                  </Text>

                  <Text style={globalStyles.textCenter}>
                    {month}
                  </Text>

                </View>

                :
                <ActivityIndicator size="small" />
            }

          </View>
        </View>

        <Text style={[globalStyles.fontBold, globalStyles.fontLarge, globalStyles.widthFluid, styles.title]}>Pedidos del día</Text>

        <View style={[globalStyles.row, globalStyles.justifyContentAround, globalStyles.widthFluid]}>

          <View>
            <Text style={[globalStyles.fontLarge, globalStyles.widthFluid, globalStyles.textCenter, { marginBottom: 10 }]}>{orders}</Text>
            <Text style={[globalStyles.fontMedium, globalStyles.widthFluid, globalStyles.textCenter, { marginBottom: 10 }]}>Ordenes</Text>
          </View>

          <View>
            <Text style={[globalStyles.fontLarge, globalStyles.widthFluid, globalStyles.textCenter, { marginBottom: 10 }]}>{providres}</Text>
            <Text style={[globalStyles.fontMedium, globalStyles.widthFluid, globalStyles.textCenter, { marginBottom: 10 }]}>Comercios</Text>
          </View>

          <View>
            <Text style={[globalStyles.fontLarge, globalStyles.widthFluid, globalStyles.textCenter, { marginBottom: 10 }]}>{bags}</Text>
            <Text style={[globalStyles.fontMedium, globalStyles.widthFluid, globalStyles.textCenter, { marginBottom: 10 }]}>Bolsas</Text>
          </View>

        </View>

        <View style={[styles.progressBarContainer, globalStyles.widthFluid]}>

          <Text style={[globalStyles.fontBold, globalStyles.fontLarge]}>Evolución</Text>

          {/* PROGRESS BAR */}
          <Text style={[globalStyles.fontMedium, { marginTop: 20 }]}>Pedidos listos</Text>
          <ProgressBarComponent color1={'#E09B14'} color2={'#F8BC47'} percentage={stats.ordersReady} showNumber={true} />

          <Text style={[globalStyles.fontMedium, { marginTop: 10 }]}>Pedidos recogidos</Text>
          <ProgressBarComponent color1={'#0480A9'} color2={'#26BCED'} percentage={stats.ordersRetrieved} showNumber={true} />

          <Text style={[globalStyles.fontMedium, { marginTop: 10 }]}>Pedidos entregados</Text>
          <ProgressBarComponent color1={'#429C7D'} color2={'#7ECFB3'} percentage={stats.ordersCompleted} showNumber={true} />

        </View>

      </View>

    </View >
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  homeContainer: {
    flex: 1,
  },

  mainContainer: {
    paddingBottom: 125,
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'center'
  },

  dateBox: {
    width: 65,
    height: 65,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 30
  },

  title: {
    textAlign: 'center',
  },

  progressBarContainer: {
    paddingHorizontal: 35
  },

});
