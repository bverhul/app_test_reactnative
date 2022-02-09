import React, {Component} from 'react';
import {Alert, StyleSheet, View, Dimensions, StatusBar} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import WebView from 'react-native-webview';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';

import html_script from './html_script';

class ParkingsMap extends Component {
  state = {
    data: '',
    latitude: 0,
    longitude: 0,
    location: null,
  };
  /*
  constructor() {
    super();
    this.interval = setInterval(() => Alert.alert('Coucou'), 5000);
  }
*/
  findCoordinates = (p = true) => {
    Geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({location});
        this.state.latitude = position.coords.latitude;
        this.state.longitude = position.coords.longitude;
        console.log(
          'Current position: ' +
            this.state.latitude +
            '-' +
            this.state.longitude,
        );
        /* update */
        if (p) {
          this.forceUpdate();
        }
      },
      error => {
        Alert.alert('Erreur durant la récupération de la localisation');
        console.error('Recuperation location error : ' + error);
      },
      {maximumAge: 3000, enableHighAccuracy: true, timeout: 5000},
    );
  };

  createMarkers(request, props) {
    let nom = '';
    if (props.pointPosition !== null) {
      nom = props.pointPosition.nom;
    }
    /* get all parkings without the parking to show */
    let otherParkings = request.filter(function (x) {
      return x.nom !== nom;
    });
    let lastParking = request.filter(function (x) {
      return x.nom === nom;
    });
    /* generate the javascript */
    let code = '';
    otherParkings.map(parking => {
      let text = '"' + parking.nom + '<br/>' + parking.ville + '<br/><br/>';
      text += '<i>' + parking.nombrePlacesDispo + ' places disponibles</i>"';

      let longlat = '[' + parking.latitude + ',' + parking.longitude + ']';
      /* */
      let park =
        'L.marker(' +
        longlat +
        ',{opacity:0.80,icon:popUpIcon}).addTo(mymap).bindPopup(' +
        text +
        ",customOptions).openPopup().on('click', openPosition);";
      code += park;
    });
    /* show the park */
    lastParking.map(parking => {
      let text = '"' + parking.nom + '<br/>' + parking.ville + '<br/><br/>';
      text += '<i>' + parking.nombrePlacesDispo + ' places disponibles</i>"';

      let longlat = '[' + parking.latitude + ',' + parking.longitude + ']';
      /* */
      let park =
        'L.marker(' +
        longlat +
        ',{opacity:0.80,icon:popUpIcon}).addTo(mymap).bindPopup(' +
        text +
        ",customOptions).openPopup().on('click', openPosition);";
      code += park;
    });
    return code;
  }

  render() {
    console.log(this.props.pointPosition);
    if (this.state.latitude === 0) {
      this.findCoordinates(true);
    }
    /* find parkings */
    let json1 = [
      {
        ville: 'Tourcoing',
        nom: 'Parking St Christophe',
        longitude: 3.1563355257911,
        latitude: 50.719783638855,
        nombrePlacesDispo: 573,
        nombrePlacesMax: 757,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 1,
      },
      {
        ville: 'Lille',
        nom: 'Parking Les Tanneurs',
        longitude: 3.0672066642822,
        latitude: 50.634242723417,
        nombrePlacesDispo: 327,
        nombrePlacesMax: 563,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 2,
      },
      {
        ville: 'Roubaix',
        nom: 'Parking Mac Arthur Glen (Gambetta)',
        longitude: 3.1794603469077,
        latitude: 50.690935518349,
        nombrePlacesDispo: 655,
        nombrePlacesMax: 817,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 3,
      },
      {
        ville: 'Tourcoing',
        nom: 'Parking Hotel de Ville',
        longitude: 3.1588613346739,
        latitude: 50.725397814831,
        nombrePlacesDispo: 156,
        nombrePlacesMax: 434,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 4,
      },
      {
        ville: 'Lille',
        nom: 'Parking Bethune-Lafayette',
        longitude: 3.0650307565404,
        latitude: 50.634126801923,
        nombrePlacesDispo: 317,
        nombrePlacesMax: 465,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 5,
      },
      {
        ville: 'Lille',
        nom: 'Parking Gare Lille Europe',
        longitude: 3.0759420936069,
        latitude: 50.63975531318,
        nombrePlacesDispo: 408,
        nombrePlacesMax: 600,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 6,
      },
      {
        ville: 'Lille',
        nom: 'Parking Liberte',
        longitude: 3.0507159445117,
        latitude: 50.638683219714,
        nombrePlacesDispo: 176,
        nombrePlacesMax: 320,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 7,
      },
      {
        ville: 'Roubaix',
        nom: 'Parking Mac Arthur Glen (Lannoy)',
        longitude: 3.1812042807822,
        latitude: 50.690957413377,
        nombrePlacesDispo: 719,
        nombrePlacesMax: 403,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 8,
      },
      {
        ville: 'Lille',
        nom: 'Parking Petit Paradis',
        longitude: 3.0497056406508,
        latitude: 50.644622401855,
        nombrePlacesDispo: 114,
        nombrePlacesMax: 160,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 9,
      },
      {
        ville: 'Lille',
        nom: 'Parking Grand Place',
        longitude: 3.0636064596115,
        latitude: 50.637096656342,
        nombrePlacesDispo: 149,
        nombrePlacesMax: 342,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 10,
      },
      {
        ville: 'Roubaix',
        nom: 'Parking CENTRE',
        longitude: 3.1720968516789,
        latitude: 50.69107087007,
        nombrePlacesDispo: 27,
        nombrePlacesMax: 85,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 11,
      },
      {
        ville: 'Lille',
        nom: 'Parking Vieux Lille',
        longitude: 3.0640413195595,
        latitude: 50.641585703466,
        nombrePlacesDispo: 78,
        nombrePlacesMax: 246,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 12,
      },
      {
        ville: "Villeneuve d'Ascq",
        nom: 'Parking LESPRES',
        longitude: 3.1241737022298,
        latitude: 50.649200626609,
        nombrePlacesDispo: 0,
        nombrePlacesMax: 1000,
        estFerme: 1,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 13,
      },
      {
        ville: 'Lille',
        nom: 'Parking Nouveau Siecle',
        longitude: 3.0593686090015,
        latitude: 50.637291224437,
        nombrePlacesDispo: 313,
        nombrePlacesMax: 733,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 14,
      },
      {
        ville: 'Tourcoing',
        nom: 'Parking Miss Cavell',
        longitude: 3.1648392586451,
        latitude: 50.722523505561,
        nombrePlacesDispo: 150,
        nombrePlacesMax: 273,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 15,
      },
      {
        ville: 'Roubaix',
        nom: 'Parking LA POSTE',
        longitude: 3.1759791866557,
        latitude: 50.690304210049,
        nombrePlacesDispo: 44,
        nombrePlacesMax: 82,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 16,
      },
      {
        ville: 'Roubaix',
        nom: 'Parking GRAND RUE',
        longitude: 3.1756508561718,
        latitude: 50.693314568882,
        nombrePlacesDispo: 230,
        nombrePlacesMax: 1300,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 17,
      },
      {
        ville: 'Roubaix',
        nom: 'Parking CHURCHILL',
        longitude: 3.1788455225921,
        latitude: 50.68932265954,
        nombrePlacesDispo: 417,
        nombrePlacesMax: 440,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 18,
      },
      {
        ville: 'Lille',
        nom: 'Parking Opera',
        longitude: 3.0665201664084,
        latitude: 50.639290368021,
        nombrePlacesDispo: 259,
        nombrePlacesMax: 470,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 19,
      },
      {
        ville: 'Lille',
        nom: 'Parking Rihour-Printemps',
        longitude: 3.0613340485781,
        latitude: 50.635417765946,
        nombrePlacesDispo: 180,
        nombrePlacesMax: 300,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 20,
      },
      {
        ville: 'Lille',
        nom: 'Parking Euralille',
        longitude: 3.0730428283576,
        latitude: 50.636788993222,
        nombrePlacesDispo: 1959,
        nombrePlacesMax: 2873,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 21,
      },
      {
        ville: 'Lille',
        nom: 'Parking Plaza',
        longitude: 3.0583061274138,
        latitude: 50.635107671686,
        nombrePlacesDispo: 90,
        nombrePlacesMax: 323,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 22,
      },
      {
        ville: "Villeneuve d'Ascq",
        nom: 'Parking TRIOLO',
        longitude: 3.1383831794171,
        latitude: 50.614267583537,
        nombrePlacesDispo: 0,
        nombrePlacesMax: 1400,
        estFerme: 1,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 23,
      },
      {
        ville: 'Lille',
        nom: 'Parking Gare Lille Flandres',
        longitude: 3.0724043454835,
        latitude: 50.634822185193,
        nombrePlacesDispo: 47,
        nombrePlacesMax: 374,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 24,
      },
      {
        ville: "Villeneuve d'Ascq",
        nom: 'Parking 4CANTONS',
        longitude: 3.1381469089435,
        latitude: 50.604608674461,
        nombrePlacesDispo: 0,
        nombrePlacesMax: 2000,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 25,
      },
      {
        ville: 'Lille',
        nom: 'Parking Republique',
        longitude: 3.0626957915787,
        latitude: 50.631013293077,
        nombrePlacesDispo: 150,
        nombrePlacesMax: 230,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 26,
      },
      {
        ville: 'Lille',
        nom: 'Parking Grand Palais',
        longitude: 3.0785725846773,
        latitude: 50.631466425318,
        nombrePlacesDispo: 998,
        nombrePlacesMax: 1182,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 27,
      },
      {
        ville: 'Lille',
        nom: 'Parking Tours',
        longitude: 3.0766515082135,
        latitude: 50.638774339067,
        nombrePlacesDispo: 76,
        nombrePlacesMax: 160,
        estFerme: 0,
        dateMAJ: 1643583600000,
        demandes: [],
        idP: 28,
      },
    ];
    // todo : faire l'appel au backend
    let j6code = this.createMarkers(json1, this.props);
    /*
    console.log(
      'set view : ' + this.state.latitude + '-' + this.state.longitude,
    );*/
    if (this.state.longitude !== 0) {
      j6code +=
        'mymap.setView([' +
        this.state.latitude +
        ',' +
        this.state.longitude +
        '], 12);';
    }
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.Container}>
          <WebView
            ref={this.myRef}
            source={{html: html_script}}
            style={{
              width: Dimensions.get('window').width,
              resizeMode: 'cover',
              flex: 1,
            }}
            javaScriptEnabledAndroid={true}
            injectedJavaScript={j6code}
            onMessage={data => {
              let obj = JSON.stringify(data.nativeEvent.data);
              console.log('You clicked the map at ' + obj);
            }}
          />
        </SafeAreaView>
      </View>
    );
  }
}
export default ParkingsMap;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: 100,
  },
});
